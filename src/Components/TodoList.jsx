import React from 'react';
import TodoItem from './TodoItem';
import { Box, Typography, Paper } from '@mui/material';
import { ListAlt, CheckCircle } from '@mui/icons-material';

function TodoList(props) {
    const { todos, delTodo, edtTodo } = props;

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
                Your Todo List
            </Typography>

            {todos.length === 0 ? (
                <Paper
                    elevation={0}
                    sx={{
                        p: 6,
                        textAlign: 'center',
                        background: 'rgba(20, 20, 35, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(108, 92, 231, 0.1)',
                        borderRadius: 3,
                    }}
                >
                    <CheckCircle sx={{ fontSize: 64, color: '#6c5ce7', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: '#b2b2d0' }}>
                        No Todos Yet!
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                        Start by adding a new todo above.
                    </Typography>
                </Paper>
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.sno}
                        todo={todo}
                        delTodo={delTodo}
                        edtTodo={edtTodo}
                    />
                ))
            )}
        </Box>
    );
}

export default TodoList;