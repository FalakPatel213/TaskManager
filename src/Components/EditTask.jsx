import React from 'react';
import { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function EditTask({ edit, esno, etitle, edesc }) {
    const { isDark } = useTheme();
    const [sno, setSno] = useState(esno);
    const [title, setTitle] = useState(etitle);
    const [desc, setDesc] = useState(edesc);

    const editBtn = (e) => {
        e.preventDefault();
        edit(sno, title.trim(), desc.trim());
        setSno(-1);
        setTitle("");
        setDesc("");
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
                border: `1px solid ${isDark ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)'}`,
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
                    color: '#ff6b6b',
                }}
            >
                <Edit sx={{ color: '#ff6b6b' }} />
                Edit Task
            </Typography>

            <form onSubmit={editBtn}>
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
                                borderColor: isDark ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.2)',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff6b6b',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff6b6b',
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
                                borderColor: isDark ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.2)',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff6b6b',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff6b6b',
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
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #cc5555 100%)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #ff7b7b 0%, #dd5555 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 20px rgba(255, 107, 107, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    Update Task
                </Button>
            </form>
        </Paper>
    );
}

export default EditTask;    