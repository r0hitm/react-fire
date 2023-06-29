import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes:
import App from "./routes/App.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import ResetPassword from "./routes/ResetPassword.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";

// actions for the routes:
import { registerAction, loginAction } from "./actions.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
        action: loginAction,
    },
    {
        path: "/register",
        element: <Register />,
        action: registerAction,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
    {
        // Pathless route is visited when no other route matches:
        element: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
