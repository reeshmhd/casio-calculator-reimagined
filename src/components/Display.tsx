
import React from 'react';
import { useCalculatorContext } from '@/context/CalculatorContext';

export const Display = () => {
  const { display, expression } = useCalculatorContext();
  
  return (
    <div className="bg-[hsl(var(--calculator-display))] text-[hsl(var(--calculator-display-text))] p-3 rounded-md mb-2">
      <div className="flex justify-end min-h-[20px] mb-1">
        <span className="calculator-font text-xs opacity-80">{expression}</span>
      </div>
      <div className="flex justify-end items-center">
        <span className="calculator-font text-2xl tracking-wider">{display}</span>
      </div>
    </div>
  );
};

export default Display;
