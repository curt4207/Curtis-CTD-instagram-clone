import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout';

function App() {
  return (
    <PageLayout>
      <Routes>
         {/* The following route is for the homepage */}
        <Route path='/' element={<HomePage />} />

         {/* The following route is for the authentication page */}
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;