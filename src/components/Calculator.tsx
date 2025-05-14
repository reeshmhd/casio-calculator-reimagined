
import React from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { useCalculator } from '@/hooks/useCalculator';
import { CalculatorProvider } from '@/context/CalculatorContext';

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <div className="flex flex-col w-full max-w-[360px] bg-[hsl(var(--calculator-body))] rounded-lg shadow-xl p-3 pb-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="bg-gray-400 h-4 w-10 rounded-sm mr-2"></div>
            <span className="text-xs font-semibold text-gray-700">CASIO</span>
          </div>
          <span className="text-xs font-bold text-gray-700">fx-991ES PLUS</span>
        </div>
        
        <Display />
        
        <div className="text-xs text-gray-600 flex justify-between mt-1 mb-1 px-2">
          <span>NATURAL-V.P.A.M.</span>
          <span>SCIENTIFIC CALCULATOR</span>
        </div>
        
        <Keypad />
      </div>
    </CalculatorProvider>
  );
};

export default Calculator;
