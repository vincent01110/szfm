import './App.css';
import { Route, Routes } from "react-router-dom";
import AdminSignIn from "./components/admin/admin-signin/AdminSignIn";
import ProductAdd from './components/admin/admin-products/ProductAdd';
import ProductEdit from './components/admin/admin-products/ProductEdit';
import DashBoard from "./components/admin/admin-dashboard/DashBoard";
import { RequireAuth } from "react-auth-kit";
import { Navigate } from 'react-router-dom';
import CollectionAdd from './components/admin/admin-collections/collections-add-edit/CollectionAdd';
import HomePage from './components/app/home/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}>

      </Route>
      <Route path="/admin">
        <Route index element={<Navigate replace to="/admin/dashboard"/>} />
        <Route path="signin" element={<AdminSignIn />} />
        <Route path="dashboard" element={<RequireAuth loginPath='/admin/signin'>
            <DashBoard />
        </RequireAuth>} />
        <Route path="dashboard/products/add" element={<RequireAuth loginPath='/admin/signin'>
            <ProductAdd />
        </RequireAuth>} />
        <Route path="dashboard/products/edit/:id" element={<RequireAuth loginPath='/admin/signin'>
            <ProductEdit />
        </RequireAuth>} />
        <Route path="dashboard/collections/add" element={<RequireAuth loginPath='/admin/signin'>
            <CollectionAdd />
        </RequireAuth>} />

    </Route>
    </Routes>
  );
}

export default App;
