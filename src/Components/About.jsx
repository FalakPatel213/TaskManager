import React from 'react'

function About() {
    const styleAbout = {
        minHeight: '80vh',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        margin: '30px auto',
        maxWidth: '800px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        width: '90%',
    }

    return (
        <div style={styleAbout} className='fade-in'>
            <div className="text-center mb-4">
                <i className="bi bi-info-circle-fill text-primary" style={{fontSize: '3rem'}}></i>
                <h1 className="fw-bold mt-3 text-primary">About Todo App</h1>
                <div className="border-bottom w-25 mx-auto my-3"></div>
            </div>
            <div className="container">
                <p className="lead text-secondary" style={{lineHeight: '2'}}>
                    <i className="bi bi-check2-square text-success me-2"></i>
                    Welcome to my Todo List Application! This is a powerful and intuitive task management tool built with React.
                </p>
                <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                        <div className="p-3 bg-light rounded-3 h-100">
                            <i className="bi bi-plus-circle fs-2 text-primary d-block mb-2"></i>
                            <h5>Add Tasks</h5>
                            <p className="text-secondary">Easily add new todos with title and description</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="p-3 bg-light rounded-3 h-100">
                            <i className="bi bi-pencil-square fs-2 text-warning d-block mb-2"></i>
                            <h5>Edit Tasks</h5>
                            <p className="text-secondary">Modify existing todos to keep them up to date</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="p-3 bg-light rounded-3 h-100">
                            <i className="bi bi-trash fs-2 text-danger d-block mb-2"></i>
                            <h5>Delete Tasks</h5>
                            <p className="text-secondary">Remove todos that are no longer needed</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="p-3 bg-light rounded-3 h-100">
                            <i className="bi bi-cloud-check fs-2 text-success d-block mb-2"></i>
                            <h5>Persistent Storage</h5>
                            <p className="text-secondary">Your todos are saved in localStorage for convenience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About