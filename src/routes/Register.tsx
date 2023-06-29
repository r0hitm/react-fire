import { Form, Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <h1>Register</h1>
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
                    <label htmlFor="password-confirm">Confirm Password</label>
                    <input
                        type="password"
                        name="password-confirm"
                        id="password-confirm"
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit">Register</button>
                </div>
            </Form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}
