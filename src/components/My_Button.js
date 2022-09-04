import { useNavigate } from "react-router-dom";

const My_Button=({Name})=>{
    let navigate = useNavigate();
    function On_cli(){
        navigate("../", { replace: true });
    }
    return(
        <button onClick={On_cli}>
            {Name}
        </button>
    )
}
export default My_Button;