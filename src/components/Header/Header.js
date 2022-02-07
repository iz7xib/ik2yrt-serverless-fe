import Container from 'components/Container';

import styles from './Header.module.scss';

const Header = ({ children, isHome }) => {
  return (
    <header className={styles.header} data-home={isHome}>
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
