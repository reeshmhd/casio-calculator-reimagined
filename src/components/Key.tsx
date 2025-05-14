
import React from 'react';
import { useCalculatorContext } from '@/context/CalculatorContext';
import { cn } from '@/lib/utils';

interface KeyProps {
  label: string;
  type?: 'primary' | 'secondary' | 'tertiary' | 'function' | 'shift' | 'danger';
  colspan?: number;
}

export const Key = ({ label, type = 'primary', colspan = 1 }: KeyProps) => {
  const { handleKeyPress } = useCalculatorContext();
  
  const baseStyles = "flex items-center justify-center rounded-sm py-1.5 text-xs font-medium select-none transition-colors active:bg-gray-300 cursor-pointer h-8 border border-gray-300";
  
  const typeStyles = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-white text-black hover:bg-gray-100",
    tertiary: "bg-white text-black hover:bg-gray-100",
    function: "bg-[#e9e9e9] text-black hover:bg-gray-200",
    shift: "bg-[#e9e9e9] text-black hover:bg-gray-200",
    danger: "bg-white text-black hover:bg-gray-100"
  };
  
  return (
    <div 
      className={cn(
        baseStyles,
        typeStyles[type],
        colspan > 1 && `col-span-${colspan}`
      )}
      onClick={() => handleKeyPress(label)}
    >
      {label}
    </div>
  );
};

export default Key;
