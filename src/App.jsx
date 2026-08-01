import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import EditTodo from './Components/EditTodo';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  let init;

  if (localStorage.getItem("todos") == null) {
    init = [];
  } else {
    init = JSON.parse(localStorage.getItem("todos"));
  }

  const deleteTodo = (td) => {
    setTodos(todos.filter((e) => {
      return e !== td;
    }));
  }

  const addTodo = (title, desc) => {
    let sno;

    if (todos.length === 0) {
      sno = 0
    } else {
      sno = todos[0].sno + 1;
    }

    const todo = {
      sno: sno,
      title: title,
      desc: desc
    }; 
    setTodos([todo, ...todos]);
  }

  const editTodo = (todo) => {
    setEdit(true);
    setSno(todo.sno);
    setTitle(todo.title);
    setDesc(todo.desc);
  };

  const editTodoForm = (esno, etitle, edesc) => {
    const td = todos.filter((e) => {
      return e.sno === esno
    })
    if(etitle && edesc) {
      td[0].title = etitle;
      td[0].desc = edesc;
    } else if (etitle && edesc === "") {
      td[0].title = etitle
    } else if (etitle === "" && edesc) {
      td[0].desc = edesc
    }
    td[0].sno = esno;
    setTodos((prev) => {
      return prev.map((e) => {
        if (e.sno === td[0].sno) {
          return td[0]
        }
        return e
      })
    })
    setEdit(false)
  }

  const [sno, setSno] = useState(-1);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [todos, setTodos] = useState(init);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <Router>
      <Header head="My todo list" />
      <Routes>
        <Route exact path="/" element={
          <>
            {
              edit ? <EditTodo edit={editTodoForm} esno = {sno} etitle = {title} edesc = {desc}/> :
              <AddTodo add={addTodo} />
            }
            <TodoList todos={todos} delTodo={deleteTodo} edtTodo={editTodo} />
          </>
        } />
        <Route exact path="/about" element={
          <About />
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;