import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    // useState(null); => {id: 1, fistName:'John', lastName : 'Doe', profileImage:""}
    //const login =(emailOrMobile, Password) => {
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        if (getAccessToken()) {
            axios.get('/auth/me').then(res => {
                setAuthUser(res.data.user);
            })
                .finally(() => {
                    setInitialLoading(false);
                });
        } else {
            setInitialLoading(false);
        }
    }, []);

    const login = async credential => {
        // try {
        const res = await axios.post('/auth/login', credential);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
        // } catch (err) {
        //     console.log(err);
        // }
    };

    const register = async registerInputObject => {
        const res = await axios.post('/auth/register', registerInputObject);
        console.log(res);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    const logout = () => {
        removeAccessToken();
        setAuthUser(null);
    };

    const updateProfile = async (data) => {
        const res = await axios.patch('/user', data);
        setAuthUser({ ...authUser, ...res.data })
    }

    return (
        <AuthContext.Provider value={{
            login,
            authUser,
            initialLoading,
            register,
            logout,
            updateProfile
        }}>
            {children}
        </AuthContext.Provider>
    );
}

