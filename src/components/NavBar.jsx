import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img 
          src="https://via.placeholder.com/100x50?text=PCmundo" 
          alt="Logo de PCmundo" 
          style={styles.logo}
        />
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#inicio" style={styles.link}>Inicio</a></li>
        <li><a href="#productos" style={styles.link}>Productos</a></li>
        <li><a href="#contacto" style={styles.link}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#282c34',
    padding: '10px 20px',
  },
  logoContainer: {
    flexGrow: 1,
  },
  logo: {
    height: '50px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
};

export default NavBar;