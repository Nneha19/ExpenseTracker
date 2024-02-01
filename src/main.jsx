import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./components/theme.js";
import GlobalState from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </GlobalState>
);
