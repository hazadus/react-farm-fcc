import React, {useState, useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import TodoListView from "./components/TodoListView";

function App() {
    const [todoList, setTodoList] = useState([{}])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // https://reactjs.org/docs/hooks-effect.html
    // https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    // Read All Todos from API
    useEffect(() => {
        axios.get('http://fastapi.hazadus.ru/all-todos/')
            .then(res => {
                setTodoList(res.data)
            })
    }, [todoList]); // FIXME : reduce quantity of API request, see link above...

    const addTodoHandler = () => {
        axios.post('http://fastapi.hazadus.ru/add-todo/',
            {
                "id": '',
                "title": title,
                "description": description
            }).then(res => console.log(res))
        document.getElementById('input_title').value ='';
        setTitle('')
        document.getElementById('input_description').value ='';
        setDescription('')
    };

  return (
    <div className="App">
        <div className='App list-group-item justify-content-center align-items-center mx-auto rounded'
        style={{
            "width":"400px",
            "backgroundColor":"beige",
            "marginTop":"15px",
            "minHeight":"90vh"
        }}>
            <h1 className='card text-white bg-primary mb-1'
            style={{"width":"100%"}}>
                Task Manager
            </h1>
            <h6 className='card text-white bg-primary mb-3'
            style={{"width":"100%"}}>
                FastAPI + React + MongoDB
            </h6>
            <div className='card-body'
            style={{"width":"90%"}}>
                <h5 className='card text-white bg-dark mb-3'>
                    Add your task
                </h5>
                <span className='card-text'>
                    <input className='mb-2 form-control titleIn' placeholder='Title'
                           id='input_title'
                           onChange={event => setTitle(event.target.value)}
                    />
                    <input className='mb-2 form-control desIn' placeholder='Description'
                           id='input_description'
                           onChange={event => setDescription(event.target.value)}/>
                    <button className='btn btn-outline-primary mx-2 mb-3'
                            style={{
                                "borderRadius":"15px",
                                "fontWeight":"bold"
                            }}
                            onClick={addTodoHandler}>
                        Add Task
                    </button>
                </span>
                <h5 className='card text-white bg-dark mb-3'>
                    Your tasks
                </h5>
                <div>
                    {<TodoListView todoList={todoList}/>}
                </div>
            </div>
            <h6 className='card text-dark bg-secondary py-1 mb-0'
                style={{"width":"100%"}}>
                &copy; www.hazadus.ru
            </h6>
        </div>
    </div>
  );
}

export default App;
