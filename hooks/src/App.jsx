import { useState } from "react";

import UseState from "./useState/UseState";
import ObjectUseState from "./useState/ObjectUseState"
import LifeCycle from "./useState/LifeCycle"
import UseEffect from "./useState/UseEffect";
import OnClick from "./events/Onclick";
import OnChange from "./events/Onchange";
import OnSubmit from "./events/OnSubmit";
import PassingArgument from "./events/PassingArgument";
import Conditional from "./events/Conditional";
import List from "./lists/List"
import ObjectList from "./lists/ObjectList";
import Focus from "./ref/Focus";
import Controlled from "./forms/controlled";
import Uncontrolled from "./forms/Uncontrolled";
import WorkingWithForms from "./forms/WorkingWithForms";
import Validation from "./forms/Validation";
import FormikForm from "./forms/FormikForm";

const App = () => /* const [input, setInput] = useState("");*/ (
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

    {/* <Controlled></Controlled> */}

    {/* <Uncontrolled></Uncontrolled> */}

    {/* <WorkingWithForms></WorkingWithForms> */}

    {/* <Validation></Validation> */}

    <FormikForm></FormikForm>
  </>
)

export default App;