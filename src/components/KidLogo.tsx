import React from 'react';

interface KidLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onMClick?: (e: React.MouseEvent) => void;
}

export const KidLogo: React.FC<KidLogoProps> = ({ size = 'md', showSubtitle = true, className = '', onMClick }) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8 text-base rounded-xl', title: 'text-lg', sub: 'text-[9px]' },
    md: { box: 'w-10 h-10 text-xl rounded-2xl', title: 'text-xl sm:text-2xl', sub: 'text-[10px]' },
    lg: { box: 'w-12 h-12 text-2xl rounded-2xl', title: 'text-2xl sm:text-3xl', sub: 'text-xs' },
    xl: { box: 'w-16 h-16 text-4xl rounded-3xl', title: 'text-4xl sm:text-5xl', sub: 'text-sm' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Iconic Vibrant 'M' Block */}
      <div
        onClick={onMClick}
        className={`${current.box} bg-indigo-600 flex items-center justify-center font-black text-white shadow-md shadow-indigo-200 border-2 border-indigo-400 shrink-0 transform transition-transform hover:scale-105 active:scale-95 cursor-pointer`}
        title="Little Mindz Academy"
      >
        M
      </div>

      {/* Brand Title and Geometric Subtitle */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-slate-800 leading-none ${current.title}`}>
          LITTLE MINDZ
        </span>
        {showSubtitle && (
          <span className={`font-bold tracking-widest text-slate-400 uppercase mt-1 ${current.sub}`}>
            GEOMETRIC BALANCE LEARNING
          </span>
        )}
      </div>
    </div>
  );
};
