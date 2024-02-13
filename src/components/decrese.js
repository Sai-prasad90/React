import React, { Component } from "react";

class Count2 extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        }, () => {
            console.log(this.state.counter);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.decrement()}>Decrese</button>
            </div>
        );
    }
}

export default Count2;
