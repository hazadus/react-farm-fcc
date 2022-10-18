import React from "react";
import axios from "axios";

function TodoItem({todo}) {
    const deleteTodoHandler = (id) => {
        // Note `` quotes here:
        axios.delete(
            `http://fastapi.hazadus.ru/delete-todo/${id}`
        ).then(res=>console.log(res.data))
    };

    return (
        <div id={todo.id}>
            <p>
                <span style={{ "fontWeight": "bold, underline" }}>
                    { todo.title }&nbsp;:&nbsp;
                </span>
                { todo.description }
                <button onClick={() => deleteTodoHandler(todo.id)}
                        className='btn btn-outline-danger my-2 mx-2'
                        style={{ "borderRadius": "15px"}}>
                    X
                </button>
            </p>
            <hr></hr>
        </div>
    )
}

export default TodoItem;