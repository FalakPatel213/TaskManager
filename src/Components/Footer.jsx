import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from './ThemeContext';

function Footer() {
    const { isDark } = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: 'auto',
                background: isDark
                    ? 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f5f5f7 50%, #e8e8f0 100%)',
                borderTop: `1px solid ${isDark ? 'rgba(108, 92, 231, 0.2)' : 'rgba(108, 92, 231, 0.1)'}`,
                textAlign: 'center',
            }}
        >
            <Container>
                <Typography
                    variant="p"
                    sx={{
                        color: isDark ? '#666' : '#888',
                        display: 'block',
                        mt: 0.5,
                    }}
                >
                  2026&copy; <strong><a href='https://github.com/FalakPatel213' target='_blank' rel="noopener noreferrer" style={{color: isDark ? '#fff' : '#1a1a2e', textDecoration:'none'}}>FalakPatel213</a></strong>
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;