import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
  const styleSheet = {
    minHeight: 'auto',
    minWidth: '100%',
    padding: '20px',
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
  }

  const styleHead = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  }

  return (
    <div className='container'>
      <h2 style={styleHead}>
        <i className="bi bi-list-task me-3"></i>
        Your Todo List
      </h2>
      <div style={styleSheet}>
        {props.todos.length === 0 ? (
          <div className="text-center text-white py-5">
            <i className="bi bi-check-circle fs-1 mb-3 d-block"></i>
            <h3 className="fw-light">No Todos Yet!</h3>
            <p className="text-light-50">Start by adding a new todo above.</p>
          </div>
        ) : (
          props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} delTodo={props.delTodo} edtTodo={props.edtTodo} />
            )
          })
        )}
      </div>
    </div>
  )
}

export default TodoList