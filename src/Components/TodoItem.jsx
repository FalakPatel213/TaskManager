import React from 'react'

function TodoItem({ todo, delTodo, edtTodo }) {
  const styleTodoItem = {
    padding: '20px',
    margin: '10px',
    border: '1px solid',
    borderRadius: '2%',
    backgroundColor: '#fff7ed',
    width: '50%',
    minWidth: '250px',
    maxWidth: '350px',
    // width: '100%',
  }

  const stylePara = {
    display: 'flex',
    justifyContent: 'center',
    overflowWrap: 'anywhere',
  }

  const btnDiv = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  }

  return (
    <div className='text-dark' style={styleTodoItem}>
      <h4 style={stylePara}>{todo.title}</h4>
      <p style={stylePara}>{todo.desc}</p>
      <div style={btnDiv}>
        <button className="btn btn-danger" onClick={() => { delTodo(todo) }}>Delete</button>
        <button className="btn btn-primary" onClick={() => { edtTodo(todo) }}>Edit</button>
      </div>
    </div>
  )
}

export default TodoItem
