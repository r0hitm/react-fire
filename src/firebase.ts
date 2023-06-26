/**
 * Firebase SDK config plus custom function wrappers for auth
 */

// Import the functions you need from the SDKs you need
// See: https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import {
    UserCredential, // For type checking
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB29c9smousSCAM2GJPcwY5sWpYHsQ7PH4",
    authDomain: "react-fire-8d5bd.firebaseapp.com",
    projectId: "react-fire-8d5bd",
    storageBucket: "react-fire-8d5bd.appspot.com",
    messagingSenderId: "729489924237",
    appId: "1:729489924237:web:0f7bdd1289f02f37f702c4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * Create a new user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>} - A promise that resolves with a UserCredential object on success.
 */
const register = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in an existing user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>} - A promise that resolves with a UserCredential object on success.
 */
const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Send a password reset email to the user
 * @param {string} email
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
const resetPassword = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
};

/**
 * Sign out the current user
 * @returns {Promise<void>} - A promise that resolves when the user is signed out.
 */
const logout = (): Promise<void> => {
    return signOut(auth);
};

export { auth, register, login, resetPassword, logout };
