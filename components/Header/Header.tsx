import Image from 'next/image';
import { Container } from '@mantine/core';
import classes from './Header.module.css';

const Header = () => {
  const height = 40;
  const ratio = 298 / 88;
  const width = height * ratio;

  return (
    <header
      className={classes.header}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        width: '100%',
      }}
    >
      <Container size="lg" className={classes.inner}>
        <Image src="/parliament_logo.png" alt="Mantine" width={width} height={height} />
      </Container>
    </header>
  );
};

export default Header;
