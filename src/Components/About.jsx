import React from 'react';
import {
    Paper,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import {
    AddBox,
    Edit,
    Delete,
    CloudUpload,
} from '@mui/icons-material';
import { useTheme } from './ThemeContext';

function About() {
    const { isDark } = useTheme();

    const features = [
        {
            icon: <AddBox sx={{ fontSize: 40, color: '#6c5ce7' }} />,
            title: 'Add Tasks',
            description: 'Easily add new tasks with title and description',
        },
        {
            icon: <Edit sx={{ fontSize: 40, color: '#ff6b6b' }} />,
            title: 'Edit Tasks',
            description: 'Modify existing tasks to keep them up to date',
        },
        {
            icon: <Delete sx={{ fontSize: 40, color: '#ff6b6b' }} />,
            title: 'Delete Tasks',
            description: 'Remove tasks that are no longer needed',
        },
        {
            icon: <CloudUpload sx={{ fontSize: 40, color: '#6c5ce7' }} />,
            title: 'Persistent Storage',
            description: 'Your tasks are saved in localStorage for convenience',
        },
    ];

    return (
        <Paper
            elevation={isDark ? 0 : 2}
            sx={{
                p: 4,
                background: isDark 
                    ? 'rgba(20, 20, 35, 0.8)'
                    : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)'}`,
                borderRadius: 3,
                minHeight: '70vh',
            }}
        >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h4"
                    sx={{
                        background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 600,
                        mb: 1,
                    }}
                >
                    About Task Manager App
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: isDark ? '#b2b2d0' : '#666',
                        maxWidth: 600,
                        mx: 'auto',
                    }}
                >
                    A powerful and intuitive task management tool built with React
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card
                            elevation={isDark ? 0 : 1}
                            sx={{
                                height: '100%',
                                background: isDark 
                                    ? 'rgba(0, 0, 0, 0.3)'
                                    : 'rgba(245, 245, 247, 0.8)',
                                border: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.1)' : 'rgba(108, 92, 231, 0.05)'}`,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    borderColor: 'rgba(108, 92, 231, 0.3)',
                                    boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)',
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#a29bfe',
                                        mb: 1,
                                        fontWeight: 500,
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: isDark ? '#888' : '#666',
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default About;