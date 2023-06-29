import { useContext } from "react";
import AuthContext from "../AuthContext";
import { logout } from "../firebase";

export default function App() {
    const user = useContext(AuthContext);

    return (
        <div className="app">
            <h1>App</h1>
            <p>Welcome, {user?.email}!</p>
            <p>
                This is a protected route. If you are not logged in, you will be
                redirected to the login page. If you are logged in, you will see
                this page.
            </p>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}
