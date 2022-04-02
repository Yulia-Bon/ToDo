import React from "react";

const ToDoItem = props => {

    const resolvedClass = {
        textDecoration : 'line-thriugh'
    }

    return (
        <div className='todo__item'>
            <div className="description__wrapper">
                <p style = {
                   props.completed == true ? resolvedClass : {}
                }>{props.description}</p>
            </div>
            <div className="input__wrapper">
                <input type="checkbox"
                       defaultChecked={props.completed}
                       name="" id=""
                       onChange={props.handleChange}
                />

            </div>
        </div>
    )
}
export default ToDoItem