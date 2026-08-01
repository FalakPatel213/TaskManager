import React from 'react'
import { useState } from 'react'

function EditTodo({ edit, esno, etitle, edesc }) {
    const styleAddTodo = {
        backgroundColor : '#fff7ed',
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const styleTextBox = {
        width: '50vw',
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
        <div className='text-center ' style={styleAddTodo}>
            <h3 className='text-danger'>Edit Todo</h3>
            <form onSubmit={editBtn}>
                <div className="mb-3">
                    <h5 className="form-label">Title</h5>
                    <input type="text" id='title' value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} style={styleTextBox} />
                </div>
                <div className="mb-3">
                    <h5 className="form-label">Description</h5>
                    <input type='text' id='desc' value={desc} className="form-control" onChange={(e) => setDesc(e.target.value)} style={styleTextBox} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Edit</button>
            </form>
        </div>
    )
}

export default EditTodo
