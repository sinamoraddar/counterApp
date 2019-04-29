import React from 'react';
import ChangeNumberButton from './ChangeNumberButton';
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
            <div className="counter" >
                <div className="count">{this.state.count}</div>
                <div className="btnGroup"><ChangeNumberButton handleChange={this.handleChange} buttonType={this.state.buttonType.add} />
                    <ChangeNumberButton handleChange={this.handleChange} buttonType={this.state.buttonType.subtract} />
                    <ChangeNumberButton handleChange={this.handleChange} buttonType={this.state.buttonType.reset} />
                </div>
            </div>
        )
    }

};

export default Counter;