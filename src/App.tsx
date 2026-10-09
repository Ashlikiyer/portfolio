import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import "./App.css";
import LightRays from "./components/LightRays";
import TextType from "./components/TextType";
import LogoLoop from "./components/LogoLoop";
import MagicBento from "./components/MagicBento";
import CertificateBento from "./components/CertificateBento";
import StaggeredMenu from "./components/StaggeredMenu";
import Terminal from "./components/Terminal";
import { useAchievements, type AchievementId } from "./components/achievementsContext";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight, FiMapPin, FiArrowUp, FiTerminal } from "react-icons/fi";
import profileImage from "./assets/kels.png";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  navLinks,
  socials,
  stats,
  techStack,
  experience,
  highlights,
  projects,
  certificates,
  certSummary,
  skills,
} from "./data";

const card =
  "rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.04]";

function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="reveal mb-12 md:mb-16 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80 mb-4 flex items-center gap-3">
        <span className="text-cyan-300">{index}</span>
        <span className="h-px w-8 bg-violet-400/40" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-medium text-violet-200 bg-violet-400/10 border border-violet-400/15">
      {children}
    </span>
  );
}

// Sections that unlock an achievement once scrolled into view
const sectionAchievements: Record<string, AchievementId> = {
  experience: "historian",
  skills: "stack",
  certificates: "certified",
  contact: "explorer",
};

