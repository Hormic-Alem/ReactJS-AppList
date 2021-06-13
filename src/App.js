import React, {useState} from "react";
import './App.css';
import Header from './Header';
import TodoList from './components/TodoList';
import Form from "./components/Form";


function App() {
  //
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //
  return (
    <div className="App">
      <Header/>
      <h1>App List</h1>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>
      <TodoList 
      setTodos={setTodos}
      todos={todos}/>
      
    </div>
  );
}
export default App;
