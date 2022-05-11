import React from 'react'

function BigButton(props) {
  return (
    <div>
        <button type="button" className="bigButton" onClick={props.whatToDo} disabled={props.options.length===0}  data-bs-toggle="modal" data-bs-target="#myModal">
        What should i do?
        </button>


        <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">

            
            <div className="modal-header">
                <h4 className="modal-title">Do this!</h4>
                <button type="button" className="btn-close text-light" data-bs-dismiss="modal"></button>
            </div>

            
            <div className="modal-body text-light">
                {props.showOutput}
            </div>

            </div>
        </div>
        </div>
        
    </div>
  )
}

export default BigButton