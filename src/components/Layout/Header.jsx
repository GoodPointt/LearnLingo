import NavBar from '../NavBar/NavBar';

import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      py={3}
      w="100%"
      position={'fixed'}
      height={'80px'}
      zIndex={'10'}
      bg={
        'linear-gradient(180deg, rgba(11,102,147,0.7533514626553747) 24%, rgba(214,209,7,0.4732394178374475) 80%, rgba(217,217,217,0) 100%)'
      }
    >
      <Container
        maxW={{ base: '744px', lg: '1000px', xl: '1176px' }}
        px="12px"
        centerContent
        bgColor="transparent"
        justifyContent="space-between"
        alignItems="center"
        flexDir="row"
      >
        <Flex gap="5em">
          <NavBar />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
