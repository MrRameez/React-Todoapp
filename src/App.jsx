import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Delete from './component/Delete';

function App() {
  const [todo, setTodo] = useState("mobile");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) { // Add a check to avoid adding empty todos
      setTodos([...todos, todo]);
      setTodo(""); // Clear the input field after adding the todo
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='grid justify-items-center ' >

      <h1 className='font-bold underline text-2xl my-4 '>ADD YOUR WORK</h1>

      <div className='border rounded-2xl p-1 m-2 w-80 bg-stone-500'>
        <input
            value={todo}
            placeholder='Enter your work'
            className='p-1 bg-slate-700  my-3 text-white rounded-full pl-4  w-40'
            onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={addTodo} Text={"Add"} />
      
        {todos.map((data, index) => (
          <div key={index} className='bg-gray-200 border rounded-lg p-2  w-64 ml-6 flex justify-around mr-0 my-2'>
            <span className='font-serif text-gray-600 '>{data}</span>
          
            <Delete  Text={"Delete"} onClick={() => deleteTodo(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
