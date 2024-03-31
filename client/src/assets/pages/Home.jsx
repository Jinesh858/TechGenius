import './Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to TechGenius</h1>
          <p>Your Partner in Innovation</p>
          <a href="#features" className='button'>Discover More</a>
        </div>
        <img src="images/home.png" alt="Company" className="hero-image" />
      </section>
      <h1 id='features'>Features</h1>
      <section className="features-section" >
      
        <div className="feature">
          <h2>Custom Solutions</h2>
          <p>From concept to deployment, we craft custom software solutions tailored to your business needs.</p>
        </div>
        <div className="feature">
          <h2>User-Centric Design</h2>
          <p>Our designs focus on providing seamless user experiences, ensuring satisfaction and engagement.</p>
        </div>
        <div className="feature">
          <h2>Scalability</h2>
          <p>Our solutions are built to scale, adapting to your growing business requirements.</p>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <img src="/images/test1.png" alt="Testimonial 1" className="testimonial-image" />
          <p>"TechGenius exceeded our expectations with their professionalism and expertise. Highly recommend!"</p>
          <span>- John Doe, CEO at XYZ Corp</span>
        </div>
        <div className="testimonial">
          <img src="/images/test2.png" alt="Testimonial 2" className="testimonial-image" />
          <p>"Working with TechGenius was a game-changer for our business. Their solutions transformed our operations."</p>
          <span>- Jane Smith, Founder of ABC Startup</span>
        </div>
      </section>
    </div>
  );
}
