import React from 'react';
import { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button,
    Alert,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function AddTask({ add }) {
    const { isDark } = useTheme();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState(false);

    const submitBtn = (e) => {
        e.preventDefault();
        if (!title.trim() || !desc.trim()) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
        }
        add(title.trim(), desc.trim());
        setTitle("");
        setDesc("");
        setError(false);
    };

    return (
        <Paper
            elevation={isDark ? 0 : 2}
            sx={{
                p: 4,
                mb: 4,
                background: isDark 
                    ? 'rgba(20, 20, 35, 0.8)'
                    : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)'}`,
                borderRadius: 3,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#a29bfe',
                }}
            >
                <Add sx={{ color: '#6c5ce7' }} />
                Add New Task
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Please fill in both Title and Description
                </Alert>
            )}

            <form onSubmit={submitBtn}>
                <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    label="Description"
                    variant="outlined"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
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
                    Add Task
                </Button>
            </form>
        </Paper>
    );
}

export default AddTask;