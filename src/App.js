import './App.css';
import { Route, Routes } from "react-router-dom";
import AdminSignIn from "./components/admin/admin-signin/AdminSignIn";
import DashBoard from "./components/admin/admin-dashboard/DashBoard";
import { RequireAuth } from "react-auth-kit";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/admin">
        <Route index element={<Navigate replace to="/admin/dashboard"/>} />
        <Route path="signin" element={<AdminSignIn />} />
        <Route path="dashboard" element={<RequireAuth loginPath='/admin/signin'>
            <DashBoard />
        </RequireAuth>} />
    </Route>
    </Routes>
  );
}

export default App;
