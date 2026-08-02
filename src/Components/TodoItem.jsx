import React from 'react'

function TodoItem({ todo, delTodo, edtTodo }) {
  const styleTodoItem = {
    padding: '25px',
    margin: '15px 0',
    border: 'none',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.95)',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  }

  const stylePara = {
    display: 'flex',
    justifyContent: 'center',
    overflowWrap: 'anywhere',
    margin: '0',
  }

  const btnDiv = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '15px',
  }

  return (
    <div 
      className='text-dark fade-in' 
      style={styleTodoItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
      }}
    >
      <h4 className='fw-bold text-primary' style={stylePara}>
        <i className="bi bi-check-circle-fill text-success me-2" style={{fontSize: '0.8rem'}}></i>
        {todo.title}
      </h4>
      <p className='text-secondary mt-2' style={stylePara}>
        {todo.desc}
      </p>
      <div style={btnDiv}>
        <button 
          className="btn btn-outline-danger btn-sm px-4"
          style={{
            borderRadius: '20px',
            transition: 'all 0.3s ease',
          }}
          onClick={() => { delTodo(todo) }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = '#dc3545';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#dc3545';
          }}
        >
          <i className="bi bi-trash me-1"></i>
          Delete
        </button>
        <button 
          className="btn btn-outline-primary btn-sm px-4"
          style={{
            borderRadius: '20px',
            transition: 'all 0.3s ease',
          }}
          onClick={() => { edtTodo(todo) }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = '#0d6efd';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#0d6efd';
          }}
        >
          <i className="bi bi-pencil me-1"></i>
          Edit
        </button>
      </div>
    </div>
  )
}

export default TodoItem