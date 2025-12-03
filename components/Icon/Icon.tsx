"use client";

interface IconProps {
  url: string;
  alt?: string;
  size?: number | string;
  className?: string;
}

const Icon = ({ url, alt = "", size = 24, className }: IconProps) => {
  return (
    <img src={url} alt={alt} width={size} height={size} className={className} />
  );
};

export default Icon;
