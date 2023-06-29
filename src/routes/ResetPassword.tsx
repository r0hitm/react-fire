import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../firebase";

const MINUTE = 60 * 1000;

export default function ResetPassword() {
    const [count, setCount] = useState(0);

    return (
        <div className="reset-password">
            <h1>Reset Password</h1>
            <form
                method="POST"
                onSubmit={async e => {
                    e.preventDefault();
                    setCount(MINUTE);
                    const interval = setInterval(() => {
                        setCount(count => count - 1000);
                    }, 1000);
                    setTimeout(() => {
                        clearInterval(interval);
                        setCount(0);
                    }, MINUTE);

                    const email = (e.target as HTMLFormElement).email.value;
                    try {
                        console.log("Resetting password...");
                        await resetPassword(email);
                        alert("Check your email to reset your password!");
                    } catch (err) {
                        console.error(err);
                        alert(
                            "Error sending password reset email. Make sure you entered your email correctly."
                        );
                    }
                }}
            >
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-field">
                    <button type="submit" disabled={count > 0}>
                        Send Password Reset Link
                    </button>
                    <p>
                        Wait {Math.floor(count / 1000)} seconds before sending
                        another email.
                    </p>
                    <p>
                        Resetted your password? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
