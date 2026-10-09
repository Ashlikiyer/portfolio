import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useAchievements } from "./achievementsContext";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  certificates,
  experience,
  highlights,
  projects,
  skills,
} from "../data";

type Line = { id: number; node: ReactNode };

const PROMPT = (
  <span className="shrink-0">
    <span className="text-emerald-300">guest</span>
    <span className="text-slate-500">@</span>
    <span className="text-violet-300">ashley</span>
    <span className="text-slate-500">:</span>
    <span className="text-cyan-300">~</span>
    <span className="text-slate-400">$</span>
  </span>
);

const SECTIONS = ["home", "experience", "skills", "certificates", "projects", "contact"];

const PUBLIC_COMMANDS: [string, string][] = [
  ["help", "list available commands"],
  ["whoami", "who is Ashley?"],
  ["experience", "work history"],
  ["skills", "what I work with"],
  ["projects", "things I've built"],
  ["certs", "certifications & badges"],
  ["education", "school & affiliations"],
  ["contact", "how to reach me"],
  ["email", "copy my email to clipboard"],
  ["goto <section>", `jump to: ${SECTIONS.join(", ")}`],
  ["date", "current date & time"],
  ["echo <text>", "print text"],
  ["clear", "clear the screen"],
  ["exit", "close the terminal"],
];

const HIDDEN_COMMANDS = ["sudo", "coffee", "ls", "rm", "matrix", "hello", "hi", "secret"];
const ALL_COMMANDS = [...PUBLIC_COMMANDS.map(([c]) => c.split(" ")[0]), ...HIDDEN_COMMANDS];

const finePointer = () => window.matchMedia("(pointer: fine)").matches;

const QUICK_COMMANDS = ["help", "whoami", "projects", "contact", "ls -a"];

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-2 hover:decoration-cyan-300"
    >
      {children}
    </a>
  );
}

const Muted = ({ children }: { children: ReactNode }) => <span className="text-slate-500">{children}</span>;
const Accent = ({ children }: { children: ReactNode }) => <span className="text-violet-300">{children}</span>;

const WELCOME = (
  <div className="space-y-1">
    <pre className="text-violet-300 leading-tight text-[10px] sm:text-xs">{String.raw`    _    _  _______
   / \  | |/ /  ___|
  / _ \ | ' /| |_
 / ___ \| . \|  _|
/_/   \_\_|\_\_|      ashley-os v2.6`}</pre>
    <p>
      Welcome! Type <Accent>help</Accent> to see what you can do. <Muted>(psst… not every command is listed)</Muted>
    </p>
  </div>
);

