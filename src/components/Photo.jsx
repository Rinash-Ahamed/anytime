export default function Photo({ id, src, alt, brief, className = "" }) {
  return (
    <figure className={`photo ${className}${src ? "" : " is-placeholder"}`} data-photo={id} data-brief={brief} role={src ? undefined : "img"} aria-label={src ? undefined : alt}>
      {src && <img src={src} alt={alt} loading="lazy" />}
    </figure>
  );
}
