import { useEffect } from "react";
import "./App.css";
import LightRays from "./components/LightRays";
import TextType from "./components/TextType";
import LogoLoop from "./components/LogoLoop";
import MagicBento from "./components/MagicBento";
import CertificateBento from "./components/CertificateBento";
import StaggeredMenu from "./components/StaggeredMenu";
import { SiCisco, SiDatacamp } from "react-icons/si";

// Import certificate images
import awsBadge from "./assets/aws badge.png";
import baseBuildBadge from "./assets/base build badge.jpg";
import cloudPractBadge from "./assets/cloud pract.png";
import datacampCloud from "./assets/datacamp cloud.png";
import introCyberBadge from "./assets/introduction to cyber badge.png";
import networkingBadge from "./assets/networking badge.png";
import solutionArchBadge from "./assets/solution arch.png";
import awsHackathon from "./assets/AWS_Hackaton.JPG";

// Import project images
import ragChatbot from "./assets/rag_chatbot.png";
import leadCrm from "./assets/lead_crm.png";
import gcfas from "./assets/gcfas.png";
import profileImage from "./assets/kels.png";
import {
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

function App() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll<HTMLElement>(
      ".timeline-item",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "#home" },
    {
      label: "Experience",
      ariaLabel: "View professional experience",
      link: "#experience",
    },
    {
      label: "Skills",
      ariaLabel: "View skills and expertise",
      link: "#skills",
    },
    {
      label: "Certificates",
      ariaLabel: "View certificates and badges",
      link: "#certificates",
    },
    {
      label: "Projects",
      ariaLabel: "View featured projects",
      link: "#projects",
    },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/Ashlikiyer" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/kierferreol/" },
    { label: "Email", link: "mailto:ashleykierferreol@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Staggered Menu Navigation */}
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

      {/* Animated Light Rays Background */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={1.2}
          saturation={0.7}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.03}
        />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center px-6 pt-32 pb-12"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Side - Info */}
              <div className="space-y-6">
                {/* Name - Featured */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400">
                      ASHLEY KIER
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400">
                      FERREOL
                    </span>
                  </h1>

                  {/* Title with Typing Animation */}
                  <div className="flex items-center gap-2">
                    <TextType
                        text={["Software Engineer", "AI Developer", "Frontend & Full-Stack"]}
                      typingSpeed={100}
                      pauseDuration={2000}
                      deletingSpeed={50}
                      loop={true}
                      showCursor={true}
                      cursorCharacter="|"
                      cursorClassName="text-blue-400"
                      className="text-2xl md:text-3xl font-semibold text-white"
                      as="span"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Software engineer building practical, secure, and interactive
                  digital experiences with{" "}
                    <span className="text-cyan-400 font-semibold">
                      full-stack development and AI integration
                    </span>
                    . Experienced through professional roles in software engineering,
                    cloud administration, QA testing, and product development across{" "}
                  <span className="text-orange-400 font-semibold">AWS</span>,{" "}
                  <span className="text-blue-400 font-semibold">full-stack</span>,
                  and <span className="text-purple-400 font-semibold">AI</span>.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/Ashlikiyer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/40 rounded-lg flex items-center justify-center transition-all group"
                    aria-label="GitHub"
                  >
                    <SiGithub className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kierferreol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/40 rounded-lg flex items-center justify-center transition-all group"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                  href="mailto:ashleykierferreol@gmail.com"
                    className="w-11 h-11 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/40 rounded-lg flex items-center justify-center transition-all group"
                    aria-label="Email"
                  >
                    <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Animated Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>

                  {/* Image Container with Theme Design */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:border-purple-500/50">
                    <img
                      src={profileImage}
                      alt="Ashley Kier Ferreol"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-colors duration-300"></div>
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors duration-300"></div>

                  {/* Border Accent Lines */}
                  <div className="absolute top-0 right-0 w-16 h-0.5 bg-linear-to-r from-transparent to-purple-400/50"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-linear-to-r from-purple-400/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Technology Logos Loop - Full Width at Bottom Center */}
            <div className="w-full mt-12 mb-16 relative">
              {/* Decorative glow effects */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

              <LogoLoop
                logos={[
                  {
                    node: <SiReact className="w-10 h-10" />,
                    title: "React",
                    href: "https://react.dev",
                  },
                  {
                    node: <SiJavascript className="w-10 h-10" />,
                    title: "JavaScript",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                  },
                  {
                    node: <SiTypescript className="w-10 h-10" />,
                    title: "TypeScript",
                    href: "https://www.typescriptlang.org",
                  },
                  {
                    node: <SiGit className="w-10 h-10" />,
                    title: "Git",
                    href: "https://git-scm.com",
                  },
                  {
                    node: <SiAmazon className="w-10 h-10" />,
                    title: "AWS",
                    href: "https://aws.amazon.com",
                  },
                  {
                    node: <SiDocker className="w-10 h-10" />,
                    title: "Docker",
                    href: "https://www.docker.com",
                  },
                  {
                    node: <SiKubernetes className="w-10 h-10" />,
                    title: "Kubernetes",
                    href: "https://kubernetes.io",
                  },
                  {
                    node: <SiPython className="w-10 h-10" />,
                    title: "Python",
                    href: "https://www.python.org",
                  },
                ]}
                speed={50}
                direction="left"
                logoHeight={40}
                gap={64}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="rgb(30 27 75)"
                ariaLabel="Technology stack"
                className="text-gray-300 relative z-10"
              />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-purple-500/20">
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 group-hover:scale-110 transition-transform">
                  1+
                </div>
                <p className="text-gray-400 text-xs mt-2">Year of Experience</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 group-hover:scale-110 transition-transform">
                  6+
                </div>
                <p className="text-gray-400 text-xs mt-2">Featured Projects</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 group-hover:scale-110 transition-transform">
                  4
                </div>
                <p className="text-gray-400 text-xs mt-2">Internships & Roles</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400 group-hover:scale-110 transition-transform">
                  3
                </div>
                <p className="text-gray-400 text-xs mt-2">Live Projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                  Experience
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Hands-on roles building cloud infrastructure, testing quality, and leading product marketing
              </p>
            </div>

            <div className="relative">
              {/* Central Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-400/70 to-purple-500/20 -translate-x-1/2"></div>

              {/* Timeline Dots */}
              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>

              <div className="space-y-8">
                {/* Experience Card 1 - Left */}
                <div className="relative">
                  <div className="timeline-dot hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="timeline-item md:w-1/2 md:pr-12">
                    <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Feb 2026 – May 2026</span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">System & Cloud Administrator</h3>
                      <p className="text-gray-300 font-medium">Pilipinas Micro-Matrix Technology (PMT Joint Venture) Inc.</p>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Administered system infrastructure and cloud environments ensuring uptime, reliability, and security. Supported deployment, configuration, and monitoring of cloud-based services and server resources. Collaborated on system provisioning, access management, and network configuration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Card 2 - Right */}
                <div className="relative">
                  <div className="timeline-dot hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="timeline-item md:w-1/2 md:ml-auto md:pl-12">
                    <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Oct 2025 – Present</span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">Marketing Lead</h3>
                      <p className="text-gray-300 font-medium">Catalyx Solutions</p>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Lead brand strategy, marketing direction, and market positioning for AI-driven and security-focused products. Developed marketing materials, pitch decks, and product messaging for hackathons, demos, and presentations. Coordinated user engagement, outreach, and promotional efforts with product and technical teams.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Card 3 - Left */}
                <div className="relative">
                  <div className="timeline-dot hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="timeline-item md:w-1/2 md:pr-12">
                    <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Dec 2025 – Feb 2026</span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">Quality Assurance Tester</h3>
                      <p className="text-gray-300 font-medium">Lujo PH</p>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Created and maintained QA test plans, test cases, and scenarios based on business requirements. Performed manual testing on web applications to identify bugs, usability issues, and performance concerns. Conducted functional, regression, and UAT testing. Documented defects and collaborated with developers and designers to ensure timely resolution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Card 4 - Right */}
                <div className="relative">
                  <div className="timeline-dot hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="timeline-item md:w-1/2 md:ml-auto md:pl-12">
                    <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Mar 2025 – Aug 2025</span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">Software Engineer & UI/UX Design Intern</h3>
                      <p className="text-gray-300 font-medium">Kloudtech</p>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Contributed to secure software development using best practices in coding, system design, and UI/UX principles. Implemented scalable backend and frontend components focusing on performance, usability, and security. Collaborated in Agile workflows, peer code reviews, CI/CD pipelines, and UI/UX design refinement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:scale-105 transition-transform">Education</h3>
                <p className="text-white font-semibold">Gordon College</p>
                <p className="text-gray-400 text-sm">BS Computer Science</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:scale-105 transition-transform">Achievements</h3>
                <p className="text-white font-semibold">Base PH Hackathon Winner</p>
                <p className="text-gray-400 text-sm">DataCamp Scholar</p>
                <p className="text-gray-500 text-xs">AWS Cloud Club Committee</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:scale-105 transition-transform">Affiliations</h3>
                <p className="text-white font-semibold">AWS Cloud Club</p>
                <p className="text-gray-400 text-sm">Operations Committee</p>
                <p className="text-gray-500 text-xs">Gordon College Chapter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technology Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skills &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                  Expertise
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Technologies and capabilities I use to build useful, reliable products
              </p>
            </div>

            <MagicBento
              cards={[
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Frontend Development",
                  description:
                    "React, React Native, Next.js, TailwindCSS, ShadCN UI, MUI — building responsive, modern web and mobile applications",
                  label: "Web Development",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Backend Development",
                  description:
                    "Node.js, Express.js — developing RESTful APIs, server-side logic, and backend services",
                  label: "Server-Side",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Cloud & Infrastructure",
                  description:
                    "AWS EC2, AWS Cloud Essentials, Ubuntu Server, Nginx, PM2 — deploying and managing cloud-based applications",
                  label: "Cloud Computing",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "UI/UX Design",
                  description:
                    "Figma, Canva — designing user interfaces and creating visual assets for web and mobile",
                  label: "Design",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "AI & LLM Integration",
                  description:
                    "Groq, Agora AI, Prompt Engineering, Function Calling, RAG systems — integrating AI models into applications",
                  label: "Artificial Intelligence",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Programming & Databases",
                  description:
                    "JavaScript, TypeScript, SQL, HTML/CSS — core programming skills and database fundamentals",
                  label: "Core Skills",
                },
              ]}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={10}
              glowColor="59, 130, 246"
            />
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Professional &{" "}
                <span className="text-purple-400">Certificates</span>
              </h2>
              <p className="text-gray-400 text-lg">
                AWS training, technical courses, badges, and academic achievements
              </p>
            </div>

            <CertificateBento
              certificates={[
                {
                  image: cloudPractBadge,
                  title: "AWS Certified Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  year: "2024",
                  type: "Certificate",
                  icon: SiAmazon,
                  badgeColor: "bg-orange-500",
                },
                {
                  image: solutionArchBadge,
                  title: "AWS Certified Solutions Architect",
                  issuer: "Amazon Web Services",
                  year: "2024",
                  type: "Certificate",
                  icon: SiAmazon,
                  badgeColor: "bg-orange-500",
                },
                {
                  image: awsBadge,
                  title: "AWS Cloud Badge",
                  issuer: "Amazon Web Services",
                  year: "2024",
                  type: "Badge",
                  icon: SiAmazon,
                  badgeColor: "bg-orange-500",
                },
                {
                  image: datacampCloud,
                  title: "Cloud Computing Fundamentals",
                  issuer: "DataCamp",
                  year: "2024",
                  type: "Course Complete",
                  icon: SiDatacamp,
                  badgeColor: "bg-green-500",
                },
                {
                  image: introCyberBadge,
                  title: "Introduction to Cybersecurity",
                  issuer: "Cisco Networking Academy",
                  year: "2023",
                  type: "Course Complete",
                  icon: SiCisco,
                  badgeColor: "bg-blue-600",
                },
                {
                  image: networkingBadge,
                  title: "Networking Essentials",
                  issuer: "Cisco Networking Academy",
                  year: "2023",
                  type: "Badge",
                  icon: SiCisco,
                  badgeColor: "bg-blue-600",
                },
                {
                  image: baseBuildBadge,
                  title: "Foundation Building Badge",
                  issuer: "Base PH",
                  year: "2023",
                  type: "Participant",
                  badgeColor: "bg-blue-600",
                },
                {
                  image: awsHackathon,
                  title: "AWS Cloud Club PH Innovation Cup 2025",
                  issuer: "AWS Cloud Club Philippines",
                  year: "2025",
                  type: "Participant",
                  icon: SiAmazon,
                  badgeColor: "bg-orange-500",
                },
              ]}
              enableHover={true}
              enableGlow={true}
            />

            {/* Certificate Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {/* Total Badges */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                   8
                </h3>
                <p className="text-gray-400 text-xs">Total Badges</p>
              </div>

              {/* Verified */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                   8
                </h3>
                <p className="text-gray-400 text-xs">Verified</p>
              </div>

              {/* This Year */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                   5
                </h3>
                <p className="text-gray-400 text-xs">This Year</p>
              </div>

              {/* Platforms */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 text-center hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                   4+
                </h3>
                <p className="text-gray-400 text-xs">Platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="text-purple-400">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Innovative applications showcasing full-stack development and AI
                integration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Personal RAG Chatbot Project */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
                <div className="relative h-44 overflow-hidden bg-slate-900/50">
                  <img
                    src={ragChatbot}
                    alt="Personal RAG Chatbot"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Personal RAG Chatbot
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    AI Document Q&A Platform with PDF ingestion, text chunking, vector embedding via Pinecone, semantic search, and LLM-generated responses using Groq's Llama 3.1 70B model. Supports multi-document querying with filename filtering.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs font-medium border border-purple-500/20">
                      Next.js 15
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs font-medium border border-blue-500/20">
                      TypeScript
                    </span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-xs font-medium border border-cyan-500/20">
                      LangChain.js
                    </span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-300 rounded text-xs font-medium border border-green-500/20">
                      Pinecone
                    </span>
                    <span className="px-2 py-0.5 bg-orange-500/10 text-orange-300 rounded text-xs font-medium border border-orange-500/20">
                      Groq
                    </span>
                  </div>
                  <a
                    href="https://ragdocs-app.vercel.app/landing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center group/link"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Lead-to-CRM Automation Agent Project */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
                <div className="relative h-44 overflow-hidden bg-slate-900/50">
                  <img
                    src={leadCrm}
                    alt="Lead-to-CRM Automation Agent"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Lead-to-CRM Automation Agent
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    End-to-end automation pipeline that captures form-submitted leads, processes them in real-time using Groq's LLM API for auto-generated summaries, urgency scoring, and categorization. Integrates with Airtable CRM and Slack for instant team notifications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs font-medium border border-purple-500/20">
                      Node.js
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs font-medium border border-blue-500/20">
                      Express.js
                    </span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-xs font-medium border border-cyan-500/20">
                      Groq API
                    </span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-300 rounded text-xs font-medium border border-green-500/20">
                      Airtable
                    </span>
                    <span className="px-2 py-0.5 bg-orange-500/10 text-orange-300 rounded text-xs font-medium border border-orange-500/20">
                      Slack API
                    </span>
                  </div>
                  <a
                    href="https://lead-to-crm-agent.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center group/link"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* GCFAS Project */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
                <div className="relative h-44 overflow-hidden bg-slate-900/50">
                  <img
                    src={gcfas}
                    alt="GCFAS Project"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    GCFAS - Gordon College Faculty Assessment System
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    A comprehensive faculty assessment system for Gordon College that streamlines the evaluation process. Built with modern web technologies to provide an efficient and user-friendly interface for faculty performance assessments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs font-medium border border-purple-500/20">
                      React
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs font-medium border border-blue-500/20">
                      TypeScript
                    </span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-xs font-medium border border-cyan-500/20">
                      TailwindCSS
                    </span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-300 rounded text-xs font-medium border border-green-500/20">
                      Node.js
                    </span>
                  </div>
                  <a
                    href="https://gcfas.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center group/link"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-purple-500/20 bg-linear-to-b from-slate-900/50 to-slate-950">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Left Section - Name & Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                      AKF
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Ashley Kier Ferreol
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Software engineer passionate about cloud engineering,
                  full-stack development, and AI. Building practical solutions
                  through impactful projects and continuous learning.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Open to collaboration</span>
                </div>
              </div>

              {/* Middle Section - Explore */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                  Explore
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      Technical Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#certificates"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      Certifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Section - Get in Touch */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                  Get in Touch
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Ashlikiyer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800/50 border border-purple-500/20 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-slate-800 transition-all text-sm flex items-center gap-2 group"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kierferreol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800/50 border border-purple-500/20 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-slate-800 transition-all text-sm flex items-center gap-2 group"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:ashleykierferreol@gmail.com"
                    className="px-4 py-2 bg-slate-800/50 border border-purple-500/20 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-slate-800 transition-all text-sm flex items-center gap-2 group"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Crafted with care and coffee by Ashley</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>© 2026 Ashley Kier Ferreol</span>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  <span>↑ Top</span>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-purple-900/5 to-transparent pointer-events-none"></div>
        </footer>
      </div>
      {/* End Content Wrapper */}
    </div>
  );
}

export default App;
