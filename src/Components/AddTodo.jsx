import React from 'react'
import { useState } from 'react'

function AddTodo({ add }) {
    const styleAddTodo = {
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const styleTextBox = {
        width: '50vw',
    }

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submitBtn = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description is not provided")
            setTitle("")
            setDesc("")
        } else {
            add(title, desc)
            setTitle("")
            setDesc("")
        }
    }


    return (
        <div className='text-center' style={styleAddTodo}>
            <h3 className='text-danger'>Add Todo</h3>
            <form onSubmit={submitBtn}>
                <div className="mb-3">
                    <h5 className="form-label">Title</h5>
                    <input type="text" id='title' value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} style={styleTextBox} />
                </div>
                <div className="mb-3">
                    <h5 className="form-label">Description</h5>
                    <input type='text' id='desc' value={desc} className="form-control" onChange={(e) => setDesc(e.target.value)} style={styleTextBox} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
