import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from '../../common/data/navItems';
import './NavBar.css';

const listAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ease: 'easeOut',
      duration: 0.3,
    },
  }),
};

const NavBar = () => {
  console.log(navItems);
  return (
    <Flex
      as={motion.ul}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      gap={5}
      listStyleType="none"
    >
      {navItems.map(({ name, path }, index) => (
        <Box
          as={motion.li}
          variants={listAnimation}
          custom={index + 1}
          key={name}
        >
          <NavLink className="navLink" to={path}>
            {name}
          </NavLink>
        </Box>
      ))}
    </Flex>
  );
};

export default NavBar;
