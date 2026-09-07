  import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
  import { createTheme } from '@mui/material/styles';

  const ThemeContext = createContext();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6c5ce7',
        light: '#a29bfe',
        dark: '#4a3cb5',
      },
      secondary: {
        main: '#ff6b6b',
        light: '#ff8787',
        dark: '#cc5555',
      },
      background: {
        default: '#0a0a0a',
        paper: '#1a1a2e',
      },
      text: {
        primary: '#e0e0e0',
        secondary: '#b2b2d0',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Helvetica", sans-serif',
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6c5ce7',
        light: '#a29bfe',
        dark: '#4a3cb5',
      },
      secondary: {
        main: '#ff6b6b',
        light: '#ff8787',
        dark: '#cc5555',
      },
      background: {
        default: '#f0f0f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#1a1a2e',
        secondary: '#4a4a6a',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Helvetica", sans-serif',
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  const getInitialTheme = () => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme !== null) {
        return JSON.parse(savedTheme);
      }
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
    }
    return false;
  };

  export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(getInitialTheme);

    const toggleTheme = () => {
      setIsDark(!isDark);
    };

    useEffect(() => {
      try {
        localStorage.setItem('theme', JSON.stringify(isDark));
      } catch (error) {
        console.error('Error saving theme to localStorage:', error);
      }
    }, [isDark]);

    const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };