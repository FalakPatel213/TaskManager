import React from 'react';
import TaskItem from './TaskItem';
import { Box, Typography, Paper } from '@mui/material';
import { ListAlt, CheckCircle } from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function TaskList(props) {
    const { tasks, delTask, edtTask } = props;
    const { isDark } = useTheme();

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                }}
            >
                <ListAlt sx={{ color: '#6c5ce7', WebkitTextFillColor: '#6c5ce7' }} />
                Your Tasks
            </Typography>

            {tasks.length === 0 ? (
                <Paper
                    elevation={isDark ? 0 : 2}
                    sx={{
                        p: 6,
                        textAlign: 'center',
                        background: isDark 
                            ? 'rgba(20, 20, 35, 0.6)'
                            : 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.1)' : 'rgba(108, 92, 231, 0.05)'}`,
                        borderRadius: 3,
                    }}
                >
                    <CheckCircle sx={{ fontSize: 64, color: '#6c5ce7', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: isDark ? '#b2b2d0' : '#666' }}>
                        No Tasks Yet!
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? '#666' : '#999' }}>
                        Start by adding a new task above.
                    </Typography>
                </Paper>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.sno}
                        task={task}
                        delTask={delTask}
                        edtTask={edtTask}
                    />
                ))
            )}
        </Box>
    );
}

export default TaskList;