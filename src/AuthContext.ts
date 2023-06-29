import { createContext } from "react";
import { User } from "firebase/auth";

const AuthContext = createContext<null | User>(null);

export default AuthContext;
