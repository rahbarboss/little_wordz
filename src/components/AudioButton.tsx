import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { playItemAudio, playSound, stopCurrentAudio } from '../utils/audio.ts';
import { LanguageCode } from '../types.ts';

interface AudioButtonProps {
  audioUrl?: string;
  audioText?: string;
  language?: LanguageCode | string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'primary' | 'secondary' | 'pill' | 'minimal';
  label?: string;
  className?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  audioUrl,
  audioText,
  language = 'en',
  size = 'md',
  variant = 'primary',
  label = 'Listen',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    playSound('pop');

    if (isPlaying) {
      stopCurrentAudio();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    try {
      await playItemAudio(audioUrl, audioText, language as LanguageCode);
      const duration = (audioText?.length || 10) * 80 + 1000;
      setTimeout(() => {
        setIsPlaying(false);
      }, duration);
    } catch {
      setIsPlaying(false);
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1.5 rounded-md',
    md: 'px-3 py-1.5 text-xs gap-2 rounded-lg font-medium',
    lg: 'px-4 py-2 text-sm gap-2 rounded-lg font-semibold',
    hero: 'px-5 py-2.5 text-sm gap-2.5 rounded-lg font-semibold shadow-sm',
  };

  const variantClasses = {
    primary: isPlaying
      ? 'bg-indigo-700 text-white ring-2 ring-indigo-300'
      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors',
    secondary: isPlaying
      ? 'bg-slate-800 text-white'
      : 'border border-slate-200 bg-slate-50 hover:bg-white text-slate-700 transition-colors',
    pill: isPlaying
      ? 'bg-indigo-100 text-indigo-800 border border-indigo-300'
      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors',
    minimal: isPlaying
      ? 'text-indigo-600 bg-indigo-50 rounded-md'
      : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-md transition-colors',
  };

  return (
    <button
      type="button"
      id={`audio-btn-${(audioText || label).replace(/\s+/g, '-').toLowerCase()}`}
      onClick={handleClick}
      aria-label={`Listen to ${audioText || label}`}
      className={`inline-flex items-center justify-center cursor-pointer select-none transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 animate-speaker text-indigo-200" />
          {label && <span className="whitespace-nowrap">{label} (Playing...)</span>}
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4" />
          {label && <span className="whitespace-nowrap">{label}</span>}
        </>
      )}
    </button>
  );
};

