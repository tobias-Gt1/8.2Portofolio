import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink, X } from "lucide-react";
import { PROJECTS } from "./Projects";
import type { Project } from "./Projects";

type DetailSectionProps = {
  title: string;
  children: React.ReactNode;
  color: string;
};

function DetailSection({ title, children, color }: DetailSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="font-['Archivo_Black'] text-[#f5f5f5] text-xl mb-4" style={{ color }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug) as Project | undefined;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const hasGallery = (project?.details.gallery?.length ?? 0) > 0;
  const showCmsScreenshotPlaceholders = project?.slug === "cms-webshop" && !hasGallery;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#555]">Project niet gevonden.</p>
      </div>
    );
  }

  return (
    <section className="py-32 px-6 md:px-10 relative">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-[#777] hover:text-[#f5f5f5] transition-colors mb-10 font-['Space_Mono']"
        >
          <ArrowLeft size={16} /> Terug
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-['Space_Mono'] text-xs" style={{ color: project.color }}>
            {project.num}
          </span>
          <h1 className="font-['Archivo_Black'] text-[#f5f5f5] mt-1 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {project.title}
          </h1>

          <button
            type="button"
            onClick={() => project.image && setSelectedImage(project.image)}
            className="w-full aspect-video mb-8 relative overflow-hidden text-left"
            style={{ background: `${project.color}10`, border: `1px solid ${project.color}20` }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl opacity-30">🖥️</span>
              </div>
            )}
          </button>

          <p className="text-[#aaa] leading-relaxed mb-8 text-base max-w-3xl">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-['Space_Mono'] text-xs px-3 py-1.5"
                style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 border border-white/10 text-[#f5f5f5] hover:border-white/25 transition-colors font-['Space_Mono']"
            >
              <Github size={14} /> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-5 py-2.5 font-['Archivo_Black'] uppercase tracking-wider transition-all duration-200 hover:scale-105"
                style={{ background: project.color, color: "#0c0c0c" }}
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>

          {project.details && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.details.fullDescription && (
                <DetailSection title="Uitgebreide informatie" color={project.color}>
                  <p className="text-[#aaa] leading-relaxed text-base max-w-3xl">{project.details.fullDescription}</p>
                </DetailSection>
              )}

              {(hasGallery || showCmsScreenshotPlaceholders) && (
                <DetailSection title="Galerij" color={project.color}>
                  {hasGallery ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.details.gallery.map((src, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImage(src)}
                          className="aspect-video overflow-hidden text-left"
                          style={{ background: `${project.color}10`, border: `1px solid ${project.color}20` }}
                        >
                          <img src={src} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Voeg hier screenshot 1 toe",
                        "Voeg hier screenshot 2 toe",
                        "Voeg hier screenshot 3 toe",
                        "Voeg hier screenshot 4 toe",
                      ].map((label) => (
                        <div
                          key={label}
                          className="aspect-video overflow-hidden flex items-center justify-center text-center p-6"
                          style={{ background: `${project.color}08`, border: `1px dashed ${project.color}35` }}
                        >
                          <span className="font-['Space_Mono'] text-sm text-[#888]">{label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </DetailSection>
              )}

              {project.details.videoUrl && (
                <DetailSection title="Video" color={project.color}>
                  <div className="aspect-video w-full max-w-3xl overflow-hidden" style={{ background: `${project.color}10`, border: `1px solid ${project.color}20` }}>
                    <iframe
                      src={project.details.videoUrl}
                      title={`${project.title} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </DetailSection>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/70 text-white p-2 hover:bg-black transition-colors"
              aria-label="Sluiten"
            >
              <X size={18} />
            </button>
            <img
              src={selectedImage}
              alt={project.title}
              className="w-full max-h-[90vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