function App() {
  const { unlock } = useAchievements();
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    unlock("hello");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            unlock(sectionAchievements[entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    Object.keys(sectionAchievements).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [unlock]);

  // Backtick opens the terminal from anywhere (except while typing in a field)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, [contenteditable=true]")) return;
      if (e.key === "`") {
        e.preventDefault();
        setTerminalOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "#home" },
    ...navLinks.map((l) => ({
      label: l.label,
      ariaLabel: `Go to ${l.label.toLowerCase()}`,
      link: l.href,
    })),
  ];

  const socialItems = socials.map((s) => ({ label: s.label, link: s.href }));

  const [featured, ...otherProjects] = projects;

  return (
    <div className="min-h-screen bg-ink text-slate-200 relative">
      {/* Top bar: logo + desktop links. The Menu toggle comes from StaggeredMenu */}
      <div className="fixed top-0 inset-x-0 z-40 h-24 bg-linear-to-b from-ink via-ink/85 to-transparent pointer-events-none" />
      <nav className="fixed top-0 left-0 z-40 h-22 flex items-center px-6 md:px-8 gap-10">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-2"
          aria-label="Ashley Kier Ferreol, back to top"
        >
          <span className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-cyan-400 grid place-items-center text-ink text-sm">
            AK
          </span>
          <span className="hidden sm:inline">Ashley Kier</span>
        </a>
      </nav>
      <nav
        className="hidden lg:flex fixed top-0 left-1/2 -translate-x-1/2 z-40 h-22 items-center"
        aria-label="Sections"
      >
        <ul className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] backdrop-blur-md px-2 py-1.5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-1.5 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#7C3AED"
        changeMenuColorOnOpen={true}
        colors={["#7C3AED", "#5B21B6", "#4C1D95"]}
        accentColor="#a78bfa"
        isFixed={true}
      />

      {/* Background layers */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#8b5cf6"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.4}
          pulsating={false}
          fadeDistance={1.1}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.03}
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-[900px] bg-grid z-0 pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-0 bg-noise z-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center px-6 pt-32 pb-16"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-20 items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to opportunities
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white">
                    Ashley Kier
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-300 to-cyan-300">
                      Ferreol
                    </span>
                  </h1>

                  <div className="font-mono text-lg md:text-xl text-slate-300 flex items-center gap-2 min-h-8">
                    <span className="text-cyan-300">&gt;</span>
                    <TextType
                      text={["Software Engineer", "AI Developer", "Frontend & Full-Stack"]}
                      typingSpeed={90}
                      pauseDuration={2000}
                      deletingSpeed={45}
                      loop={true}
                      showCursor={true}
                      cursorCharacter="▋"
                      cursorClassName="text-violet-400"
                      className="text-slate-200"
                      as="span"
                    />
                  </div>
                </div>

                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                  Software engineer building practical, secure, and interactive
                  digital experiences with{" "}
                  <span className="text-slate-100 font-medium">
                    full-stack development and AI integration
                  </span>
                  . Experienced through professional roles in software
                  engineering, cloud administration, QA testing, and product
                  development across{" "}
                  <span className="text-slate-100 font-medium">AWS</span>,{" "}
                  <span className="text-slate-100 font-medium">full-stack</span>,
                  and <span className="text-slate-100 font-medium">AI</span>.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 hover:bg-violet-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-colors"
                  >
                    View projects
                    <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] hover:bg-white/[0.07] px-5 py-3 text-sm font-semibold text-slate-100 transition-colors"
                  >
                    <FaEnvelope className="w-3.5 h-3.5" />
                    Get in touch
                  </a>
                  <div className="flex items-center gap-1 sm:ml-2">
                    {socials.slice(0, 2).map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-11 h-11 rounded-xl grid place-items-center text-slate-400 hover:text-white hover:bg-white/6 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    Philippines
                  </span>
                  <button
                    type="button"
                    onClick={() => setTerminalOpen(true)}
                    className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                  >
                    <FiTerminal className="w-4 h-4" />
                    Open terminal
                    <kbd className="hidden sm:inline font-mono text-[11px] border border-white/15 rounded px-1.5 py-px">`</kbd>
                  </button>
                </div>
              </div>

              {/* Portrait */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-violet-600/30 via-fuchsia-500/10 to-cyan-400/20 blur-3xl" aria-hidden="true" />
                  <span className="corner -top-3 -left-3 border-t-2 border-l-2 rounded-tl-lg" aria-hidden="true" />
                  <span className="corner -top-3 -right-3 border-t-2 border-r-2 rounded-tr-lg" aria-hidden="true" />
                  <span className="corner -bottom-3 -left-3 border-b-2 border-l-2 rounded-bl-lg" aria-hidden="true" />
                  <span className="corner -bottom-3 -right-3 border-b-2 border-r-2 rounded-br-lg" aria-hidden="true" />

                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-ink-2">
                    <img
                      src={profileImage}
                      alt="Ashley Kier Ferreol"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
                  </div>

                  {/* Terminal chip */}
                  <button
                    type="button"
                    onClick={() => setTerminalOpen(true)}
                    aria-label="Open interactive terminal"
                    className="group absolute -left-4 sm:-left-10 bottom-8 text-left rounded-xl border border-white/10 hover:border-cyan-300/40 bg-ink-2/90 backdrop-blur-md shadow-2xl shadow-black/40 p-3.5 font-mono text-xs leading-relaxed transition-colors cursor-pointer"
                  >
                    <span className="absolute -top-3 right-3 rounded-full bg-cyan-300 text-ink px-2 py-0.5 text-[10px] font-semibold shadow-lg shadow-cyan-500/30 group-hover:-translate-y-0.5 transition-transform">
                      click me
                    </span>
                    <div className="flex gap-1.5 mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <p>
                      <span className="text-cyan-300">$</span>{" "}
                      <span className="text-slate-400">focus:</span>{" "}
                      <span className="text-violet-300">cloud · ai · web</span>
                    </p>
                    <p className="caret">
                      <span className="text-cyan-300">$</span>{" "}
                      <span className="text-slate-400">status:</span>{" "}
                      <span className="text-emerald-300">building</span>
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`reveal ${card} p-5 flex items-center gap-4`}
                  style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
                >
                  <div className="hidden sm:grid shrink-0 w-11 h-11 rounded-xl place-items-center bg-violet-400/10 text-violet-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl md:text-3xl font-semibold text-white">
                      {value}
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech marquee */}
        <div className="border-y border-white/6 bg-white/[0.015] py-6">
          <LogoLoop
            logos={techStack.map(({ icon: Icon, name, href }) => ({
              node: (
                <span className="flex items-center gap-2.5 text-base font-medium text-slate-400 hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                  {name}
                </span>
              ),
              title: name,
              href,
            }))}
            speed={40}
            direction="left"
            logoHeight={28}
            gap={56}
            pauseOnHover={true}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="#08070f"
            ariaLabel="Technology stack"
          />
        </div>

        {/* Experience */}
        <section id="experience" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              index="01"
              eyebrow="Experience"
              title={
                <>
                  Where I've{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-300">
                    worked
                  </span>
                </>
              }
              subtitle="Hands-on roles building cloud infrastructure, testing quality, and leading product marketing."
            />

            <ol className="relative border-l border-white/10 ml-2 md:ml-0 space-y-6">
              {experience.map((job, i) => (
                <li
                  key={job.role}
                  className="reveal relative pl-8 md:pl-12"
                  style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}
                >
                  <span
                    className={`absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-2 border-ink ${
                      job.current ? "bg-emerald-400 shadow-[0_0_0_4px_rgb(52_211_153/0.15)]" : "bg-violet-400"
                    }`}
                    aria-hidden="true"
                  />
                  <article className={`${card} p-6 md:p-8 grid md:grid-cols-[180px_1fr] gap-3 md:gap-8`}>
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-500 md:pt-1.5">
                      {job.period}
                      {job.current && (
                        <span className="mt-2 block w-fit rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 text-[10px] text-emerald-300">
                          Current
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="text-violet-300 font-medium mt-1">{job.company}</p>
                      <p className="text-slate-400 text-sm md:text-[15px] mt-3 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {job.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`reveal ${card} p-6`}
                  style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/80 mb-3">
                    {h.label}
                  </p>
                  <p className="font-display text-lg font-semibold text-white">{h.title}</p>
                  {h.lines.map((line) => (
                    <p key={line} className="text-slate-400 text-sm mt-1">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              index="02"
              eyebrow="Skills"
              title={
                <>
                  What I{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-300">
                    work with
                  </span>
                </>
              }
              subtitle="Technologies and capabilities I use to build useful, reliable products."
            />

            <div className="reveal">
              <MagicBento
                cards={skills.map((s) => ({ ...s, color: "rgba(15, 13, 28, 0.7)" }))}
                textAutoHide={false}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={10}
                glowColor="139, 92, 246"
              />
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
              <div className="[&>div]:mb-0">
                <SectionHeading
                  index="03"
                  eyebrow="Certificates"
                  title={
                    <>
                      Certifications &{" "}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-300">
                        badges
                      </span>
                    </>
                  }
                  subtitle="AWS training, technical courses, badges, and academic achievements."
                />
              </div>
              <dl className="reveal grid grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/8 bg-white/8 shrink-0">
                {certSummary.map((s) => (
                  <div key={s.label} className="bg-ink-2 px-4 md:px-6 py-4 text-center">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-white">{s.value}</dd>
                    <p className="text-[11px] md:text-xs text-slate-500 mt-0.5" aria-hidden="true">
                      {s.label}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal">
              <CertificateBento certificates={certificates} enableHover={true} enableGlow={true} />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              index="04"
              eyebrow="Projects"
              title={
                <>
                  Things I've{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-300">
                    built
                  </span>
                </>
              }
              subtitle="Applications showcasing full-stack development and AI integration, all live and deployed."
            />

            {/* Featured project */}
            <a
              href={featured.href}
              onClick={() => unlock("curious")}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group ${card} overflow-hidden grid lg:grid-cols-[1.2fr_1fr] mb-5`}
            >
              <div className="relative overflow-hidden bg-ink-2 aspect-video lg:aspect-auto lg:min-h-80">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-transparent via-transparent to-ink/30" />
              </div>
              <div className="p-6 md:p-10 flex flex-col">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider">
                  <span className="text-cyan-300">Featured</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-500">{featured.kind}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mt-4 group-hover:text-violet-200 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-slate-400 mt-4 leading-relaxed">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {featured.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <span className="mt-auto pt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 group-hover:text-white transition-colors">
                  Visit live site
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {otherProjects.map((p, i) => (
                <a
                  key={p.title}
                  href={p.href}
                  onClick={() => unlock("curious")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal group ${card} overflow-hidden flex flex-col`}
                  style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
                >
                  <div className="relative aspect-video overflow-hidden bg-ink-2">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ink/70 backdrop-blur border border-white/10 grid place-items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiArrowUpRight />
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      {p.kind}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-white mt-2 group-hover:text-violet-200 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="reveal mt-10 text-center">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <SiGithub className="w-4 h-4" />
                More on GitHub
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 md:py-32 px-6">
          <div className="reveal max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-violet-600/20 via-ink-2 to-cyan-500/10 px-6 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 mb-5">
                05 · Contact
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Let's build something together
              </h2>
              <p className="mt-5 text-slate-300/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Open to software engineering, cloud, and AI roles, and always up
                for a good collaboration. My inbox is open.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-ink hover:bg-violet-100 px-6 py-3.5 text-sm font-semibold transition-colors"
                >
                  <FaEnvelope className="w-3.5 h-3.5" />
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  <SiLinkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/6">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-cyan-400 grid place-items-center text-ink text-sm font-display font-bold">
                AK
              </span>
              <div>
                <p className="text-sm font-medium text-white">Ashley Kier Ferreol</p>
                <p className="text-xs text-slate-500">Crafted with care and coffee · © 2026</p>
              </div>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg grid place-items-center text-slate-400 hover:text-white hover:bg-white/6 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="ml-2 w-10 h-10 rounded-lg grid place-items-center border border-white/10 text-slate-300 hover:text-white hover:border-violet-400/40 transition-colors"
              >
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
