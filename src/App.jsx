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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';

// Create a minimal dark theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c5ce7',
      light: '#a29bfe',
      dark: '#4a3cb5',
    },
    secondary: {
      main: '#ff6b6b',
      light: '#ff8787',
      dark: '#cc5555',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b2b2d0',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

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
      sno = 1
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
    
    if (td.length === 0) {
      alert("Todo not found!");
      setEdit(false);
      return;
    }
    
    if(etitle && edesc) {
      td[0].title = etitle;
      td[0].desc = edesc;
    } else if (etitle && edesc === "") {
      td[0].title = etitle;
    } else if (etitle === "" && edesc) {
      td[0].desc = edesc;
    } else if (etitle === "" && edesc === "") {
      alert("Please fill in at least one field");
      return;
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header head="My Todo List" />
          <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
            <Routes>
              <Route exact path="/" element={
                <>
                  {edit ? 
                    <EditTodo edit={editTodoForm} esno={sno} etitle={title} edesc={desc} /> :
                    <AddTodo add={addTodo} />
                  }
                  <TodoList todos={todos} delTodo={deleteTodo} edtTodo={editTodo} />
                </>
              } />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App;