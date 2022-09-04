import { useNavigate } from "react-router-dom";
import Todo_lists from "./Todo_lists";
const My_Todo=({Name})=>{
    let navigate = useNavigate();
    function ButtonClick(){    
        navigate("../", { replace: true });
    }
    return(
        <div>
        <h3>Hello,{Name}</h3>
        <Todo_lists username={Name} /> 
        <button onClick={ButtonClick}>Log out</button>
        </div>
        
    )
}
export default My_Todo;