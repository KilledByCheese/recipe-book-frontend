import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login.component";
import Register from "./components/auth/Register.component";
import Home from "./components/Home";
import RecipeNavbar from "./components/layout/RecipeNavbar.component";
import UserHome from "./components/recipe/UserHome";

function App() {
  return (
    <div>
      <RecipeNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/userHome" element={<UserHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
