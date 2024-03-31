import { useState, useEffect } from "react";
import "./Contact.css";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';


const URL = 'http://localhost:5000/api/form/contact';

const defaultContactFormData = {
  username:"",
  email:"",
  message:"",
};


export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userDataLoaded, setUserDataLoaded] = useState(false); // Track whether user data is loaded
  const { user } = useAuth();

  useEffect(() => {
    // Check if user data is loaded and user exists
    if (user && !userDataLoaded) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserDataLoaded(true); // Mark user data as loaded
    }
  }, [user, userDataLoaded]); // Run effect when user or userDataLoaded changes

  // Handling the input values
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
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
            body: JSON.stringify(contact),
        });

        console.log("Contact Form", response);

        if (response.ok) {
      
            setContact(defaultContactFormData);
            const res_data = await response.json();
            console.log("res from server ", res_data);
            toast.success("Message sent Successfully");
        } else {
            // Display error message to the user
            const error = await response.json();
            alert("Error from Contact Form: " + error.message);
        }
    } catch (error) {
        console.log("contact", error);
        // Display error message to the user
        alert("Error from Contact Form: " + error.message);
    }
};


  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img src="/images/contact.png" alt="Contact" />
        </div>
        <div className="contact-form">
          <h1>Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                value={contact.message}
                onChange={handleInput}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.99972683276!2d72.868348172693!3d19.016278977086476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711615531209!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
