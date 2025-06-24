import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AdminLayout from './components/Admin/AdminLayout';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Noticeboard from './pages/Noticeboard';
import Programs from './pages/Programs';
import Dashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users';
import AdminEvents from './pages/Admin/Events';
import Notices from './pages/Admin/Notices';
import AdminPrograms from './pages/Admin/Programs';
import Analytics from './pages/Admin/Analytics';
import Settings from './pages/Admin/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes with role-based protection */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="notices" element={<Notices />} />
          <Route path="programs" element={<AdminPrograms />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="events" element={<Events />} />
          <Route path="noticeboard" element={<Noticeboard />} />
          <Route path="programs" element={<Programs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;