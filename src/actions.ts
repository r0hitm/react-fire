/**
 * actions are functions that are called by the react-router-dom when <Form /> components are submitted.
 * The router sends the form to the action as a Request object which can be used to access the form data
 * and perform tasks such as API calls.
 */
import { redirect } from "react-router-dom";

import { register, login } from "./firebase";

export const registerAction = async ({ request }: { request: Request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
        await register(data.email.toString(), data.password.toString());
        return redirect("/");
    } catch (error: any) {
        console.log(error);
        alert(error.message);
        return null;
    }
};

export const loginAction = async ({ request }: { request: Request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
        await login(data.email.toString(), data.password.toString());
        return redirect("/");
    } catch (error: any) {
        console.log(error);
        alert(error.message);
        return null;
    }
};
