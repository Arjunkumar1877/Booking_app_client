import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";

// import { useRef, useState } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <h1>Home page </h1>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
