import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import { Provider } from "react-redux";
import { store } from "./redux-store/store.js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter></Provider>
    </ClerkProvider>
  // </StrictMode>,
);
