import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/Auth";
import { toast } from 'react-toastify';
import './Register.css';

const URL = 'http://localhost:5000/api/auth/register';

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth(); 

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
    
            if (response.ok) {
                // Store token in Local Storage using the correct function
                storeTokenInLS(res_data.token);
                setUser({ username:"", email: "", phone:"", password: "" });
                toast.success("Registration Successful");
                navigate("/");
            } else {
                // Display error message to the user
                toast.error(res_data.extraDetails? res_data.extraDetails:res_data.message);
            }
        } catch (error) {
            console.log("registration", error);
            // Display error message to the user
            alert("Error from Registration: " + error.message);
        }
    };
    

    return (
        <section className="registration-section">
            <div className="registration-container">
                <div className="registration-image">
                    <img src="/images/register.png" alt="Registration" />
                </div>
                <div className="registration-form">
                    <h1>Registration Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" required autoComplete="off" value={user.username} onChange={handleInput} placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn-submit">Register Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
