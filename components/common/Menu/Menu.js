// @components/common/Menu/Menu.js

import React, { useState } from 'react';
import { Box, IconButton, Link, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/* =====================
   Configuración (SSOT)
   ===================== */

const NAVBAR_HEIGHT = '72px';
const NAVBAR_BG = '#ffffff';
const NAVBAR_TEXT_COLOR = '#123456';
const NAVBAR_HOVER_COLOR = '#124ed9';
const NAVBAR_LINK_FONT_SIZE = '1rem';
const NAVBAR_FONT_FAMILY = '"Work Sans", sans-serif';
const NAVBAR_ELEVATION = '0px 2px 8px rgba(0,0,0,0.08)';

/* Contenedor principal del menú */
const NavbarContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  backgroundColor: NAVBAR_BG,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: NAVBAR_HEIGHT,
  boxShadow: NAVBAR_ELEVATION,
  padding: theme.spacing(0, 2),
}));

/* Contenedor de enlaces en desktop */
const LinksContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

/* Estilo de los enlaces */
const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: NAVBAR_TEXT_COLOR,
  fontSize: NAVBAR_LINK_FONT_SIZE,
  fontWeight: 500,
  fontFamily: NAVBAR_FONT_FAMILY,
  position: 'relative',
  transition: 'color 0.3s, transform 0.3s',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: '-4px',
    left: '0',
    backgroundColor: NAVBAR_HOVER_COLOR,
    transition: 'width 0.3s',
  },

  '&:hover': {
    color: NAVBAR_HOVER_COLOR,
    transform: 'translateX(2px)',
    '&::after': {
      width: '100%',
    },
  },
}));

/* Menú hamburguesa en móvil */
const BurgerMenuContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));

/* Overlay cuando se abre el menú móvil */
const MobileMenuOverlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.4)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  justifyContent: 'flex-end',
  zIndex: 2000,
}));

/* Contenedor del menú móvil */
const MobileMenuContainer = styled(Box)(({ theme }) => ({
  width: '70%',
  maxWidth: '280px',
  height: '100%',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

/* Estilo de los enlaces en móvil */
const MobileNavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: NAVBAR_TEXT_COLOR,
  fontSize: '1.1rem',
  fontWeight: 500,
  fontFamily: NAVBAR_FONT_FAMILY,
  marginBottom: theme.spacing(2),
  position: 'relative',
  transition: 'color 0.3s, transform 0.3s',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: '-4px',
    left: '0',
    backgroundColor: NAVBAR_HOVER_COLOR,
    transition: 'width 0.3s',
  },

  '&:hover': {
    color: NAVBAR_HOVER_COLOR,
    transform: 'translateX(2px)',
    '&::after': {
      width: '100%',
    },
  },
}));

export default function Menu({ sections }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Extraer la sección FAQ y colocarla al final
  const faqSection = sections.find((sec) => sec.label.toLowerCase() === 'faq');
  const otherSections = sections.filter((sec) => sec.label.toLowerCase() !== 'faq');
  const orderedSections = [...otherSections, faqSection].filter(Boolean);

  return (
    <NavbarContainer role="navigation" aria-label="Menú principal">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: NAVBAR_FONT_FAMILY,
            fontWeight: 'bold',
            color: NAVBAR_TEXT_COLOR,
            fontSize: '1.5rem',
          }}
        >
          Marketing Médico
        </Typography>
      </Box>

      <LinksContainer aria-label="Enlaces de navegación">
        {orderedSections.map((section, index) => (
          <NavLink key={index} href={section.href} aria-label={`Ir a ${section.label}`}>
            {section.label}
          </NavLink>
        ))}
      </LinksContainer>

      <BurgerMenuContainer>
        <IconButton
          onClick={handleToggleMenu}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </BurgerMenuContainer>

      {isMobile && mobileMenuOpen && (
        <MobileMenuOverlay onClick={handleToggleMenu} aria-hidden={!mobileMenuOpen}>
          <MobileMenuContainer
            onClick={(e) => e.stopPropagation()}
            role="navigation"
            aria-label="Menú móvil"
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton onClick={handleToggleMenu} aria-label="Cerrar menú móvil">
                <CloseIcon />
              </IconButton>
            </Box>

            {orderedSections.map((section, index) => (
              <MobileNavLink
                key={index}
                href={section.href}
                onClick={handleToggleMenu}
                aria-label={`Ir a ${section.label}`}
              >
                {section.label}
              </MobileNavLink>
            ))}
          </MobileMenuContainer>
        </MobileMenuOverlay>
      )}
    </NavbarContainer>
  );
}
