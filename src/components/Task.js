import React from "react"; 
 
/** 
 * TODO: implement the Task component 
 * @function Task 
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion 
 */ 
export default function Task({task, onToggleTask, onDeleteTask}) { 
    return ( 
        <li> 
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggleTask(task.id)} 
            /> 
            <span style={task.completed ? { textDecoration: "line-through" } : {}}> 
                {task.description} 
            </span> 
            <button onClick={() => onDeleteTask(task.id)}>Delete</button> 
        </li> 
    ) 
}