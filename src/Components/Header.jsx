import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const colorSheet = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 2px 15px rgba(0,0,0,0.2)',
        padding: '10px 0',
    }

    const {
        head = "Todo List",
    } = props;

    return (
        <nav className="navbar navbar-expand-lg" style={colorSheet}>
            <div className="container-fluid px-4">
                <Link className="navbar-brand text-white fw-bold fs-3" to="/">
                    <i className="bi bi-check2-square me-2"></i>
                    {head}
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 hover-effect" aria-current="page" to="/">
                                <i className="bi bi-house-door me-1"></i>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 hover-effect" to="/about">
                                <i className="bi bi-info-circle me-1"></i>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style>
                {`
                    .hover-effect:hover {
                        background: rgba(255,255,255,0.15);
                        border-radius: 8px;
                        transform: translateY(-2px);
                        transition: all 0.3s ease;
                    }
                `}
            </style>
        </nav>
    )
}

export default Header;