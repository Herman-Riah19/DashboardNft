import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleLoginPage from './component/LoginType/GoogleLoginPage';
import { AuthProvider } from './context/Context';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<GoogleLoginPage />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;