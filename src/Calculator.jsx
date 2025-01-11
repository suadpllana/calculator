import React from 'react'
import {useRef, useState} from "react"

const Calculator = () => {
  const inputRef = useRef()
  const [result , setResult] = useState("")

  function calcInput(input){
    inputRef.current.value += input
   
  }
  function calculate(){
    try{
      setResult(eval(inputRef.current.value))
      
     
    }
    catch(err){
      alert("Something went wrong")
    }
  }
function reset(){
inputRef.current.value = ``
}
function deleteLast(){
  if(inputRef.current.value.length === 1){
    reset()
  }
 const lastCharacter = inputRef.current.value.slice(0, -1);
  console.log(lastCharacter)
 setResult(lastCharacter)

}
  return (
    <div className="calculator">
          <div className="container">
        <input value={result} ref={inputRef}  id="calculationInput" readOnly/>
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
            <button onClick={(input) => calcInput('%')} className="diffColor">%</button>
            <button onClick={(input) => calculate()}>=</button>
            <button onClick={ reset} className="diffColor">C</button>
            <button onClick={deleteLast} className="diffColor">DE</button>
        </div>
    </div>

    </div>
  )
}

export default Calculator
