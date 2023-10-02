import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import ToDoList from '../pages/toDoList';
import AddToDoList from '../pages/addToDo';
import styles from '../assets/css/style.module.css';

function App() {
  return (
    <main className={ styles.container }>
      <Routes>
        <Route path="/todo/add" element={ <AddToDoList /> } />
        <Route path="/todo" element={ <ToDoList /> } />
        <Route path="/" element={ <Login /> } />
      </Routes>
    </main>
  );
}

export default App;
