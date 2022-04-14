import styles from './header.module.css';

const Header = () => (
  <header className={styles.topBar}>
    <ul>
      <li className={styles.heading}>Crypto Price</li>
    </ul>
  </header>
);

export default Header;
