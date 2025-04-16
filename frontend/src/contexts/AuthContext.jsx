import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 토큰 만료 여부 확인
    const isTokenExpired = (token) => {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            const now = Date.now() / 1000;
            return payload.exp < now;
        } catch (e) {
            return true; // 잘못된 토큰이면 만료된 것으로 처리
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            if(isTokenExpired(token)){
                logout(); // 만료되었으면 로그아웃 처리
            } else{
                setIsLoggedIn(true);
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;