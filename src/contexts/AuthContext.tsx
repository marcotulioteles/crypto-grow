import { createContext, ReactNode, useState, useContext, useEffect, SetStateAction } from "react"
import { auth } from '../firebase/firebaseSetup'
import firebase from 'firebase/app'

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  currentUser: firebase.User | null;
  setCurrentUser: React.Dispatch<SetStateAction<firebase.User | null>>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe;
  }, [])

  return(
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      { !loading && children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}