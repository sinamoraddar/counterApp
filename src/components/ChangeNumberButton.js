import React from 'react';
//buttons for interacting with the counter 
const renderButton = (buttonType, props) => {
    switch (buttonType) {
        case 'add':
            return <button className="btn btn-success" onClick={() => props.handleChange(buttonType)}>+</button>
        case 'subtract':
            return <button className="btn btn-danger" onClick={() => props.handleChange(buttonType)}>-</button>
        case 'reset':
            return <button className="btn btn-warning" onClick={() => props.handleChange(buttonType)}>Reset</button>
        default:
            return undefined
    }
}

const ChangeNubmerButton = (props) => (
    <div>
        
        
            {
                renderButton(props.buttonType, props)
            }
        
    </div>

);

export default ChangeNubmerButton;