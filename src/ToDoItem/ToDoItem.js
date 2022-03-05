import React from "react";

const ToDoItem = props => {
    return (
        <div className='todo__item'>
            <div className="description__wrapper">
                <p>{props.description}</p>
            </div>
            <div className="input__wrapper">
                <input type="checkbox" defaultChecked={props.completed} name="" id=""/>
            </div>
        </div>
    )
}
export default ToDoItem