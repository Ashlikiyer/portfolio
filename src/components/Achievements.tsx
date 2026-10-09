import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { FiAward, FiLock, FiX } from "react-icons/fi";
import {
  ACHIEVEMENTS,
  AchievementsContext,
  useAchievements,
  type AchievementId,
} from "./achievementsContext";

const STORAGE_KEY = "akf-achievements";
const TOAST_MS = 3400;
const TOAST_MS_QUEUED = 1800; // shorter when more toasts are waiting

function loadUnlocked(): AchievementId[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    const valid = new Set(ACHIEVEMENTS.map((a) => a.id));
    return Array.isArray(parsed) ? parsed.filter((id): id is AchievementId => valid.has(id)) : [];
  } catch {
    return [];
  }
}

function saveUnlocked(ids: AchievementId[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Storage blocked (private mode etc.): progress just won't persist
  }
}

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<AchievementId[]>(loadUnlocked);
  // Toasts waiting to be shown; "complete" is the final 100% toast
  const [queue, setQueue] = useState<(AchievementId | "complete")[]>([]);

  // Ref mirrors state so repeat unlock calls in the same tick are ignored
  const unlockedRef = useRef(unlocked);

  const unlock = useCallback((id: AchievementId) => {
    if (unlockedRef.current.includes(id)) return;
    const next = [...unlockedRef.current, id];
    unlockedRef.current = next;
    saveUnlocked(next);
    setUnlocked(next);
    setQueue((q) => [...q, id, ...(next.length === ACHIEVEMENTS.length ? ["complete" as const] : [])]);
  }, []);

  const reset = useCallback(() => {
    unlockedRef.current = [];
    setUnlocked([]);
    setQueue([]);
    saveUnlocked([]);
  }, []);

  const value = useMemo(() => ({ unlocked, unlock, reset }), [unlocked, unlock, reset]);

  return (
    <AchievementsContext.Provider value={value}>
      {children}
      <AchievementToast queue={queue} onDone={() => setQueue((q) => q.slice(1))} />
      <AchievementsPanel />
    </AchievementsContext.Provider>
  );
}

function AchievementToast({
  queue,
  onDone,
}: {
  queue: (AchievementId | "complete")[];
  onDone: () => void;
}) {
  const current = queue[0];
  const [leaving, setLeaving] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const queuedRef = useRef(false);
  queuedRef.current = queue.length > 1;

  useEffect(() => {
    if (!current) return;
    setLeaving(false);
    const ms = queuedRef.current ? TOAST_MS_QUEUED : TOAST_MS;
    const hide = setTimeout(() => setLeaving(true), ms - 300);
    const done = setTimeout(() => onDoneRef.current(), ms);
    return () => {
      clearTimeout(hide);
      clearTimeout(done);
    };
  }, [current]);

  if (!current) return null;

  const isComplete = current === "complete";
  const achievement = ACHIEVEMENTS.find((a) => a.id === current);

  return (
    <>
      {isComplete && <Confetti />}
      <div
        role="status"
        aria-live="polite"
        key={current}
        className={`fixed z-[70] bottom-20 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 sm:bottom-6 w-[calc(100%-2rem)] sm:w-auto max-w-sm achievement-toast ${
          leaving ? "is-leaving" : ""
        }`}
      >
        <div className="flex items-center gap-3.5 rounded-2xl border border-violet-400/25 bg-ink-2/95 backdrop-blur-md px-4 py-3.5 shadow-2xl shadow-violet-900/40">
          <div className="shrink-0 w-11 h-11 rounded-xl grid place-items-center bg-linear-to-br from-violet-500 to-cyan-400 text-ink">
            <FiAward className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
              {isComplete ? "100% explored" : "Achievement unlocked"}
            </p>
            <p className="font-display font-semibold text-white truncate">
              {isComplete ? "You found everything!" : achievement?.title}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {isComplete ? "Thanks for exploring. Let's talk!" : achievement?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function AchievementsPanel() {
  const { unlocked, reset } = useAchievements();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const total = ACHIEVEMENTS.length;
  const pct = Math.round((unlocked.length / total) * 100);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={panelRef} className="fixed z-[60] bottom-4 right-4 sm:bottom-6 sm:right-6">
      {open && (
        <div
          id="achievements-panel"
          className="absolute bottom-14 right-0 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-ink-2/95 backdrop-blur-md shadow-2xl shadow-black/50 p-4"
        >
          <div className="flex items-center justify-between mb-1">
            <p className="font-display font-semibold text-white">Achievements</p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close achievements"
              className="w-7 h-7 grid place-items-center rounded-lg text-slate-400 hover:text-white hover:bg-white/6"
            >
              <FiX />
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            Explore the site to unlock them all · {pct}%
          </p>
          <div className="h-1.5 rounded-full bg-white/8 overflow-hidden mb-4">
            <div
              className="h-full rounded-full bg-linear-to-r from-violet-500 to-cyan-400 transition-[width] duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <ul className="space-y-1.5 max-h-[min(30rem,60vh)] overflow-y-auto pr-1">
            {ACHIEVEMENTS.map((a) => {
              const done = unlocked.includes(a.id);
              return (
                <li
                  key={a.id}
                  className={`flex items-center gap-3 rounded-xl px-2.5 py-2 ${done ? "bg-violet-400/8" : ""}`}
                >
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg grid place-items-center ${
                      done ? "bg-linear-to-br from-violet-500 to-cyan-400 text-ink" : "bg-white/5 text-slate-600"
                    }`}
                  >
                    {done ? <FiAward className="w-4 h-4" /> : <FiLock className="w-3.5 h-3.5" />}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-sm font-medium ${done ? "text-white" : "text-slate-500"}`}>{a.title}</p>
                    <p className="text-xs text-slate-500 truncate">{done ? a.description : a.hint}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          {unlocked.length > 0 && (
            <button
              onClick={reset}
              className="mt-3 text-xs text-slate-500 hover:text-slate-300 underline underline-offset-2"
            >
              Reset progress
            </button>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="achievements-panel"
        aria-label={`Achievements: ${unlocked.length} of ${total} unlocked`}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-2/90 backdrop-blur-md pl-3 pr-3.5 py-2 text-sm text-slate-200 shadow-lg shadow-black/40 hover:border-violet-400/40 transition-colors"
      >
        <FiAward className="w-4 h-4 text-violet-300" />
        <span className="font-mono text-xs">
          {unlocked.length}/{total}
        </span>
      </button>
    </div>
  );
}

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ["#a78bfa", "#8b5cf6", "#67e8f9", "#f0abfc", "#34d399", "#ffffff"];
    const pieces = Array.from({ length: 140 }, () => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.6,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 18 - 8,
      size: Math.random() * 6 + 4,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let frame = 0;
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pieces) {
        p.vy += 0.45;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - frame / 160);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }
      if (++frame < 160) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[80] pointer-events-none" aria-hidden="true" />;
}
