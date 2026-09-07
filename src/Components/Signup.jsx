import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Paper,
    Typography,
    TextField,
    Button,
    Alert,
    Box,
    Container,
    IconButton,
} from '@mui/material';
import {  Person, Email, DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function Signup() {
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useTheme();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !email.trim()) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some(
            user => user.username === username.trim() || user.email === email.trim()
        );

        if (userExists) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
        }

        const newUser = {
            username: username.trim(),
            email: email.trim(),
            createdAt: new Date().toISOString(),
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            navigate('/login');
        }, 1500);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDark 
                    ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
                    : 'linear-gradient(135deg, #f0f0f5 0%, #e8e8f0 100%)',
                p: 2,
            }}
        >
            <Container maxWidth="sm">
                {/* Theme Toggle - Positioned at top right */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton
                        onClick={toggleTheme}
                        sx={{
                            color: isDark ? '#e0e0e0' : '#1a1a2e',
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            '&:hover': {
                                background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            },
                        }}
                    >
                        {isDark ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Box>

                <Paper
                    elevation={isDark ? 0 : 3}
                    sx={{
                        p: 4,
                        background: isDark 
                            ? 'rgba(20, 20, 35, 0.9)'
                            : 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)'}`,
                        borderRadius: 3,
                    }}
                >
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Person sx={{ fontSize: 60, color: '#6c5ce7', mb: 2 }} />
                        <Typography
                            variant="h4"
                            sx={{
                                background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 600,
                            }}
                        >
                            Create Account
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: isDark ? '#b2b2d0' : '#666',
                                mt: 1 
                            }}
                        >
                            Sign Up to start managing your tasks
                        </Typography>
                    </Box>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            Username or email already exists. Please try a different one.
                        </Alert>
                    )}

                    {success && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            Account created successfully! Redirecting to Login...
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            InputProps={{
                                startAdornment: <Person sx={{ mr: 1, color: '#6c5ce7' }} />,
                            }}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: isDark ? 'rgba(108, 92, 231, 0.3)' : 'rgba(108, 92, 231, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#6c5ce7',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6c5ce7',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: isDark ? '#b2b2d0' : '#666',
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: <Email sx={{ mr: 1, color: '#6c5ce7' }} />,
                            }}
                            sx={{
                                mb: 3,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: isDark ? 'rgba(108, 92, 231, 0.3)' : 'rgba(108, 92, 231, 0.2)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#6c5ce7',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6c5ce7',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: isDark ? '#b2b2d0' : '#666',
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1.5,
                                background: 'linear-gradient(135deg, #6c5ce7 0%, #4a3cb5 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #7c6ce7 0%, #5a4cb5 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 20px rgba(108, 92, 231, 0.4)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Create Account
                        </Button>
                    </form>

                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Typography variant="body2" sx={{ color: isDark ? '#b2b2d0' : '#666' }}>
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                style={{
                                    color: '#6c5ce7',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default Signup;