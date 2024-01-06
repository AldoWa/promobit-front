import { Box, Image } from '@chakra-ui/react'
import Logo from '../assets/logo.svg';
import { Container } from '@chakra-ui/react';


const Header: React.FC = () => {
  return (
    <>
      <Box bg='purple.700' py={4} data-testid="header-box">
        <Container maxW='1250px' data-testid="header-container">
          <Image src={Logo}
            alt='Logo'
            data-testid="header-logo"
          >
          </Image>
        </Container>
      </Box>
    </>
  );
};

export default Header;
