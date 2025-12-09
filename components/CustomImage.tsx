import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';

interface CustomImageProps extends ImageProps {
  fallbackSrc?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  fallbackSrc = '/assets/placeholder.png',
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<ImageProps['src']>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      loading='lazy' // Ensure lazy loading is explicit
    />
  );
};

export default CustomImage;
