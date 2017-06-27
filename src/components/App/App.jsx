import React, { Component } from 'react';
import './App.css';
import { removeNonNumerics, applyPattern } from '../../utils/formatters';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    } 

    handleChange (e) {
        // ;let value = removeNonNumerics(e.target.value);
        let value = applyPattern(e.target.value, '123.123.123-12');
        
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
