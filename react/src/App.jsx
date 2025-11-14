import Jsx from "./Jsx";
import State from "./State";
import PrevState from "./prevState";
import Props from "./Props";
import { Component, FunctionalComponent } from "react";

function App (){
    return(
        <>
            {/* <Jsx></Jsx> */}
            {/* <State></State> */}
            {/* <PrevState></PrevState> */}
            <Props greeting={"Good morning"}></Props>
            <Component></Component>
            <FunctionalComponent></FunctionalComponent>
        </>
        
    )
}

export default App;