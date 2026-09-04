import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import About from './Components/About';
import EditTask from './Components/EditTask';
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

  if (localStorage.getItem("tasks") == null) {
    init = [];
  } else {
    init = JSON.parse(localStorage.getItem("tasks"));
  }

  const deleteTask = (td) => {
    setTasks(tasks.filter((e) => {
      return e !== td;
    }));
  }

  const addTask = (title, desc) => {
    let sno;

    if (tasks.length === 0) {
      sno = 1
    } else {
      sno = tasks[0].sno + 1;
    }

    const task = {
      sno: sno,
      title: title,
      desc: desc
    }; 
    setTasks([task, ...tasks]);
  }

  const editTask = (task) => {
    setEdit(true);
    setSno(task.sno);
    setTitle(task.title);
    setDesc(task.desc);
  };

  const editTaskForm = (esno, etitle, edesc) => {
    const td = tasks.filter((e) => {
      return e.sno === esno
    })
    
    if (td.length === 0) {
      alert("Task not found!");
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
    setTasks((prev) => {
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

  const [tasks, setTasks] = useState(init);
  const [edit, setEdit] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header head="Task Management Application" />
          <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
            <Routes>
              <Route exact path="/" element={
                <>
                  {edit ? 
                    <EditTask edit={editTaskForm} esno={sno} etitle={title} edesc={desc} /> :
                    <AddTask add={addTask} />
                  }
                  <TaskList tasks={tasks} delTask={deleteTask} edtTask={editTask} />
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