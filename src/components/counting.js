import React, { Component } from "react";

class Counter extends Component {

    constructor(){
        super()
        this.state={
            counter:0
        }
    }
//value will not change in inspect as its Async code.
    increment(){
        this.setState({
            counter:this.state.counter + 1
        },()=>{
            console.log(this.state.counter) //callback to sync it
        })
    }

    render(){
        return(
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={()=> this.increment()}>Reduce</button>
        </div>
        )
    }
}


export default Counter