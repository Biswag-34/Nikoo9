type ProjectMediaProps = {
  src: string;
  alt: string;
  className?: string;
  disclaimer?: string;
  loading?: "eager" | "lazy";
};

export function ProjectMedia({
  src,
  alt,
  className = "",
  disclaimer = "Conceptual artistic impression",
  loading = "lazy",
}: ProjectMediaProps) {
  return (
    <div className={`project-media ${className}`.trim()}>
      <img src={src} alt={alt} loading={loading} decoding="async" />
      {disclaimer ? <span className="project-media__disclaimer">{disclaimer}</span> : null}
    </div>
  );
}
