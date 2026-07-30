import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <h1 style={styles.title}>Privacy Policy</h1>

        <p style={styles.paragraph}>
          Your privacy is important to us. Recipe Hub collects only the
          information necessary to provide and improve our services.
        </p>

        <h2 style={styles.heading}>Information We Collect</h2>

        <p style={styles.paragraph}>
          We collect information you provide when creating an account, such as
          your name, email address, recipes, reviews, and favorite recipes.
        </p>

        <h2 style={styles.heading}>How We Use Your Information</h2>

        <p style={styles.paragraph}>
          Your information is used to manage your account, personalize your
          experience, allow you to create and save recipes, and improve the
          functionality of Recipe Hub.
        </p>

        <h2 style={styles.heading}>Data Security</h2>

        <p style={styles.paragraph}>
          We take reasonable measures to protect your personal information.
        </p>

        <h2 style={styles.heading}>Changes to This Policy</h2>

        <p style={styles.paragraph}>
          This Privacy Policy may be updated from time to time. Any changes will
          be reflected on this page.
        </p>
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
    marginTop: "30px",
    marginBottom: "15px",
  },

  paragraph: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
  },
};

export default PrivacyPolicyPage;