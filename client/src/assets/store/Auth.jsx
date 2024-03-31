import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context object
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    //pehle user mein kuch nhi hai isliye empty string hai
    const [user,setUser] = useState("");
    //kyonki hum data array format mein chahiye isliye [] use kiya hai 
    const [services,setServices] = useState([]);

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('token', serverToken);
        setToken(serverToken);
    };

    const isLoggedIn = !!token;
    console.log(isLoggedIn);

    const LogoutUser = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    /// JWT AUTHENTICTION - to get the currently LOGGEDIN user data 

    const userAuthentication = async() =>{

        try{

            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                },
            });

            if(response.ok){
                try{

                    const data  = await response.json();
                    setUser(data.userData);

                }
                catch(error){
                    console.error("Error fetching user data");

                }
            }

        }
        catch(error){
            console.error("Error fetching user data");
        }
    }



    //to fetch the services fron the database

    const getServices = async() => {
        try{
            const response  = await fetch("http://localhost:5000/api/data/service",{
                method:"GET",
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        }
        catch(error){
            console.log(`services front end error: ${error}`);

        }
    }





    useEffect(() => {
        getServices();
        userAuthentication();
    },[]);
   

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user , services }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access the Auth context
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
