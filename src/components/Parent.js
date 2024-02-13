import React , {Component} from "react";
import Child from "./child";
class Parent extends Component {
    
    constructor(){
        super()

        this.state = {
            parentName:'on okay ..! Stupid'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Click ${this.state.parentName}`)
    }

    render(){
        return(
            <div>
                <Child greetHandler = {this.greetParent}/>
            </div>
        )
    }


}
export default Parent