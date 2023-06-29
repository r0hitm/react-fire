import { Form, Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <Form method="POST">
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit">Login</button>
                </div>
            </Form>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
            <p>
                Forgot your password?{" "}
                <Link to="/reset-password">Reset Password</Link>
            </p>
        </div>
    );
}
