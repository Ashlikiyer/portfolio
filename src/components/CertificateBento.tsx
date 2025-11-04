import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import type { IconType } from "react-icons";

export interface CertificateCardProps {
  image: string;
  title: string;
  issuer: string;
  year?: string;
  type?: "Certificate" | "Badge" | "Course Complete" | "Participant";
  icon?: IconType;
  badgeColor?: string;
}

export interface CertificateBentoProps {
  certificates: CertificateCardProps[];
  enableHover?: boolean;
  enableGlow?: boolean;
}

const DEFAULT_GLOW_COLOR = "59, 130, 246"; // blue-500

const CertificateCard: React.FC<
  CertificateCardProps & { enableHover?: boolean; enableGlow?: boolean }
> = ({
  image,
  title,
  issuer,
  year,
  type = "Certificate",
  icon: Icon,
  badgeColor = "bg-blue-500",
  enableHover = true,
  enableGlow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableHover || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enableHover]);

  return (
    <div
      ref={cardRef}
      className={`certificate-card group relative bg-linear-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300 ${
        enableGlow
          ? "hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
          : ""
      }`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-video bg-linear-to-br from-slate-800/50 to-slate-900/80 overflow-hidden border-b border-slate-700/30">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-900/20 to-purple-900/20">
                  <svg class="w-12 h-12 text-purple-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              `;
            }
          }}
        />

        {/* Logo Badge in corner */}
        {Icon && (
          <div
            className={`absolute top-2 right-2 ${badgeColor} rounded-full p-1.5 shadow-lg ring-2 ring-slate-900/50`}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
        )}

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-purple-400 transition-colors mb-1.5">
          {title}
        </h3>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-400 truncate flex-1">{issuer}</p>
          {year && (
            <span className="text-xs text-purple-400 font-medium ml-2">
              {year}
            </span>
          )}
        </div>
        {/* Type Badge */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs font-medium border border-purple-500/20">
            {type}
          </span>
        </div>
      </div>

      {/* Glow Effect */}
      {enableGlow && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500/5 via-purple-500/10 to-cyan-500/5"></div>
        </div>
      )}
    </div>
  );
};

const CertificateBento: React.FC<CertificateBentoProps> = ({
  certificates,
  enableHover = true,
  enableGlow = true,
}) => {
  return (
    <>
      <style>
        {`
          .certificate-card {
            --glow-color: ${DEFAULT_GLOW_COLOR};
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            {...cert}
            enableHover={enableHover}
            enableGlow={enableGlow}
          />
        ))}
      </div>
    </>
  );
};

export default CertificateBento;
