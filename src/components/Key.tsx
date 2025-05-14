
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
  
  const baseStyles = "flex items-center justify-center rounded-md py-3 text-xs font-medium select-none transition-transform active:scale-95 cursor-pointer h-12";
  
  const typeStyles = {
    primary: "bg-[hsl(var(--calculator-key-primary))] text-gray-800 border border-gray-300",
    secondary: "bg-[hsl(var(--calculator-key-secondary))] text-white",
    tertiary: "bg-[hsl(var(--calculator-key-tertiary))] text-gray-800",
    function: "bg-gray-200 text-gray-700 border border-gray-300",
    shift: "bg-yellow-500 text-gray-800",
    danger: "bg-[hsl(var(--calculator-key-accent))] text-white"
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
