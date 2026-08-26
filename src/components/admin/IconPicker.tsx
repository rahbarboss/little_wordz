import React, { useState } from 'react';
import { Sparkles, Smile, Search } from 'lucide-react';
import { playSound } from '../../utils/audio.ts';

interface IconPickerProps {
  value: string;
  onChange: (icon: string) => void;
  label?: string;
  helperText?: string;
}

export const EMOJI_CATEGORIES = [
  {
    id: 'fruits',
    name: '🍎 Fruits & Food',
    emojis: [
      '🍎', '🍏', '🍌', '🍊', '🍇', '🍓', '🍉', '🥭', '🍍', '🍒',
      '🍑', '🥥', '🥝', '🥑', '🥦', '🥕', '🌽', '🍞', '🧀', '🍳',
      '🥛', '🍯', '🍰', '🍕', '🍦', '🍪', '🍫', '🍩', '🍬', '🍔'
    ],
  },
  {
    id: 'animals',
    name: '🐶 Animals & Birds',
    emojis: [
      '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
      '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🦆', '🦅', '🦉',
      '🐝', '🦋', '🐟', '🐬', '🐳', '🐘', '🦒', '🐎', '🐫', '🦜'
    ],
  },
  {
    id: 'school',
    name: '📚 School & Learn',
    emojis: [
      '📚', '📖', '✏️', '✒️', '📝', '🎒', '🏫', '📐', '📏', '🎨',
      '🖌️', '🔍', '🔬', '💻', '⏰', '🔔', '💡', '🧩', '🎁', '🎈'
    ],
  },
  {
    id: 'vehicles',
    name: '🚗 Vehicles',
    emojis: [
      '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚲',
      '🛵', '🏍️', '✈️', '🚀', '🚁', '🚂', '🚢', '⛵', '🚤', '🚜'
    ],
  },
  {
    id: 'faith',
    name: '🕌 Faith & Nature',
    emojis: [
      '🕌', '🕋', '📖', '🌙', '⭐', '🤲', '📿', '✨', '☀️', '⛅',
      '🌧️', '🌈', '🌸', '🌺', '🌻', '🌹', '🌴', '🌳', '🍀', '💧'
    ],
  },
  {
    id: 'sports',
    name: '⚽ Sports & Toys',
    emojis: [
      '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏸', '🏓', '🪁', '🧸',
      '🎮', '🏆', '🥇', '🎯', '🎪', '🎲', '🎳', '🪄', '🏅', '🎖️'
    ],
  },
];

export const IconPicker: React.FC<IconPickerProps> = ({
  value,
  onChange,
  label = 'Visual Icon / Emoji',
  helperText = 'Select from learning icons below or type custom icon/URL',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('fruits');
  const [showPicker, setShowPicker] = useState<boolean>(true);

  const selectedCategoryObj = EMOJI_CATEGORIES.find(c => c.id === activeCategory) || EMOJI_CATEGORIES[0];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700 uppercase">
          {label}
        </label>
        <span className="text-[11px] text-slate-400">
          {helperText}
        </span>
      </div>

      {/* Input row with selected preview */}
      <div className="flex items-center gap-3">
        {/* Large Visual Preview Box */}
        <div className="w-14 h-14 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-3xl shadow-xs shrink-0 select-none">
          {value || '❓'}
        </div>

        {/* Text Input for custom emoji/icon */}
        <div className="flex-1">
          <input
            type="text"
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            placeholder="Type or paste custom icon (e.g. 🍎, 📚, 🚗)"
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <span className="text-[10px] text-slate-400 mt-1 block">
            Click any icon below to instantly assign it to this record.
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="pt-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {EMOJI_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                playSound('pop');
                setActiveCategory(cat.id);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Emojis Grid */}
        <div className="mt-2 p-2.5 bg-slate-50 border border-slate-200 rounded-2xl max-h-36 overflow-y-auto grid grid-cols-10 sm:grid-cols-15 gap-1.5">
          {selectedCategoryObj.emojis.map((emoji, idx) => {
            const isSelected = value === emoji;
            return (
              <button
                key={`${emoji}-${idx}`}
                type="button"
                onClick={() => {
                  playSound('pop');
                  onChange(emoji);
                }}
                title={emoji}
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg transition-transform hover:scale-125 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 ring-2 ring-amber-600 scale-110 shadow-xs'
                    : 'bg-white hover:bg-amber-100 border border-slate-200 shadow-2xs'
                }`}
              >
                {emoji}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
