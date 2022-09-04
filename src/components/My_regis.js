import { useState } from "react";
import { useNavigate } from "react-router-dom";
import My_Button from "./My_Button";
const My_regis=()=>{
    let navigate = useNavigate();
    const Saved_Id=localStorage.getItem("username");
    const [Tip,SetTip]=useState("Write Your Name!")
    const [Check,SetCheck]=useState(true);
    let Get_Id=[];
    if(Saved_Id!==null){
        Get_Id=JSON.parse(Saved_Id);
    }
    const SUBMIT=(event)=>{
        event.preventDefault();
        const ADDing= event.target[0].value;
        if(Check){
        Get_Id.push(ADDing);
        //console.log(Get_Id);
        localStorage.setItem("username",JSON.stringify(Get_Id));
        event.target[0].value="";
        SetTip("Write Your Name!");
        alert("You Make it!")
        navigate("../", { replace: true });
    }
        else{

        }  
    }
    const Onchange=(event)=>{
        const InPut=event.target.value;
        if(InPut===""){
            SetTip("Write Your Name!");
        }
        else{
        //console.log(InPut);
        let Det=true;
        Get_Id.map((item)=>{
            if(item===InPut){
                Det=false;
            }
        })
    { Det ? SetTip("Good To Go!!"):SetTip("ADDed ID!!")}
    {Det? SetCheck(true):SetCheck(false)}
}
    }
    return(
        <div>
            <form onSubmit={SUBMIT}>
                <input 
                onChange={Onchange}
                required maxLength={30} placeholder="Write your Name!" /><button>ADD</button>
                <h4>{Tip}</h4>
            </form>
            <My_Button Name={"return"}/>
        </div>
    )
}
export default My_regis;