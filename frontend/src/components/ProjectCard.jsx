import TiltCard from './TiltCard.jsx'

export default function ProjectCard({ project }) {
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
