import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: 'auto',
                background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
                borderTop: '1px solid rgba(108, 92, 231, 0.2)',
                textAlign: 'center',
            }}
        >
            <Container>
                <Typography
                    variant="p"
                    sx={{
                        color: '#666',
                        display: 'block',
                        mt: 0.5,
                    }}
                >
                  2026&copy; <strong><a href='https://github.com/FalakPatel213' target='_blank' rel="noopener noreferrer" style={{color:'#fff', textDecoration:'none'}}>FalakPatel213</a></strong>
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;