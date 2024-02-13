import React , {Component} from "react";

class Bind extends Component {

    constructor(){
        super()
        this.state = {
            message:"hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:"good bye"
        })
       console.log(this)
    }

    clickHandler =() => {
        this.setState({message:'Goodbye'})
    }
    
    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
              
                <button onClick={ this.clickHandler}>Click</button>
            </div>
        )
    }

}

export default Bind

