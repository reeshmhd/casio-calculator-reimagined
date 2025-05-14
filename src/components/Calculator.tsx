
import React from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { CalculatorProvider } from '@/context/CalculatorContext';

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <div className="flex flex-col w-full max-w-[360px] bg-[#f0f0f0] rounded-md shadow-md border border-gray-300">
        <div className="bg-[#006db3] text-white p-1 flex items-center justify-between rounded-t-md">
          <span className="text-xs font-medium">Calculator</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-300 rounded-sm">-</div>
            <div className="w-4 h-4 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-300 rounded-sm">□</div>
            <div className="w-4 h-4 flex items-center justify-center text-xs bg-red-400 hover:bg-red-500 rounded-sm">×</div>
          </div>
        </div>
        
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
            <span>View</span>
            <span>Edit</span>
            <span>Help</span>
          </div>
          
          <Display />
          <Keypad />
        </div>
      </div>
    </CalculatorProvider>
  );
};

export default Calculator;
