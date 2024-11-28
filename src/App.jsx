// import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";
import React from 'react'

const App = () => {
  return (
          <>
           <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sign" element={<Sign />} />
            </Routes>
          </>
  )
}

export default App
