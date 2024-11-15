import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="807264241801-pqbudnduceo9pi6hc6jmbcqndnr54ma4.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
    </ChakraProvider>
    
  </StrictMode>
);
