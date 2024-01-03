import { Box, Image } from '@chakra-ui/react'
import Logo from '../assets/logo.svg';
import { Container } from '@chakra-ui/react';


const Header: React.FC = () => {
  return (
    <>
      <Box bg='purple.700' py={4}>
        <Container maxW='1214px'>
          <Image src={Logo}
            aria-label='Logo'
            alt='Logo'>
          </Image>
        </Container>
      </Box>
    </>
  );
};

export default Header;
