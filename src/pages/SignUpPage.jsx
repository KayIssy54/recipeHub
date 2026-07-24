import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <>
      <Navbar />

      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>
            Join Recipe Hub and start sharing your recipes
          </p>

          <form style={styles.form}>
            <div style={styles.row}>
              <input
                type="text"
                placeholder="First Name"
                style={styles.input}
              />

              <input
                type="text"
                placeholder="Last Name"
                style={styles.input}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              style={styles.input}
            />

            <button type="submit" style={styles.createBtn}>
              Create Account
            </button>
          </form>

          <p style={styles.loginText}>
            Already have an account?{' '}
            <Link to="/login" style={styles.loginLink}>
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F8F9FA',
    padding: '40px 20px',
  },
  card: {
    width: '100%',
    maxWidth: '520px',
    background: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '32px',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  row: {
    display: 'flex',
    gap: '16px',
  },
  input: {
    flex: 1,
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  createBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '14px',
    fontSize: '16px',
    borderRadius: '12px',
  },
  loginText: {
    textAlign: 'center',
    marginTop: '20px',
  },
  loginLink: {
    color: '#4CAF50',
    fontWeight: '600',
  },
};

export default SignUpPage;