import { useState } from "react";
import My_Button from "./My_Button";
import My_Todo from "./My_Todo";
const My_Login=()=>{
    //const [Tip,SetTip]=useState("");
    const [LOG,SETLOG]=useState(false);
    const [Check,SetCheck]=useState(false);
    const [To_log,Set_tolog]=useState("");
    let Saved_ID=[];
    Saved_ID=JSON.parse(localStorage.getItem("username"));
    //console.log(Saved_ID);
    const SubMit=(event)=>{
        event.preventDefault();
        const To_Login=event.target[0].value;
        if(Check){
            SETLOG(true);
            Set_tolog(To_Login);
        }
        else{
        }
    }
    const Onchange=(event)=>{
        const Input = event.target.value;
        SetCheck(false);
        Saved_ID.map((item)=>{
            if(item===Input){
                SetCheck(true);
            }
        })
    }
    return(
        <div>
            {LOG ? <My_Todo Name={To_log}/>:
        <div>
        <form id="login"
        onSubmit={SubMit}
        >
        <input 
        required maxLength={15}
        onChange={Onchange}
        placeholder="Input Your Name"/>
        <h3>{Check ? "You are Right!":"Wrong Name!"}</h3>
        </form>
        <My_Button Name={"return"}/>
        </div>}
        </div>
    )
}
export default My_Login;