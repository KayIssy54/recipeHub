function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.content}>
        <p>© 2026 Recipe Hub</p>
        <div style={styles.links}>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#F8F9FA',
    padding: '20px 0',
    marginTop: '60px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
};

export default Footer;