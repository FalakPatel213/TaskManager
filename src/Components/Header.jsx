import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Home, Info, Login, DarkMode, LightMode, Logout } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function Header(props) {
    const { head = "Task Manager" } = props;
    const { isDark, toggleTheme } = useTheme();
    const navigate = useNavigate();
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    return (
        <AppBar position="sticky" elevation={isDark ? 0 : 1} sx={{ 
            background: isDark 
                ? 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f5f5f7 50%, #ffffff 100%)',
            borderBottom: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)'}`,
        }}>
            <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography
                    variant="h5"
                    component={Link}
                    to="/tasks"
                    sx={{
                        textDecoration: 'none',
                        color: isDark ? 'white' : '#1a1a2e',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontWeight: 600,
                        '&:hover': { opacity: 0.8 },
                    }}
                >
                    <Box component="span" sx={{ 
                        background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        {head}
                    </Box>
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Button
                        component={Link}
                        to="/tasks"
                        color="inherit"
                        startIcon={<Home />}
                        sx={{
                            borderRadius: 2,
                            color: isDark ? '#e0e0e0' : '#1a1a2e',
                            '&:hover': {
                                background: isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)',
                            },
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        color="inherit"
                        startIcon={<Info />}
                        sx={{
                            borderRadius: 2,
                            color: isDark ? '#e0e0e0' : '#1a1a2e',
                            '&:hover': {
                                background: isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)',
                            },
                        }}
                    >
                        About
                    </Button>
                    {currentUser ? (
                        <Button
                            onClick={handleLogout}
                            color="inherit"
                            startIcon={<Logout />}
                            sx={{
                                borderRadius: 2,
                                color: isDark ? '#e0e0e0' : '#1a1a2e',
                                '&:hover': {
                                    background: isDark ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)',
                                },
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            component={Link}
                            to="/login"
                            color="inherit"
                            startIcon={<Login />}
                            sx={{
                                borderRadius: 2,
                                color: isDark ? '#e0e0e0' : '#1a1a2e',
                                '&:hover': {
                                    background: isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)',
                                },
                            }}
                        >
                            Login
                        </Button>
                    )}
                    <IconButton
                        onClick={toggleTheme}
                        sx={{
                            color: isDark ? '#e0e0e0' : '#1a1a2e',
                            ml: 1,
                            '&:hover': {
                                background: isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)',
                            },
                        }}
                    >
                        {isDark ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;