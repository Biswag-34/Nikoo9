type PlaceholderMediaProps = {
  label?: string;
  ratio?: string;
  className?: string;
};

export function PlaceholderMedia({
  label = "Image placeholder",
  ratio = "16 / 9",
  className = "",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`media-placeholder ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className="media-placeholder__mark" aria-hidden="true" />
      <span>{label}</span>
      <small>Optimized media will be added later</small>
    </div>
  );
}
