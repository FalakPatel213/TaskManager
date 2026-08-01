import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
  const styleSheet = {
    minHeight: '84vh',
    minWidth: '100%',
    padding: '30px',
    backgroundColor: '#d4f3ff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
  }

  const styleHead = {
    // marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4f3ff',
    marginBottom: '0px',
    paddingTop: '30px',
  }

  return (
    <div>
      <h2 style={styleHead}>Todo List</h2>
      <div className='text-center text-dark' style={styleSheet}>
        {props.todos.length === 0 ? "No Todo Here" :
          props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} delTodo={props.delTodo} edtTodo={props.edtTodo} />
            )
          })
        }
      </div>
    </div>
  )
}

export default TodoList;