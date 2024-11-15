import React from "react";
import AllRoutes from "./Allroutes/Allroutes";
import "./App.css";
import { AuthProvider } from "./auth/AuthContext"

function App() {
  return (
    <>
      <AuthProvider>
      <AllRoutes />
    </AuthProvider>
      
    </>
  );
}

export default App;
