
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Todos from './components/Todos';
import NewTodos from './components/NewTodos';



function App() {
  return (
    <div className="App">

      {/* Hello Frontend */}
      <Routes>
        <Route path="/" element={<h1>hello welcone To Todo App</h1>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/create" element={<NewTodos/>}/>
      </Routes>
    </div>
  );
}

export default App;
