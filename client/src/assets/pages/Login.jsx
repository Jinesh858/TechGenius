import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/Auth";
import './Login.css';
import { toast } from 'react-toastify';


const URL = 'http://localhost:5000/api/auth/login';


export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { storeTokenInLS } =  useAuth();

   // Handling the input values
   const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
};

    // Handling form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            console.log("res from server ", res_data);
            console.log("login form", response);
    
            if (response.ok) {
              
                //store token in Local Storage
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
                toast.success("Login Successful");
                navigate("/");
            } else {
                toast.error(res_data.extraDetails? res_data.extraDetails:res_data.message);
            }
        } catch (error) {
            console.log("login", error);
            alert("Error from login: " + error.message);

        }
    };
    

    return (
        <section className="login-section">
            <div className="container">
            <div className="login-image">
                    <img src="/images/login-bg.png" alt="Login" />
                </div>
                <div className="login-form">
                    <h1 className="main-heading">Login Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn-submit">Login</button>
                    </form>
                </div>
                
            </div>
        </section>
    );
}
