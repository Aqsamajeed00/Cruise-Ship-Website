// import Navbar from '../components/Navbar';
//  import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <main className="main">
        <h1>Contact Sea Escape</h1>
        <p>We’d love to hear from you! Please fill out the form below:</p>
        
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

