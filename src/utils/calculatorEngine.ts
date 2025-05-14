
// Basic calculator engine that evaluates mathematical expressions

export function evaluateExpression(expression: string): number {
  // Clean the expression
  const cleanExpr = expression.replace(/×/g, '*').replace(/÷/g, '/');
  
  // Using Function constructor to evaluate the expression
  // Note: In a production app, we'd use a proper math library for safety and precision
  try {
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return (${cleanExpr})`)();
  } catch (error) {
    console.error('Error evaluating expression:', error);
    throw new Error('Invalid expression');
  }
}

// Additional utility functions will be added in future versions
