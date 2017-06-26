import React, { Component } from 'react';
import './App.css';
import { removeSpecialChars, applyPattern } from '../../utils/formatters';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    } 

    handleChange (e) {
        let value = removeSpecialChars(e.target.value);
        value = applyPattern(value, '111.111.111.11');
        this.handleValue(value);
    }

    handleValue (value) {
        this.setState({
            inputValue: value
        });
    }

    render() {
        return (
            <div className="App">
                <input
                type="text"
                onChange={this.handleChange.bind(this)}
                value={this.state.inputValue} />
            </div>
        );
    }
}

export default App;
