import {
  Routes,
  Route,
} from "react-router-dom";

import Register from "../pages/Register";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Movies from "../pages/Movies";

import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Register />}
      />

      <Route
        path="/category"
        element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/movies"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;