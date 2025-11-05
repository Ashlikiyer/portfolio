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

// Import project images
import clashArena from "./assets/clash arena.png";
import careerAI from "./assets/career.png";
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
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "#home" },
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
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Email", link: "mailto:contact@example.com" },
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
                    <span className="text-2xl md:text-3xl font-semibold text-white">
                      Cloud
                    </span>
                    <TextType
                      text={["Engineer", "Architect", "DevOps Specialist"]}
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
                  Transforming ideas into interactive and seamless digital
                  experiences with cutting-edge{" "}
                  <span className="text-cyan-400 font-semibold">
                    cloud development
                  </span>
                  . Passionate about designing, implementing, and managing cloud
                  infrastructure solutions on{" "}
                  <span className="text-orange-400 font-semibold">AWS</span>,{" "}
                  <span className="text-blue-400 font-semibold">Azure</span>,
                  and <span className="text-red-400 font-semibold">GCP</span>.
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
                    href="mailto:contact@example.com"
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
                  5+
                </div>
                <p className="text-gray-400 text-xs mt-2">Years Experience</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 group-hover:scale-110 transition-transform">
                  50+
                </div>
                <p className="text-gray-400 text-xs mt-2">Projects Delivered</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 group-hover:scale-110 transition-transform">
                  99.9%
                </div>
                <p className="text-gray-400 text-xs mt-2">Uptime</p>
              </div>

              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400 group-hover:scale-110 transition-transform">
                  AWS
                </div>
                <p className="text-gray-400 text-xs mt-2">Certified</p>
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
                My core competencies and technical skills
              </p>
            </div>

            <MagicBento
              cards={[
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Cloud Engineering",
                  description:
                    "Expert in AWS, Azure, and GCP cloud infrastructure design, deployment, and management",
                  label: "Infrastructure",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "AWS Cloud",
                  description:
                    "Certified Solutions Architect with deep expertise in EC2, S3, Lambda, RDS, and more",
                  label: "Amazon Web Services",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Frontend Development",
                  description:
                    "Building modern, responsive web applications with React, TypeScript, and Tailwind CSS",
                  label: "Web Development",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "UI/UX Design",
                  description:
                    "Creating beautiful, user-friendly interfaces with focus on accessibility and performance",
                  label: "Design",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "Solution Architecture",
                  description:
                    "Designing scalable, secure, and cost-effective cloud solutions for enterprise needs",
                  label: "Architecture",
                },
                {
                  color: "rgba(15, 23, 42, 0.6)",
                  title: "DevOps & Automation",
                  description:
                    "CI/CD pipelines, Infrastructure as Code, containerization with Docker and Kubernetes",
                  label: "Automation",
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
                Professional{" "}
                <span className="text-purple-400">Certificates</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Industry-recognized certifications and achievements
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
                  7
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
                  7
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
                  4
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
                  3+
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Clash Arena Project */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
                <div className="relative h-44 overflow-hidden bg-slate-900/50">
                  <img
                    src={clashArena}
                    alt="Clash Arena Game"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Clash Arena - 3D Strategy Game
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    A real-time multiplayer 3D strategy game inspired by Clash
                    Royale. Players strategically deploy deck cards to battle
                    opponents, aiming to destroy the enemy tower first. Features
                    immersive 3D graphics, tactical gameplay, and competitive
                    tower defense mechanics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs font-medium border border-purple-500/20">
                      O'Hara.ai
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs font-medium border border-blue-500/20">
                      3D Graphics
                    </span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-xs font-medium border border-cyan-500/20">
                      Multiplayer
                    </span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-300 rounded text-xs font-medium border border-green-500/20">
                      Game AI
                    </span>
                  </div>
                  <a
                    href="#"
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

              {/* CareerAI Project */}
              <div className="bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 group">
                <div className="relative h-44 overflow-hidden bg-slate-900/50">
                  <img
                    src={careerAI}
                    alt="CareerAI Platform"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    CareerAI - AI Career Advisor
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    An intelligent career recommendation platform powered by AI
                    that generates personalized career roadmaps. Users receive
                    industry-specific guidance, skill development paths, and
                    actionable steps tailored to their desired career trajectory
                    in tech.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs font-medium border border-purple-500/20">
                      React
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs font-medium border border-blue-500/20">
                      TypeScript
                    </span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-xs font-medium border border-cyan-500/20">
                      Tailwind
                    </span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-300 rounded text-xs font-medium border border-green-500/20">
                      Shadcn/ui
                    </span>
                    <span className="px-2 py-0.5 bg-orange-500/10 text-orange-300 rounded text-xs font-medium border border-orange-500/20">
                      PostgreSQL
                    </span>
                    <span className="px-2 py-0.5 bg-pink-500/10 text-pink-300 rounded text-xs font-medium border border-pink-500/20">
                      AWS EC2
                    </span>
                    <span className="px-2 py-0.5 bg-red-500/10 text-red-300 rounded text-xs font-medium border border-red-500/20">
                      AI/ML
                    </span>
                  </div>
                  <a
                    href="#"
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
                  Specializing in AWS cloud infrastructure and modern web
                  development. Building scalable, secure solutions that
                  transform complex challenges into elegant digital experiences.
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
                <span>Crafted with</span>
                <span className="text-purple-400 animate-pulse">💜</span>
                <span>and coffee by Ashley</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>© 2024 Ashley Kier Ferreol</span>
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
