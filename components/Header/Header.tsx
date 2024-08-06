import Image from 'next/image';
import { Container } from '@mantine/core';
import classes from './Header.module.css';

const Header = () => {
  const height = 40;
  const ratio = 298 / 88;
  const width = height * ratio;

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Image src="/parliament_logo.png" alt="Mantine" width={width} height={height} />
      </Container>
    </header>
  );
};

export default Header;
