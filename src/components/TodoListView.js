import TodoItem from "./TodoItem";

function TodoListView({todoList}) {
    return (
        <div>
            <ul>
                {
                    todoList.map((todo) => {
                        return (
                            <TodoItem key={todo.id}
                                      todo={todo}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoListView;