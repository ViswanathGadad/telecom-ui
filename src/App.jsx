import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./login/Home";
import { Dashboard } from "./dashboard/Dashboard";
import { Header } from "./common/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(null);
  const [enroll, setEnroll] = useState(false);

  return (
    <BrowserRouter>
      <Header userId={userId} setUserId={setUserId} showEnroll={setEnroll} />
      <main>
        <Routes>
          <Route path="/" element={<Home setUserId={setUserId} />} />
          <Route
            path="/dashboard"
            element={<Dashboard userId={userId} showEnroll={enroll} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
