import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Input from './Components/Input';
import './App.css'

function Render(){
  return(
    <div className='mainDiv'>
      <Header/>
      <Input/>
    </div>
  )
}

ReactDOM.render(<Render />,document.getElementById('root'));
