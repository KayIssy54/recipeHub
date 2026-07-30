import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <h1 style={styles.title}>Contact Us</h1>

        <p style={styles.paragraph}>
          We'd love to hear from you! Whether you have feedback, questions,
          feature suggestions, or you've found a bug, feel free to reach out.
        </p>

        <div style={styles.card}>
          <h2 style={styles.heading}>Get in Touch</h2>

          <p>
            <strong>Email:</strong> support@recipehub.com
          </p>

          <p>
            <strong>Contact:</strong> 0113671033
                                      
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.heading}>Feedback</h2>

          <p style={styles.paragraph}>
            Your ideas help improve Recipe Hub. We appreciate every suggestion
            that helps make cooking and recipe sharing easier for everyone.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    padding: "50px 0",
    maxWidth: "900px",
    margin: "0 auto",
  },

  title: {
    fontSize: "42px",
    marginBottom: "25px",
    color: "#333",
  },

  heading: {
    color: "#4CAF50",
    marginBottom: "15px",
  },

  paragraph: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "20px",
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    marginTop: "25px",
  },
};

export default ContactPage;