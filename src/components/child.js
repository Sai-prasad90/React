import React from "react";

let Child = (props) => {
    console.log(props)
    return (
        <div>
             <button onClick={()=>props.greetHandler()}>Alert Buttoonnn</button>
        </div>
    )

}
export default Child