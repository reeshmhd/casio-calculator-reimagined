
import { useState } from 'react';
import { evaluateExpression } from '@/utils/calculatorEngine';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<number | null>(null);

  const handleKeyPress = (key: string) => {
    // The implementation has been moved to CalculatorContext
    // This hook is kept for future extensions
  };

  return {
    display,
    expression,
    handleKeyPress
  };
}
