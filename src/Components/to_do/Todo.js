import {useState} from 'react'
import List from "./List/List"
import "./styles.css"

function Todo() {
    const [tasks,tasksSet]=useState([
        {value:"Complete the to-do list",view:"completed",id:0},
        {value:"Study at Patika",view:"",id:1},
        {value:"Cry in the bed...",view:"",id:2}
]);
const [filter,filterSet]=useState("all");
  return (
    <div>
        <List  
         tasks={tasks}
        tasksSet={tasksSet}
        filter={filter}
        filterSet={filterSet} />
    </div>
  )
}

export default Todo