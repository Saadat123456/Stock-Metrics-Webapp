import BackButton from './back-button';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.topBar}>
    <BackButton />
    <ul style={{ width: '100%' }}>
      <li className={styles.heading}>Crypto Price</li>
    </ul>
  </header>
);

export default Header;
