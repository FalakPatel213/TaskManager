import React from 'react'
import { useState } from 'react'

function AddTodo({ add }) {
    const styleAddTodo = {
        paddingTop: '30px',
        paddingBottom: '30px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.95)',
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

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submitBtn = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please fill in both Title and Description")
            setTitle("")
            setDesc("")
        } else {
            add(title, desc)
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className='text-center fade-in' style={styleAddTodo}>
            <h3 className='text-primary fw-bold mb-4'>
                <i className="bi bi-plus-circle me-2"></i>
                Add New Todo
            </h3>
            <form onSubmit={submitBtn}>
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
                    className="btn btn-primary btn-lg px-5 mt-2"
                    style={{
                        borderRadius: '25px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    <i className="bi bi-plus-lg me-2"></i>
                    Add Todo
                </button>
            </form>
            <style>
                {`
                    .form-control:focus {
                        border-color: #667eea;
                        box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
                    }
                    .form-control:hover {
                        border-color: #764ba2;
                    }
                `}
            </style>
        </div>
    )
}

export default AddTodo