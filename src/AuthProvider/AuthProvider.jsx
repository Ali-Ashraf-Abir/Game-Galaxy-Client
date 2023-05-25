import { createContext, useEffect, useState, } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)

import app from "../Firebase/Firebase.config";
import { onAuthStateChanged } from "firebase/auth";








const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState(null)
    const [loginError, setLoginError] = useState(null)
    const [registrationSuccess, SetRegistrationSuccess] = useState(null)
    const [loading, setLoading] = useState(true)
    const [toydetail, setToyDetail] = useState([])
    const [deleted, setDeleted] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [toys, Settoys] = useState([])
    const [category, setCategory] = useState('category1')


    useEffect(() => {

        fetch('https://game-galaxy-server-ali-ashraf-abir.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {

                Settoys(data)

            })



    }, [])
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user)
                setLoading(false)
                // ...
            }
            return () => {
                unsubscribe()
            }
        });
    }, [])


    const AuthInfo = {


        auth,
        setUser,
        setRegisterError,
        registerError,
        loginError,
        setLoginError,
        user,
        registrationSuccess,
        SetRegistrationSuccess,
        setLoading,
        loading, toydetail, setToyDetail,
        deleted, setDeleted,
        updated, setUpdated,
        toys, Settoys

    }

    return (
        <AuthContext.Provider

            value={AuthInfo}

        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;