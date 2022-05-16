import { Component } from 'react';

export default class Task1 extends Component {
    constructor() {
        super();
        this.state = {
            input: "Input",
        }
    }

    reset = ()=>{
        this.setState({input:""})
    }

    render() {
        return (
            <div align="center">
                <h1>Task 1</h1>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={(e) => {
                        this.setState({ input: e.target.value })
                    }}
                />
                <br />
                {this.state.input}
                <br />
                <input
                    type="button"
                    value="Reset"
                    onClick={this.reset}
                />
            </div>
        )
    }
}