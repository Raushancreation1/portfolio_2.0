import { useState, useEffect } from 'react';
import TiltCard from './TiltCard.jsx';

export function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl, imageUrl } = project || {}
  return (
    <TiltCard className="group rounded-xl border border-slate-800 p-5 hover:border-primary/50 hover:bg-slate-900/40 transition-colors">
      {imageUrl && (
        <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-xl border-b border-slate-800 bg-slate-900/40">
          <div className="relative w-full aspect-video">
            <img
              src={imageUrl}
              alt={title || 'Project image'}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold group-hover:text-primary">{title}</h3>
          {description && (
            <p className="text-slate-400 mt-1 text-sm">{description}</p>
          )}
        </div>
      </div>

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {t}
            </span>
          ))}
        </div>
      )}

      {(liveUrl || repoUrl) && (
        <div className="mt-5 flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-primary text-slate-950 text-sm font-medium hover:opacity-90"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-slate-700 text-slate-200 text-sm font-medium hover:border-primary/60"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </TiltCard>
  )
}

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Using mock data directly for demonstration since backend database might not be populated
                const mockProjects = [
                    {
                        id: 1,
                        title: "Rc coding all in one — Full-Stack EdTech Platform",
                        description: "Built a modern e-learning platform with role-based authentication, interactive course interface, and integrated payment system.",
                        tags: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Tailwind CSS"],
                        imageUrl: "https://rccodingallinone.vercel.app/",
                        repoUrl: "https://github.com/Raushancreation1/StudyNotion-pro",
                        liveUrl: "https://study-notion-pro-beta.vercel.app/"
                    },
                    {
                        id: 2,
                        title: "Farmer Contract Leadership Management System",
                        description: "Digital platform to manage contract farming agreements, track payments, and coordinate supply-chain actions. Emphasized simple UX for rural adopters.",
                        tags: ["React", "Node.js", "Express", "MongoDB"],
                        imageUrl: "/images/farmer-contract-system.png",
                        repoUrl: "https://github.com/Raushancreation1/SMART-INDIA-HACKATHON-2025",
                        liveUrl: "https://smart-india-hackathon-2025-omega.vercel.app/"
                    },
                    {
                        id: 3,
                        title: "Seemanchal Makhana — E-commerce for Traditional Foods",
                        description: "Built and deployed a responsive e-commerce site showcasing premium makhana (fox-nuts) and traditional snacks. Responsibilities: product listing UI, branding, responsive layout.",
                        tags: ["React", "Tailwind CSS", "Responsive Design"],
                        imageUrl: "https://placehold.co/600x400/24f355/white?text=Seemanchal+Makhana",
                        repoUrl: "https://github.com/Raushancreation1/Seemanchal-Makhana.git",
                        liveUrl: "https://seemanchal-makhana.vercel.app/"
                    }
                ];
                setProjects(mockProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                {loading ? (
                    <div className="text-center text-white">Loading projects...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;