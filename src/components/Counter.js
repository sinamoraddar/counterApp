import React from 'react';
import ChangeNumberButton from './ChangeNumberButton';

<<<<<<< HEAD
class Counter extends React.Component {
    state = {
        count: 0,
        buttonType:
        {
            add: 'add',
            subtract: 'subtract',
            reset: 'reset'
        }
    }
    //handling the count state based on the clicked button
    handleChange = (changeType) => {
        const { changeAmount, resetAmount } = this.props;
        const { count } = this.state;
        switch (changeType) {
            case 'add':
                this.setState(() => ({
                    count: count + changeAmount
                }))
                break;
            case 'subtract':
                this.setState(() => ({
                    count: count - changeAmount
                }))
                break;
            case 'reset':
                this.setState(() => ({
                    count: resetAmount
                }))
                break;
            default:
                return undefined
        }

    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <ChangeNumberButton handleChange={this.handleChange} buttonType={this.state.buttonType.add} />
                <ChangeNumberButton handleChange={this.handleChange} buttonType={this.state.buttonType.subtract} />
                <ChangeNumberButton handleChange={this.handleChange} buttonType={this.state.buttonType.reset} />
            </div>
        )
    }

};
=======
const Counter = () => (
    <div>
        <div>testing</div>
        <ChangeNumberButton/>
        <ChangeNumberButton/>
        <ChangeNumberButton/>
    </div>

);
>>>>>>> parent of 7820903... testing

export default Counter;