
import React, { createContext, useContext, useState } from 'react';
import { evaluateExpression } from '@/utils/calculatorEngine';

interface CalculatorContextType {
  display: string;
  expression: string;
  handleKeyPress: (key: string) => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculatorContext must be used within a CalculatorProvider');
  }
  return context;
};

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<number | null>(null);

  const handleKeyPress = (key: string) => {
    switch(key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (display === '0' || waitingForOperand) {
          setDisplay(key);
          setWaitingForOperand(false);
        } else {
          setDisplay(display + key);
        }
        break;
        
      case '.':
        if (waitingForOperand) {
          setDisplay('0.');
          setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
          setDisplay(display + '.');
        }
        break;
        
      case '+':
      case '-':
      case '×':
      case '÷':
        setExpression(expression + display + ' ' + key + ' ');
        setWaitingForOperand(true);
        break;
        
      case '=':
        try {
          const result = evaluateExpression(expression + display);
          setLastAnswer(result);
          setDisplay(String(result));
          setExpression('');
          setWaitingForOperand(true);
        } catch (error) {
          setDisplay('Error');
          setWaitingForOperand(true);
        }
        break;
        
      case 'AC':
        setDisplay('0');
        setExpression('');
        setWaitingForOperand(false);
        break;
        
      case 'DEL':
        if (display.length > 1) {
          setDisplay(display.substring(0, display.length - 1));
        } else {
          setDisplay('0');
        }
        break;
        
      case 'Ans':
        if (lastAnswer !== null) {
          setDisplay(String(lastAnswer));
        }
        break;

      case 'sin':
      case 'cos':
      case 'tan':
        try {
          const val = parseFloat(display);
          let result;
          if (key === 'sin') result = Math.sin(val * Math.PI / 180);
          else if (key === 'cos') result = Math.cos(val * Math.PI / 180);
          else result = Math.tan(val * Math.PI / 180);
          setDisplay(String(result));
          setWaitingForOperand(true);
        } catch (error) {
          setDisplay('Error');
        }
        break;
        
      case '√':
        try {
          const val = parseFloat(display);
          const result = Math.sqrt(val);
          setDisplay(String(result));
          setWaitingForOperand(true);
        } catch (error) {
          setDisplay('Error');
        }
        break;
        
      case 'x²':
        try {
          const val = parseFloat(display);
          const result = Math.pow(val, 2);
          setDisplay(String(result));
          setWaitingForOperand(true);
        } catch (error) {
          setDisplay('Error');
        }
        break;
    }
  };

  return (
    <CalculatorContext.Provider value={{ display, expression, handleKeyPress }}>
      {children}
    </CalculatorContext.Provider>
  );
};
