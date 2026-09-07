import React from 'react';
import {
    Paper,
    Typography,
    Box,
    IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function TaskItem({ task, delTask, edtTask }) {
    const { isDark } = useTheme();

    return (
        <Paper
            elevation={isDark ? 0 : 1}
            sx={{
                p: 3,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: isDark 
                    ? 'rgba(20, 20, 35, 0.8)'
                    : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.15)' : 'rgba(108, 92, 231, 0.05)'}`,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(108, 92, 231, 0.4)',
                    boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)',
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1 }}>
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#a29bfe',
                            fontWeight: 500,
                            mb: 0.5,
                        }}
                    >
                        {task.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: isDark ? '#b2b2d0' : '#666',
                            wordBreak: 'break-word',
                        }}
                    >
                        {task.desc}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                <IconButton
                    onClick={() => edtTask(task)}
                    sx={{
                        color: '#6c5ce7',
                        '&:hover': {
                            background: 'rgba(108, 92, 231, 0.2)',
                            transform: 'scale(1.1)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    onClick={() => delTask(task)}
                    sx={{
                        color: '#ff6b6b',
                        '&:hover': {
                            background: 'rgba(255, 107, 107, 0.2)',
                            transform: 'scale(1.1)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Delete />
                </IconButton>
            </Box>
        </Paper>
    );
}

export default TaskItem;