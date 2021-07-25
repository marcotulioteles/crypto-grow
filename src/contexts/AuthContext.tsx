import { createContext } from 'react'
import firebase from "firebase/app";

export const AuthContext = createContext<firebase.User | null>(null);