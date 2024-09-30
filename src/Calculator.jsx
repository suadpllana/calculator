import React from 'react'
import {useRef} from "react"

const Calculator = () => {
  const inputRef = useRef()

  function calcInput(input){
    inputRef.current.value += input
    console.log(inputRef)
  }
  function calculate(){
    try{
      const result = eval(inputRef.current.value)
      inputRef.current.value = result.toFixed(2)
    }
    catch(err){
      alert("Something went wrong")
    }
  }
function reset(){
inputRef.current.value = ``
}
  return (
    <div>
          <div className="container">
        <input ref={inputRef}  id="calculationInput" readOnly/>
        <div className="buttons">
            <button onClick={(input) => calcInput('+')} className="diffColor">+</button>
            <button onClick={(input) => calcInput('7')}>7</button>
            <button onClick={(input) => calcInput('8')}>8</button>
            <button onClick={(input) => calcInput('9')}>9</button>
            <button onClick={(input) => calcInput('-')} className="diffColor">-</button>
            <button onClick={(input) => calcInput('4')}>4</button>
            <button onClick={(input) => calcInput('5')}>5</button>
            <button onClick={(input) => calcInput('6')}>6</button>
            <button onClick={(input) => calcInput('*')} className="diffColor">*</button>
            <button onClick={(input) => calcInput('1')}>1</button>
            <button onClick={(input) => calcInput('2')}>2</button>
            <button onClick={(input) => calcInput('3')}>3</button>
            <button onClick={(input) => calcInput('/')} className="diffColor">/</button>
            <button onClick={(input) => calcInput('0')}>0</button>
            <button onClick={(input) => calcInput('.')}>.</button>
            <button onClick={(input) => calculate()}>=</button>
            <button onClick={(input) => reset()} className="diffColor">C</button>
        </div>
    </div>

    </div>
  )
}

export default Calculator
