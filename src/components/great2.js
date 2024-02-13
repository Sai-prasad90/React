import React from "react";
function Greet2 (props){

    let {name , lastName} = props
    return(
        <div>
            <h1>Hello ,{name}{lastName}wins grammy</h1>
        </div>
    )

}
export default Greet2