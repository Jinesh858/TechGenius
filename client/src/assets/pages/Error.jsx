import { NavLink } from "react-router-dom"
import './Error.css';

export const Error = () => {
    return(
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>
                    Oops! It seems like the page you are trying to access the page doesn't exist .
                    If you believe there's an issue , feel free to report it, and we will
                    look into it.
                </p>
                <div className="btns">
                    <NavLink to='/'>return Home</NavLink>
                    <NavLink to='/contact'>report Problem</NavLink>
                </div>
            </div>
        </section>
    )
}