export default function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { unlock } = useAchievements();
  const [lines, setLines] = useState<Line[]>([{ id: 0, node: WELCOME }]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const nextId = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    unlock("terminal");
    lastFocus.current = document.activeElement as HTMLElement | null;
    // Skip autofocus on touch screens so the keyboard does not cover the output
    const t = setTimeout(() => finePointer() && inputRef.current?.focus(), 50);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus?.({ preventScroll: true });
    };
  }, [open, unlock]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const print = (...nodes: ReactNode[]) =>
    setLines((prev) => [...prev, ...nodes.map((node) => ({ id: nextId.current++, node }))]);

  const secret = () => unlock("secret");

  const goto = (section: string) => {
    onClose();
    setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 150);
  };

  const run = (raw: string) => {
    const cmdLine = raw.trim();
    print(
      <div className="flex gap-2">
        {PROMPT}
        <span className="text-slate-100 break-all">{cmdLine}</span>
      </div>,
    );
    if (!cmdLine) return;

    setHistory((h) => [...h, cmdLine]);
    setHistoryIndex(null);

    const [cmd, ...args] = cmdLine.split(/\s+/);
    const arg = args.join(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        print(
          <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-0.5">
            {PUBLIC_COMMANDS.map(([c, d]) => (
              <div key={c} className="contents">
                <Accent>{c}</Accent>
                <Muted>{d}</Muted>
              </div>
            ))}
          </div>,
        );
        break;

      case "whoami":
      case "about":
        print(
          <p>
            <span className="text-white font-semibold">Ashley Kier Ferreol</span>: software engineer from the
            Philippines building practical, secure, and interactive digital experiences with full-stack development and
            AI integration. Background across software engineering, cloud administration, QA, and product.
          </p>,
        );
        break;

      case "experience":
        print(
          <div className="space-y-2">
            {experience.map((job) => (
              <div key={job.role}>
                <p>
                  <Accent>{job.role}</Accent> <Muted>@</Muted> {job.company}
                </p>
                <Muted>
                  {job.period} · {job.tags.join(", ")}
                </Muted>
              </div>
            ))}
          </div>,
        );
        break;

      case "skills":
        print(
          <div className="space-y-1">
            {skills.map((s) => (
              <p key={s.title}>
                <Accent>{s.title.padEnd(24, " ")}</Accent>
                <Muted>{s.description.split(" — ")[0]}</Muted>
              </p>
            ))}
          </div>,
        );
        break;

      case "projects":
        print(
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.title}>
                <p>
                  <Accent>{p.title}</Accent> <Muted>· {p.kind}</Muted>
                </p>
                <p>
                  <Muted>{p.tags.join(" / ")}</Muted> → <Link href={p.href}>live</Link>
                </p>
              </div>
            ))}
          </div>,
        );
        break;

      case "certs":
      case "certificates":
        print(
          <div className="space-y-0.5">
            {certificates.map((c) => (
              <p key={c.title}>
                <span className="text-emerald-300">✔</span> {c.title} <Muted>· {c.issuer}, {c.year}</Muted>
              </p>
            ))}
          </div>,
        );
        break;

      case "education":
        print(
          <div className="space-y-0.5">
            {highlights.map((h) => (
              <p key={h.label}>
                <Accent>{h.label.padEnd(14, " ")}</Accent>
                {h.title} <Muted>· {h.lines.join(", ")}</Muted>
              </p>
            ))}
          </div>,
        );
        break;

      case "contact":
      case "socials":
        print(
          <div className="space-y-0.5">
            <p>
              <Accent>email    </Accent> <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
            </p>
            <p>
              <Accent>github   </Accent> <Link href={GITHUB}>{GITHUB.replace("https://", "")}</Link>
            </p>
            <p>
              <Accent>linkedin </Accent> <Link href={LINKEDIN}>{LINKEDIN.replace("https://www.", "")}</Link>
            </p>
          </div>,
        );
        break;

      case "email":
        navigator.clipboard
          ?.writeText(EMAIL)
          .then(() => print(<p className="text-emerald-300">Copied {EMAIL} to clipboard ✔</p>))
          .catch(() => print(<p>Couldn't access the clipboard. Here it is: {EMAIL}</p>));
        break;

      case "goto":
      case "cd": {
        const target = arg.replace(/^[#/~.]+/, "").toLowerCase();
        if (SECTIONS.includes(target)) {
          goto(target);
        } else {
          print(
            <p>
              Unknown section <Accent>{arg || "(none)"}</Accent>. Try one of: {SECTIONS.join(", ")}
            </p>,
          );
        }
        break;
      }

      case "date":
        print(<p>{new Date().toString()}</p>);
        break;

      case "echo":
        print(<p>{arg}</p>);
        break;

      case "clear":
        setLines([]);
        break;

      case "exit":
      case "quit":
        onClose();
        break;

      // ---- hidden commands ----
      case "ls":
        if (args.includes("-a") || args.includes("-la") || args.includes("-al")) {
          secret();
          print(
            <div>
              <p className="flex flex-wrap gap-x-5">
                <Muted>.</Muted>
                <Muted>..</Muted>
                <Accent>.coffee</Accent>
                <Accent>.secret</Accent>
                <Accent>.matrix</Accent>
                <span>resume.txt</span>
                <span>projects/</span>
              </p>
              <Muted>Hidden files are commands too: try coffee, secret, matrix… or sudo hire-me</Muted>
            </div>,
          );
        } else {
          print(
            <p className="flex flex-wrap gap-x-5">
              <span>resume.txt</span>
              <span>projects/</span>
              <Muted># maybe try ls -a</Muted>
            </p>,
          );
        }
        break;

      case "sudo":
        secret();
        if (arg.startsWith("hire")) {
          print(
            <div>
              <p className="text-emerald-300">[sudo] password for guest: ********</p>
              <p>Access granted. Excellent decision. 🎉 Opening your mail client…</p>
            </div>,
          );
          setTimeout(() => {
            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Let's work together")}`;
          }, 900);
        } else {
          print(<p>guest is not in the sudoers file. This incident will be reported. 👀 (try sudo hire-me)</p>);
        }
        break;

      case "rm":
        secret();
        print(<p className="text-red-300">Nice try. This portfolio is protected by vibes and good backups. 🛡️</p>);
        break;

      case "coffee":
        secret();
        print(
          <pre className="text-amber-200 leading-tight">{String.raw`      ( (
       ) )
    ........
    |      |]
    \      /    brewing… this portfolio runs on it.
     '----'`}</pre>,
        );
        break;

      case "matrix":
        secret();
        print(
          <p className="text-emerald-400">
            Wake up, guest… the Matrix has you. Follow the white rabbit 🐇 (it leads to{" "}
            <Link href={`mailto:${EMAIL}`}>my inbox</Link>).
          </p>,
        );
        break;

      case "secret":
        secret();
        print(<p>🤫 The real secret: Ashley is open to opportunities. Run <Accent>contact</Accent>.</p>);
        break;

      case "hello":
      case "hi":
        secret();
        print(<p>Hey there 👋 Thanks for stopping by. Type <Accent>help</Accent> to look around.</p>);
        break;

      default:
        print(
          <p>
            command not found: <span className="text-red-300">{cmd}</span>. Type <Accent>help</Accent> for a list.
          </p>,
        );
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const i = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(i);
      setInput(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const i = historyIndex + 1;
      if (i >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(i);
        setInput(history[i]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const [first, ...rest] = input.split(" ");
      if (rest.length && (first === "goto" || first === "cd")) {
        const match = SECTIONS.filter((s) => s.startsWith(rest.join(" ")));
        if (match.length === 1) setInput(`${first} ${match[0]}`);
        return;
      }
      const matches = ALL_COMMANDS.filter((c) => c.startsWith(input) && !HIDDEN_COMMANDS.includes(c));
      if (matches.length === 1) setInput(matches[0] + " ");
      else if (matches.length > 1) print(<Muted>{matches.join("  ")}</Muted>);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[65] flex items-end sm:items-center justify-center sm:p-6 bg-black/60 backdrop-blur-sm terminal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Interactive terminal"
        className="terminal-window w-full sm:max-w-2xl h-[78vh] sm:h-[32rem] flex flex-col rounded-t-2xl sm:rounded-2xl border border-white/10 bg-[#0c0a17]/95 shadow-2xl shadow-violet-950/60 overflow-hidden font-mono text-[13px] text-slate-300"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="w-3 h-3 rounded-full bg-red-400/90 hover:bg-red-400"
          />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="flex-1 text-center text-xs text-slate-500 -ml-12">guest@ashley: ~</span>
          <kbd className="hidden sm:inline text-[10px] text-slate-500 border border-white/10 rounded px-1.5 py-0.5">esc</kbd>
        </div>

        {/* Output */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-2 leading-relaxed"
          onClick={() => {
            if (!window.getSelection()?.toString()) inputRef.current?.focus();
          }}
        >
          {lines.map((l) => (
            <div key={l.id}>{l.node}</div>
          ))}
          <div className="flex gap-2 items-center">
            {PROMPT}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal command"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="flex-1 min-w-0 bg-transparent outline-none text-slate-100 caret-cyan-300"
            />
          </div>
        </div>

        {/* Quick commands, mainly for touch devices */}
        <div className="flex gap-2 overflow-x-auto px-4 py-3 border-t border-white/8 bg-white/[0.02]">
          {QUICK_COMMANDS.map((c) => (
            <button
              key={c}
              onClick={() => {
                run(c);
                if (finePointer()) inputRef.current?.focus();
              }}
              className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 hover:text-white hover:border-violet-400/40"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
