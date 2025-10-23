import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  iconSrc?: string;
  hoverClass?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children, iconSrc, hoverClass }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 ${hoverClass || ''}`}
    >
      {iconSrc && (
        <img 
          src={iconSrc} 
          alt="" 
          className="h-6 w-6 mr-3 [filter:brightness(0)_invert(1)] transition-transform duration-300 group-hover:rotate-12"
        />
      )}
      <span>{children}</span>
    </a>
  );
};