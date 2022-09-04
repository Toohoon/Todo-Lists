import My_Login from "./components/My_Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import My_Todo from "./components/My_Todo";
import My_home from "./components/My_home";
import My_regis from "./components/My_regis";
function App() {
  //localStorage.setItem("username",["toohoon"]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<My_home/>} />
      <Route path="/login" element={<My_Login/>} />
      <Route path="/register" element={<My_regis/>} /> 
      <Route path="/addtodo" element={<My_Todo/>} />
      <Route path={`/todolists` } element={<My_Todo Name={localStorage.getItem("username")} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
