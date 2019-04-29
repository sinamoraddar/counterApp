import React from 'react';
//settings file for manipulating the amount which our data is being changed by
const Settings = (props) => (
    <div>
        <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">Change amout by:</span>
            </div>
            <input
                class="form-control"
                type="number"
                value={props.changeAmount}
                name="changeAmount"
                onChange={(e) => props.handleChange(e.target.name, e.target.value)}
            />
        </div>
        <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">Reset amount to:</span>
            </div>
            <input
                className="form-control"
                type="number"
                value={props.resetAmount}
                name="resetAmount"
                onChange={(e) => props.handleChange(e.target.name, e.target.value)}
            />
        </div>




    </div>
);

export default Settings;