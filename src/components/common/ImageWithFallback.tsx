import { useState } from "react";

export function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-white/5 text-sm text-gray-500 ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
