import React from 'react'

function Footer() {
  const styleFooter = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: 'auto',
    boxShadow: '0 -2px 15px rgba(0,0,0,0.1)',
  }

  return (
    <div style={styleFooter}>
      <div className="container">
        <p className="mb-0">
          <i className="bi bi-heart-fill text-danger me-2"></i>
          Made with love by <strong><a href='https://github.com/FalakPatel213' target='_blank' style={{color:'#fff', textDecoration: 'none' }}>Falak Patel</a></strong>
          <i className="bi bi-heart-fill text-danger ms-2"></i>
        </p>
        <p className="mb-0 mt-1" style={{fontSize: '0.9rem', opacity: '0.9'}}>
          <i className="bi bi-c-circle me-1"></i>
          2026 All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer