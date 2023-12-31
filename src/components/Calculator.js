import React, { useState } from 'react';
import InputButton from './InputNumberBtn';
import calculate from '../logic/calculate';

const number = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calculator() {
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = result;

  const handleInputBtn = (e) => {
    const input = e.target.innerHTML;
    setResult(calculate(result, input));
  };

  return (
    <div className="calc-container">
      <div className="resultScreen" data-testid="result-screen">{next || operation || total || 0}</div>
      {number.map((n) => (
        n === '÷' || n === 'x' || n === '-' || n === '+' || n === '=' ? (
          <InputButton inputSymbol={n} key={n} background="red" handleInputBtn={handleInputBtn} />
        ) : (
          <InputButton inputSymbol={n} key={n} background="gray" handleInputBtn={handleInputBtn} />
        )
      ))}
    </div>
  );
}

export default Calculator;
