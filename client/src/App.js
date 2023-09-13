import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import Products from 'scenes/Products'
import Customers from 'scenes/Customers'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<Navigate to="/dashboard" replace />  } />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/products" element={<Products />} />
               <Route path="/customers" element={<Customers />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
