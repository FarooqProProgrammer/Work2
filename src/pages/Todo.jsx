import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3000/todos');
    console.log(response)
    setTodos(response.data);
  };

  const addTodo = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://localhost:3000/todos',{task})

    if (response.ok) {
      setTask('');
      fetchTodos();
    }
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const HandleDelete = async (id) =>{
    const response = await axios.delete(`http://localhost:3000/todos/${id}`);
    console.log(response)

    if (response.statusText === 'ok') {
        fetchTodos();
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>

      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          className="border p-2 rounded-md w-full"
          placeholder="Enter a new task"
          value={task}
          onChange={handleTaskChange}
          required
        />
        <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
          Add Task
        </button>
      </form>

      <ul className="list-disc pl-6">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex gap-10 ">
            <p>{todo.task}</p>
            <button onClick={()=>HandleDelete(todo.id)} className='px-4 py-3 bg-sky-400 rounded-md '>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
