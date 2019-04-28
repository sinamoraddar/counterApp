import React from 'react';
//settings file for manipulating the amount which our data is being changed by
const Settings = (props) => (
    <div>
        change amount by:
         <input
            type="number"
            value={props.changeAmount}
            name="changeAmount"
            onChange={(e) => props.handleChange(e.target.name, e.target.value)}
        />
        reset amount to:
        <input
            type="number"
            value={props.resetAmount}
            name="resetAmount"
            onChange={(e) => props.handleChange(e.target.name, e.target.value)}
        />
    </div>
);

export default Settings;