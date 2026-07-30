import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <h1 style={styles.title}>About Recipe Hub</h1>

        <p style={styles.paragraph}>
          Recipe Hub is a platform where food lovers can discover, create,
          organize, and share delicious recipes. Whether you're preparing a
          quick breakfast or an elaborate dinner, Recipe Hub helps you keep all
          your favorite recipes in one place.
        </p>

        <p style={styles.paragraph}>
          Users can create their own recipes, upload images, save favorite
          recipes, leave reviews, and manage their personal recipe collection
          through a secure account.
        </p>

        <h2 style={styles.heading}>Our Mission</h2>

        <p style={styles.paragraph}>
          Our mission is to make cooking more enjoyable by providing an easy-to-use
          platform where everyone can explore new recipes and share their own
          cooking experiences with others.
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
    marginTop: "35px",
    marginBottom: "15px",
    color: "#4CAF50",
  },

  paragraph: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "18px",
  },
};

export default AboutPage;