import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import authService from "./services/authService";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await authService.getCurrentUser();
      setUser(response.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                user ? <Navigate to="/items" /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/login"
              element={
                user ? <Navigate to="/items" /> : <Login setUser={setUser} />
              }
            />
            <Route
              path="/register"
              element={
                user ? <Navigate to="/items" /> : <Register setUser={setUser} />
              }
            />
            <Route
              path="/items"
              element={user ? <ItemList /> : <Navigate to="/login" />}
            />
            <Route
              path="/items/new"
              element={user ? <ItemForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/items/edit/:id"
              element={user ? <ItemForm /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
