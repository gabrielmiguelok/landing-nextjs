'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Link,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { socialNetworksOptions } from '@utils/socialNetworksOptions';

/* ========================================
   Configuración Principal (SSOT)
   ========================================
   Aquí se definen todas las variables y elementos de configuración.
   Modifica estos valores para personalizar el footer.
*/

/** Datos de la marca */
const BRAND_CONFIG = {
  name: 'Synara',
  logoSrc: '/logo.svg', // Ruta del logo
  description:
    'Impulsa la visibilidad de tu práctica médica en línea, atrae pacientes potenciales y mejora tu reputación digital con estrategias de marketing especializadas en el sector salud.',
};

/** Texto principal y llamadas a la acción */
const TEXT_CONFIG = {
  connectPhrase: '¿Tienes dudas o buscas una estrategia a tu medida?',
  ctaButton: 'Contáctanos',
  rightsReserved: `© ${new Date().getFullYear()} Synara. Todos los derechos reservados.`,
  privacyPolicy: 'Política de Privacidad',
  termsOfService: 'Términos de Servicio',
};

/**
 * URLs de las redes sociales apuntando a /synara.tech
 * Ajusta los handles si difieren por plataforma.
 */
const SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/61570058202687',
  instagram: 'https://www.instagram.com/synara.tech',
  linkedin: 'https://www.linkedin.com/company/synaratech',
  twitter: 'https://www.x.com/synaratech',
  tiktok: 'https://www.tiktok.com/@synaratech',
  youtube: 'https://www.youtube.com/@synaratech',
};

/** Configuración del fondo con figuras */
const FIGURES_CONFIG = {
  numberOfFigures: 10,
  pastelColors: [
    'rgba(59,128,238,0.15)',
    'rgba(63,179,149,0.15)',
    'rgba(250,202,99,0.15)',
    'rgba(18,77,217,0.10)',
    'rgba(59,128,238,0.10)',
  ],
};

/* ===========================================
   Estilos Personalizados y Componentes Reusables
   =========================================== */

/** Enlaces estilizados para texto del footer */
const FooterLink = styled(Link)(({ theme }) => ({
  color: '#4a4a4a',
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  fontSize: '1rem',
  fontWeight: 500,
  display: 'inline-block',
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: '#124ed9',
    transform: 'translateX(5px)',
    textDecoration: 'underline',
  },
}));

/** Botón de ícono social con animaciones */
const SocialIconButton = styled(IconButton)(() => ({
  transition: 'transform 0.3s, color 0.3s',
  '&:hover': {
    color: '#124ed9',
    transform: 'scale(1.1)',
  },
}));

/* ===========================================
   Componente Footer
   =========================================== */

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [figures, setFigures] = useState([]);

  /**
   * Genera figuras de fondo al cargar el componente.
   * Estas figuras son elementos visuales flotantes y borrosos.
   */
  useEffect(() => {
    const { numberOfFigures, pastelColors } = FIGURES_CONFIG;
    const newFigures = Array.from({ length: numberOfFigures }).map((_, i) => {
      const size = Math.random() * 120 + 100;
      const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
      const rand = Math.random();
      const shapeType = rand < 0.33 ? 'circle' : rand < 0.66 ? 'square' : 'triangle';
      const top = `${Math.random() * 80}%`;
      const left = `${Math.random() * 100}%`;
      return { id: i, size, color, shapeType, top, left };
    });

    setFigures(newFigures);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Work Sans", sans-serif',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(238,244,255,1) 0%, rgba(245,250,255,1) 100%)',
        py: { xs: 8, sm: 12, md: 16 },
        px: 2,
      }}
    >
      {/* Figuras de fondo */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {figures.map((figure) => (
          <Box
            key={figure.id}
            sx={{
              position: 'absolute',
              top: figure.top,
              left: figure.left,
              width: figure.size,
              height: figure.size,
              backgroundColor: figure.color,
              borderRadius: figure.shapeType === 'circle' ? '50%' : '0%',
              clipPath:
                figure.shapeType === 'triangle'
                  ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
                  : 'none',
              filter: 'blur(20px)',
            }}
          />
        ))}
      </Box>

      {/* Contenido principal del footer */}
      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '1200px', mx: 'auto' }}>
        {/* Logo y Descripción */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ mb: 2 }}>
            <Image
              src={BRAND_CONFIG.logoSrc}
              alt={`${BRAND_CONFIG.name} Logo`}
              width={225}
              height={75}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: '#4a4a4a',
              maxWidth: '600px',
              fontSize: isMobile ? '1rem' : '1.2rem',
              mx: 'auto',
            }}
          >
            {BRAND_CONFIG.description}
          </Typography>
        </Box>

        {/* Frase de Contacto y Botón CTA */}
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#123456',
              mb: 2,
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              lineHeight: 1.4,
            }}
          >
            {TEXT_CONFIG.connectPhrase}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(to bottom, #128df3, #124ed9)',
              color: '#FFFFFF',
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: '1rem', sm: '1.2rem' },
              borderRadius: '25px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              '&:hover': {
                background: '#124ed9',
              },
            }}
            href="https://api.whatsapp.com/send?phone=5492364655702"
          >
            {TEXT_CONFIG.ctaButton}
          </Button>
        </Box>

        {/* Redes Sociales (Importadas desde utils) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          {socialNetworksOptions.map((network) => (
            <SocialIconButton
              key={network.value}
              href={SOCIAL_URLS[network.value]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.label}
            >
              {network.icon}
            </SocialIconButton>
          ))}
        </Box>

        {/* Enlaces Legales */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <FooterLink href="#">{TEXT_CONFIG.privacyPolicy}</FooterLink>
          <FooterLink href="#">{TEXT_CONFIG.termsOfService}</FooterLink>
        </Box>

        {/* Derechos Reservados */}
        <Typography variant="body2" align="center" sx={{ color: '#4a4a4a' }}>
          {TEXT_CONFIG.rightsReserved}
        </Typography>
      </Box>
    </Box>
  );
}
