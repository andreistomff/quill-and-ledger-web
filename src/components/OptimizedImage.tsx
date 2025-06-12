
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  useEffect(() => {
    // Preload critical images
    if (loading === 'eager') {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [src, loading]);

  return (
    <div className="relative">
      {(!imageLoaded && !imageError) && placeholder && (
        <div className="absolute inset-0">
          {placeholder}
        </div>
      )}
      
      {!imageError && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {imageError && (
        <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
          Imaginea nu poate fi încărcată
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
