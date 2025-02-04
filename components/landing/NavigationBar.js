/* /components/common/NavigationBar.js */
import React, { useState } from 'react';
import { Box, IconButton, Link, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NAVBAR_HEIGHT = '80px'; /* Ajustado para mayor altura */
const NAVBAR_BG = '#ffffff';
const NAVBAR_TEXT_COLOR = '#3f51b5';
const NAVBAR_HOVER_COLOR = '#ff9800';
const NAVBAR_FONT_FAMILY = '"Work Sans", sans-serif';
const NAVBAR_ELEVATION = '0 4px 10px rgba(0,0,0,0.1)';

const NavbarContainer = styled(Box)(() => ({
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 1100,
  width: '100%',
  backgroundColor: NAVBAR_BG,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: NAVBAR_HEIGHT,
  boxShadow: NAVBAR_ELEVATION,
  padding: '0 2rem',
}));

const LinksContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: NAVBAR_TEXT_COLOR,
  fontWeight: 600,
  fontFamily: NAVBAR_FONT_FAMILY,
  position: 'relative',
  transition: 'color 0.3s, transform 0.3s',
  fontSize: '1.2rem',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '3px',
    bottom: '-4px',
    left: '0',
    backgroundColor: NAVBAR_HOVER_COLOR,
    transition: 'width 0.3s',
  },
  '&:hover': {
    color: NAVBAR_HOVER_COLOR,
    transform: 'translateX(4px)',
    '&::after': {
      width: '100%',
    },
  },
}));

const BurgerMenuContainer = styled(Box)(() => ({
  display: 'none',
  '@media (max-width: 900px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));

const MobileMenuOverlay = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  justifyContent: 'flex-end',
  zIndex: 1200,
}));

const MobileMenuContainer = styled(Box)(() => ({
  width: '70%',
  maxWidth: '300px',
  height: '100%',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
}));

const MobileNavLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: NAVBAR_TEXT_COLOR,
  fontSize: '1.2rem',
  fontWeight: 600,
  fontFamily: NAVBAR_FONT_FAMILY,
  marginBottom: '1.5rem',
  position: 'relative',
  transition: 'color 0.3s, transform 0.3s',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '3px',
    bottom: '-4px',
    left: '0',
    backgroundColor: NAVBAR_HOVER_COLOR,
    transition: 'width 0.3s',
  },
  '&:hover': {
    color: NAVBAR_HOVER_COLOR,
    transform: 'translateX(4px)',
    '&::after': {
      width: '100%',
    },
  },
}));

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Inicio', href: '#hero-section' },
    { label: 'Nosotros', href: '#about-section' },
    { label: 'Servicios', href: '#services-section' },
    { label: 'Planes', href: '#pricing' },
    { label: 'FAQ', href: '#faq-section' },
    { label: 'Contacto', href: '#footer-section' },
  ];

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <Typography
        variant="h5"
        sx={{
          fontFamily: NAVBAR_FONT_FAMILY,
          fontWeight: 700,
          color: NAVBAR_TEXT_COLOR,
          fontSize: '1.8rem',
        }}
      >
        MedMarketing
      </Typography>

      <LinksContainer>
        {navItems.map((item, index) => (
          <NavLink key={index} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </LinksContainer>

      <BurgerMenuContainer>
        <IconButton onClick={toggleMenu}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </BurgerMenuContainer>

      {isMobile && mobileMenuOpen && (
        <MobileMenuOverlay onClick={toggleMenu}>
          <MobileMenuContainer onClick={(e) => e.stopPropagation()}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton onClick={toggleMenu}>
                <CloseIcon />
              </IconButton>
            </Box>
            {navItems.map((item, index) => (
              <MobileNavLink key={index} href={item.href} onClick={toggleMenu}>
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenuContainer>
        </MobileMenuOverlay>
      )}
    </NavbarContainer>
  );
}
