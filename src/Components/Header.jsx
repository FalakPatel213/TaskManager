import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { CheckBox, Home, Info } from '@mui/icons-material';

function Header(props) {
    const { head = "Task Manager" } = props;

    return (
        <AppBar position="sticky" elevation={0} sx={{ 
            background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
            borderBottom: '1px solid rgba(108, 92, 231, 0.2)',
        }}>
            <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography
                    variant="h5"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: 'white',
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

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        component={Link}
                        to="/"
                        color="inherit"
                        startIcon={<Home />}
                        sx={{
                            borderRadius: 2,
                            '&:hover': {
                                background: 'rgba(108, 92, 231, 0.2)',
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
                            '&:hover': {
                                background: 'rgba(108, 92, 231, 0.2)',
                            },
                        }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;