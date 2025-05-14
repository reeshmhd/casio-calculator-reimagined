// Utility functions for the calculator

/**
 * Format a number for display on calculator screen
 */
export function formatForDisplay(value: number): string {
  // If the number is an integer, display it without decimal point
  if (Number.isInteger(value)) {
    return value.toString();
  }
  
  // For very small or very large numbers, use scientific notation
  if (Math.abs(value) < 0.0001 || Math.abs(value) > 9999999) {
    return value.toExponential(6);
  }
  
  // Otherwise limit to reasonable precision
  return value.toPrecision(10).replace(/\.?0+$/, '');
}

/**
 * Determines if a string represents a valid number
 */
export function isNumeric(str: string): boolean {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
}
