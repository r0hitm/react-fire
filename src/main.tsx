import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./AuthProvider.tsx";

// Routes:
import App from "./routes/App.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import ResetPassword from "./routes/ResetPassword.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import { ProtectedRoute, UnauthenticatedRoute } from "./RouteProtection.tsx";

// actions for the routes:
import { registerAction, loginAction } from "./actions.ts";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <App />
                </ProtectedRoute>
            ),
        },
        {
            path: "/login",
            element: (
                <UnauthenticatedRoute>
                    <Login />
                </UnauthenticatedRoute>
            ),
            action: loginAction,
        },
        {
            path: "/register",
            element: (
                <UnauthenticatedRoute>
                    <Register />
                </UnauthenticatedRoute>
            ),
            action: registerAction,
        },
        {
            path: "/reset-password",
            element: (
                <UnauthenticatedRoute>
                    <ResetPassword />
                </UnauthenticatedRoute>
            ),
        },
        {
            // Pathless route is visited when no other route matches:
            element: <ErrorPage />,
        },
    ],
    { basename: "/react-fire" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
