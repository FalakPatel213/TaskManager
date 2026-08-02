import React from 'react'
import { useState } from 'react'

function EditTodo({ edit, esno, etitle, edesc }) {
    const styleAddTodo = {
        background: 'rgba(255, 255, 255, 0.95)',
        paddingTop: '30px',
        paddingBottom: '30px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        margin: '20px auto',
        maxWidth: '600px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        width: '90%',
    }

    const styleTextBox = {
        width: '100%',
        maxWidth: '400px',
        padding: '12px 15px',
        border: '2px solid #e0e0e0',
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        fontSize: '16px',
    }

    const [sno, setSno] = useState(esno)
    const [title, setTitle] = useState(etitle)
    const [desc, setDesc] = useState(edesc)

    const editBtn = (e) => {
        e.preventDefault();
        edit(sno, title, desc)
        setSno(-1)
        setTitle("")
        setDesc("")
    }

    return (
        <div className='text-center fade-in' style={styleAddTodo}>
            <h3 className='text-warning fw-bold mb-4'>
                <i className="bi bi-pencil-square me-2"></i>
                Edit Todo
            </h3>
            <form onSubmit={editBtn}>
                <div className="mb-3">
                    <h5 className="form-label text-secondary">Title</h5>
                    <input 
                        type="text" 
                        id='title' 
                        value={title} 
                        className="form-control" 
                        onChange={(e) => setTitle(e.target.value)} 
                        style={styleTextBox}
                        placeholder="Enter todo title..."
                    />
                </div>
                <div className="mb-3">
                    <h5 className="form-label text-secondary">Description</h5>
                    <input 
                        type='text' 
                        id='desc' 
                        value={desc} 
                        className="form-control" 
                        onChange={(e) => setDesc(e.target.value)} 
                        style={styleTextBox}
                        placeholder="Enter todo description..."
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-warning btn-lg px-5 mt-2"
                    style={{
                        borderRadius: '25px',
                        boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
                        border: 'none',
                        color: '#fff',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    <i className="bi bi-check-lg me-2"></i>
                    Update Todo
                </button>
            </form>
        </div>
    )
}

export default EditTodo