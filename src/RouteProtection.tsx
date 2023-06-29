/**
 * Two components that will be used for defining the certain routes that will be protected
 */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

function ProtectedRoute({ children }: { children: any }) {
    const user = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

function UnauthenticatedRoute({ children }: { children: any }) {
    const user = useContext(AuthContext);

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export { ProtectedRoute, UnauthenticatedRoute };