import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import About from './Components/About';
import EditTask from './Components/EditTask';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Container, Box } from '@mui/material';
import { ThemeProvider as CustomThemeProvider, useTheme } from './Components/ThemeContext';

const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function AppContent() {
  const { theme } = useTheme();
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
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            
            <Route path="/*" element={
              <ProtectedRoute>
                <>
                  <Header head="ToDo List Application" />
                  <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
                    <Routes>
                      <Route exact path="/tasks" element={
                        <>
                          {edit ? 
                            <EditTask edit={editTaskForm} esno={sno} etitle={title} edesc={desc} /> :
                            <AddTask add={addTask} />
                          }
                          <TaskList tasks={tasks} delTask={deleteTask} edtTask={editTask} />
                        </>
                      } />
                      <Route exact path="/about" element={<About />} />
                      <Route exact path="/" element={<Navigate to="/tasks" replace />} />
                    </Routes>
                  </Container>
                  <Footer />
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;