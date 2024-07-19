import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
      <Calculator/>
    </>
  )
}

export default CustomApp

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [currentNumber, setCurrentNumber] = useState('');
    const [previousNumber, setPreviousNumber] = useState('');
    const [operator, setOperator] = useState('');
  
    const handleNumberClick = (number) => {
      setCurrentNumber(currentNumber + number);
      setDisplay(currentNumber + number);
    };
  
    const handleOperatorClick = (op) => {
      if (currentNumber !== '') {
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperator(op);
      }
    };
  
    const handleEqualsClick = () => {
      if (previousNumber !== '' && currentNumber !== '') {
        let result;
        switch (operator) {
          case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
          case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
          case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
          case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
          default:
            result = '';
        }
        setDisplay(result.toString());
        setPreviousNumber('');
        setCurrentNumber(result.toString());
        setOperator('');
      }
    };
  
    const handleClearClick = () => {
      setCurrentNumber('');
      setPreviousNumber('');
      setOperator('');
      setDisplay('0');
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-gray-200 rounded-lg shadow-lg">
        <div className="mb-4 text-right text-3xl font-semibold">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <button className="col-span-3 bg-gray-400 text-white py-2 rounded" onClick={() => handleClearClick()}>C</button>
          <button className="bg-yellow-500 text-white py-2 rounded" onClick={() => handleOperatorClick('/')}>/</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('7')}>7</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('8')}>8</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('9')}>9</button>
          <button className="bg-yellow-500 text-white py-2 rounded" onClick={() => handleOperatorClick('*')}>*</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('4')}>4</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('5')}>5</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('6')}>6</button>
          <button className="bg-yellow-500 text-white py-2 rounded" onClick={() => handleOperatorClick('-')}>-</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('1')}>1</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('2')}>2</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('3')}>3</button>
          <button className="bg-yellow-500 text-white py-2 rounded" onClick={() => handleOperatorClick('+')}>+</button>
          <button className="col-span-2 bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('0')}>0</button>
          <button className="bg-gray-300 text-gray-800 py-2 rounded" onClick={() => handleNumberClick('.')}>.</button>
          <button className="bg-yellow-500 text-white py-2 rounded" onClick={() => handleEqualsClick()}>=</button>
        </div>
      </div>
    );
  };
  
