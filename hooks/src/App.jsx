import { useState } from "react";

import UseState from "./UseState";
import ObjectUseState from "./ObjectUseState"
import LifeCycle from "./LifeCycle"
import UseEffect from "./UseEffect";
import OnClick from "./assets/events/Onclick";
import OnChange from "./assets/events/Onchange";
import OnSubmit from "./assets/events/OnSubmit";
import PassingArgument from "./assets/events/PassingArgument";
import Conditional from "./assets/events/Conditional";
import List from "./assets/lists/List"
import ObjectList from "./assets/lists/ObjectList";
import Focus from "./assets/ref/Focus";
import Controlled from "./assets/forms/controlled";

const App = () => {

  // const [input, setInput] = useState("");

  return(
    <>
      {/* <UseState></UseState> */}

      {/* <ObjectUseState></ObjectUseState> */}

      {/* <LifeCycle></LifeCycle> */}

      {/* <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}{" "}
      </button> */}
      {/* {show && <LifeCycle />} */}

      {/* <UseEffect></UseEffect> */}

      {/* <event></event> */}

      {/* <OnClick></OnClick> */}

      {/* <OnChange></OnChange> */}

      {/* <><OnSubmit></OnSubmit></> */}

      {/* passing argument in event using props  */}
      {/* <input type="text" value={input} placeholder="Enter Name" onChange={(e) => setInput(e.target.value)}/>
      <PassingArgument name={input}></PassingArgument> */}

      {/* <Conditional></Conditional>*/}

      {/* <List></List> */}

      {/* <ObjectList></ObjectList> */}

      {/* <Focus></Focus> */}

      <Controlled></Controlled>
    </>
  )
}

export default App;