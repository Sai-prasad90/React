import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome"
        }
    }

    // changeMessage(){
    //     this.state=(
    //         message:"Welcome Sai"
    //     )
    // }      // not changing state ie. data ui war render nhi ho rha

    changeMessage() {
        this.setState=({
            message:"Wellcome Shreya"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change</button>
            </div>
        )
    }

}
export default Message