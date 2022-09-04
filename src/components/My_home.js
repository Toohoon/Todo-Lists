import { useNavigate } from "react-router-dom";

const My_home=()=>{
    let navigate = useNavigate();
    function Login_cli(){
        const AS=localStorage.getItem("username");
        if(AS===null){
            alert("There is no Name Added!")
        }
        else{
        navigate("../login", { replace: true });}
    }
    function Regis_cli(){
        navigate("../register", { replace: true });
    }
    return(
        <div>
            <button onClick={Login_cli}>
                Log In
            </button>
            <button onClick={Regis_cli}>
                Register
            </button>

        </div>
    )
}
export default My_home;