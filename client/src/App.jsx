import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Toaster } from 'react-hot-toast';

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/:id/edit" element={<UserForm />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;