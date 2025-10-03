import Jsx from "./Jsx";
import State from "./State";
import PrevState from "./prevState";
import Props from "./Props";

function App (){
    return(
        <>
            {/* <Jsx></Jsx> */}
            <State></State>
            {/* <PrevState></PrevState> */}
            <Props greeting={"Good morning"}></Props>
        </>
        
    )
}

export default App;