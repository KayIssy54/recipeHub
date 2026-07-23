import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <Navbar />

      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Login to continue to Recipe Hub</p>

          <form style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Enter your password"
              style={styles.input}
            />

            <button type="submit" style={styles.loginBtn}>
              Login
            </button>
          </form>

          <div style={styles.links}>
            <a href="#" style={styles.forgot}>
              Forgot Password?
            </a>

            <p>
              Don't have an account?{' '}
              <Link to="/signup" style={styles.signupLink}>
                Sign Up
              </Link>
            </p>
          </div>
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
    maxWidth: '420px',
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
  input: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  loginBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '14px',
    fontSize: '16px',
    borderRadius: '12px',
  },
  links: {
    marginTop: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  forgot: {
    color: '#FF9800',
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: '600',
  },
};

export default LoginPage;