
import React from 'react';
import { Key } from './Key';

export const Keypad = () => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {/* Row 1 */}
      <Key type="shift" label="SHIFT" />
      <Key type="function" label="Alpha" />
      <Key type="function" label="Mode" />
      <Key type="function" label="Setup" />
      <Key type="danger" label="ON" />

      {/* Row 2 */}
      <Key type="secondary" label="√" />
      <Key type="secondary" label="x²" />
      <Key type="secondary" label="^" />
      <Key type="secondary" label="log" />
      <Key type="secondary" label="ln" />

      {/* Row 3 */}
      <Key type="tertiary" label="(-)" />
      <Key type="tertiary" label="°'"" />
      <Key type="tertiary" label="hyp" />
      <Key type="tertiary" label="sin" />
      <Key type="tertiary" label="cos" />

      {/* Row 4 */}
      <Key type="tertiary" label="tan" />
      <Key type="function" label="RCL" />
      <Key type="function" label="ENG" />
      <Key type="function" label="(" />
      <Key type="function" label=")" />

      {/* Row 5 */}
      <Key type="function" label="S⇔D" />
      <Key type="function" label="M+" />
      <Key type="function" label="M-" />
      <Key type="primary" label="7" />
      <Key type="primary" label="8" />

      {/* Row 6 */}
      <Key type="primary" label="9" />
      <Key type="secondary" label="DEL" />
      <Key type="danger" label="AC" />
      <Key type="primary" label="4" />
      <Key type="primary" label="5" />

      {/* Row 7 */}
      <Key type="primary" label="6" />
      <Key type="secondary" label="×" />
      <Key type="secondary" label="÷" />
      <Key type="primary" label="1" />
      <Key type="primary" label="2" />

      {/* Row 8 */}
      <Key type="primary" label="3" />
      <Key type="secondary" label="+" />
      <Key type="secondary" label="-" />
      <Key type="primary" label="0" />
      <Key type="primary" label="." />

      {/* Row 9 */}
      <Key type="primary" label="×10ˣ" />
      <Key type="primary" label="Ans" />
      <Key type="secondary" label="=" colspan={3} />
    </div>
  );
};

export default Keypad;
