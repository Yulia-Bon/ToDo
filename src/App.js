import React from 'react';
import './App.css';
import ToDoItem from "./ToDoItem/ToDoItem.js";
import ToDoData from "./ToDoItem/ToDoData";

function App() {

    const ToDoItems = ToDoData.map(item => {
        return (
            <ToDoItem
                key = {item.id}
                description={item.description}
                completed={item.completed}
            />
        )
    })

    return (
        <div className="App">
            {ToDoItems}
        </div>
    );
}

export default App;
