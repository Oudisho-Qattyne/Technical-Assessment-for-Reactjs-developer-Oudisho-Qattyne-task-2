import React, { useState, useEffect, useRef } from 'react';

interface SquareImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  fallbackSrc?: string;
  size?: number | string; 
  lazy?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  showSkeleton?: boolean;
}

const Image: React.FC<SquareImageProps> = ({
  src,
  alt,
  className = '',
  onClick,
  fallbackSrc = 'https:?text=Image+Not+Found',
  size = 400,
  lazy = true,
  onLoad,
  onError,
  showSkeleton = true
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImageSrc(src);
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleImageError = () => {
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setIsLoading(true);  
            setHasError(true);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
    onError?.();
  };

 
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoading(false);
    }
  }, []);


  const getSizeStyle = () => {
    if (typeof size === 'number') {
      return { width: `${size}px`, height: `${size}px` };
    }
    return { width: size, height: size };
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={getSizeStyle()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {showSkeleton && isLoading && (
        <div className="absolute inset-0 z-10">
          <div className="w-full h-full bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      )}

      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${hasError ? 'object-contain p-2' : ''}`}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleImageLoad}
        onError={handleImageError}
        draggable="false"
      />


      {hasError && !isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-2">
          <svg
            className="w-8 h-8 text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs text-gray-500 text-center">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default Image;