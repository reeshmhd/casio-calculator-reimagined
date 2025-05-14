
import React from 'react';
import { useCalculatorContext } from '@/context/CalculatorContext';

export const Display = () => {
  const { display, expression } = useCalculatorContext();
  
  return (
    <div className="bg-white border border-gray-300 rounded-sm p-2 mb-2 h-14 flex flex-col justify-end">
      <div className="flex justify-end min-h-[20px]">
        <span className="text-xs opacity-80 text-gray-600">{expression}</span>
      </div>
      <div className="flex justify-end items-center">
        <span className="text-xl text-right font-medium font-mono">{display}</span>
      </div>
    </div>
  );
};

export default Display;
