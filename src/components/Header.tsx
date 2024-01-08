import { Box, Image, Container } from '@chakra-ui/react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Box bg='purple.700' py={4} data-testid="header-box">
      <Container maxW='1250px' data-testid="header-container">
        <Link to="/">
          <Image src={Logo}
            alt='Logo'
            data-testid="header-logo"
          >
          </Image>
        </Link>
      </Container>
    </Box>
  );
};

export default Header;
