import React, { useState } from 'react'
import Options from './Options';
import '../App.css'
import BigButton from './BigButton';

function Input() {
    const [options,setOptions]=useState([]);
    const [error,setError]=useState(false);
    const [showOutput,setShowOutput]=useState("");

    const handleError=(e)=>{
        if(options.includes(e)){
            return "Option is already taken!"
        }
        if(e===""){
            return "Please enter any input!"
        }
        setOptions((preVal)=>{return preVal.concat(e)})
        return true
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        const value=e.target.elements.option.value.trim();
        const error1=handleError(value)
        if(error1){
            setError(error1)
        }
        
        e.target.elements.option.value="";        
    }
    
    const handleRemove=(optionToRemove)=>{
        const updateOptions=options.filter((option)=>{
            return option!==optionToRemove
        })
        setOptions(updateOptions)
    }

    const whatToDo=()=>{
        const randomPick=Math.ceil(Math.random()*options.length-1)
        setShowOutput(options[randomPick])
    }

  return (
    <div >
        <BigButton whatToDo={whatToDo} showOutput={showOutput} options={options}/>
        <button className='removeBtn btn btn-light' onClick={()=>{setOptions([])}}>Remove all</button>
        {error && <p className='error text-center text-light mt-4'>{error}</p>}<br/><br/>
        <Options options={options} handleRemove={handleRemove}/>
        <form onSubmit={onSubmit} autoComplete="off" className='form'>
            <input  type="text" placeholder="Add Options..." name="option"/>
            <button className='addOptionBtn'>Add Option</button>
        </form>
    </div>
  )
}

export default Input