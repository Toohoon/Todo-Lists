import { useState } from "react";
const Todo_lists=({username})=>{
    const Saved_todo=localStorage.getItem(username);
    let AS=[]
    if(Saved_todo!==null){
        AS=JSON.parse(Saved_todo);
    }
    const [Todos,SetTodo]=useState(AS);
    function My_Submit(event){
        event.preventDefault();
        const ADDING=event.target[0].value;
        const ADD_Object={
            text:ADDING,
            id:Date.now(),
        }
        SetTodo((Array)=>[ADD_Object,...Array]);
        event.target[0].value="";
    }
    const Delete_Cli=(event)=>{
        const To_delete=event.target.parentElement.id;
        AS=AS.filter((AS)=>AS.id!==parseInt(To_delete))
        SetTodo(AS);
        localStorage.setItem(username,JSON.stringify(Todos));
    }
    localStorage.setItem(username,JSON.stringify(Todos));
    return(
        <div>
            <form onSubmit={My_Submit}>
                <input required maxLength={30} placeholder="Write Your Todo!"/>
            </form>
                <ul>
                    {Todos.map((item)=><li 
                    key={item.id}
                    id={item.id}>
                        <span>{item.text}</span>
                        <button onClick={Delete_Cli}>delete</button>
                    </li>)}
                </ul>
        </div>
    )
}
export default Todo_lists;