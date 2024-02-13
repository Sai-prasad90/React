import React , {Component}from "react";

class Counting2 extends Component {

    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increment(){

        this.setState((pre)=>({
            count:pre.count + 1
        }))


    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render(){
        return(
            <div>
               <h1>{this.state.count}</h1>
               <button onClick={()=> this.incrementFive()}>increment Cpunting</button> 
            </div>
        )
    }

}

export default Counting2