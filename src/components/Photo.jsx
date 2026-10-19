export default function Photo({ src, alt, className = "" }) {
  return (
    <figure className={className ? `photo ${className}` : "photo"}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
