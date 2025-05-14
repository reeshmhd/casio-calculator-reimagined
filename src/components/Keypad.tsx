
import React from 'react';
import { Key } from './Key';

export const Keypad = () => {
  return (
    <div className="grid grid-cols-6 gap-1">
      {/* Row 1 - Radio button row */}
      <div className="col-span-6 flex mb-1 text-xs">
        <div className="flex items-center mr-3">
          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <span>Degrees</span>
        </div>
        <div className="flex items-center mr-3">
          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1"></div>
          <span>Radians</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1"></div>
          <span>Grads</span>
        </div>
      </div>

      {/* Row 2 */}
      <Key label="MC" type="function" />
      <Key label="MR" type="function" />
      <Key label="MS" type="function" />
      <Key label="M+" type="function" />
      <Key label="M-" type="function" />
      <Key label="←" type="function" />

      {/* Row 3 */}
      <Key label="Inv" type="function" />
      <Key label="ln" type="function" />
      <Key label="(" type="function" />
      <Key label=")" type="function" />
      <Key label="÷" type="secondary" />
      <Key label="√" type="function" />

      {/* Row 4 */}
      <Key label="sin" type="function" />
      <Key label="cos" type="function" />
      <Key label="7" type="primary" />
      <Key label="8" type="primary" />
      <Key label="9" type="primary" />
      <Key label="×" type="secondary" />

      {/* Row 5 */}
      <Key label="tan" type="function" />
      <Key label="x²" type="function" />
      <Key label="4" type="primary" />
      <Key label="5" type="primary" />
      <Key label="6" type="primary" />
      <Key label="-" type="secondary" />
      
      {/* Row 6 */}
      <Key label="π" type="function" />
      <Key label="1/x" type="function" />
      <Key label="1" type="primary" />
      <Key label="2" type="primary" />
      <Key label="3" type="primary" />
      <Key label="+" type="secondary" />
      
      {/* Row 7 */}
      <Key label="F-E" type="function" />
      <Key label="Exp" type="function" />
      <Key label="0" type="primary" colspan={2} />
      <Key label="." type="primary" />
      <Key label="=" type="danger" />
    </div>
  );
};

export default Keypad;
