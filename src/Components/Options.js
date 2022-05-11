import React from 'react'
import '../App.css'

function Options(props) {
    const options=props.options;
  return (
    <div>
            {options.map((option)=>{
                return <div key={option} className="options">{option} <button className='subRemoveBtn' onClick={()=>{
                    props.handleRemove(option)
                }}>Remove</button><br /><br/></div>
            })}
    </div>
  )
}

export default Options