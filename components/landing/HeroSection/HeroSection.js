// components/landing/Hero.js

'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [figures, setFigures] = useState([]);

  const mainTitle = [
    { text: 'Convertimos ', color: 'black' },
    { text: 'tu Práctica Médica ', color: 'primary' },
    { text: 'en una Marca de ', color: 'black' },
    { text: 'Confianza', color: 'secondary' },
  ];

  const subtitle =
    'Diseñamos estrategias de marketing pensadas para médicos, clínicas y profesionales de la salud. Te ayudamos a crecer, atraer más pacientes y construir relaciones duraderas.';

  const microCopy = 'Impulsamos tu reputación en línea para que conectes con tus pacientes de forma auténtica y efectiva.';

  const button1Label = 'Agenda una Consultoría Gratuita';
  const button2Label = 'Conoce Más';

  const renderTitle = (titleParts) => {
    return titleParts.map((part, index) => {
      let colorStyle;
      switch (part.color) {
        case 'primary':
          colorStyle = '#128df3';
          break;
        case 'secondary':
          colorStyle = '#3fb395';
          break;
        case 'black':
        default:
          colorStyle = '#123456';
          break;
      }
      return (
        <span key={index} style={{ color: colorStyle, fontWeight: 'bold' }}>
          {part.text}
        </span>
      );
    });
  };

  useEffect(() => {
    const numberOfFigures = 10;
    const pastelColors = [
      'rgba(59,128,238,0.15)',
      'rgba(63,179,149,0.15)',
      'rgba(250,202,99,0.15)',
      'rgba(18,77,217,0.10)',
      'rgba(59,128,238,0.10)',
    ];

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

  const handleScrollToNextSection = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection && heroSection.nextElementSibling) {
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToConsultation = () => {
    window.location.href = '#';
  };

  function ActionButton({ label, onClick }) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: theme.shape.borderRadius,
            padding: isMobile ? '8px 24px' : '10px 28px',
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: 'none',
            background: 'linear-gradient(45deg, #124ed9 30%, #128df3 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #181a20 30%, #128df3 90%)',
              boxShadow: 'none',
            },
          }}
          onClick={onClick}
          aria-label={label}
        >
          {label}
        </Button>
      </motion.div>
    );
  }

  return (
    <>
      <Head>
        <title>Marketing Médico | Potencia tu Marca Médica en el Mundo Digital</title>
        <meta
          name="description"
          content="Estrategias de marketing médico para clínicas y profesionales de la salud. Atrae más pacientes, fideliza y construye una marca confiable."
        />
        <meta
          name="keywords"
          content="marketing médico, marketing para clínicas, marketing para profesionales de la salud, atracción de pacientes"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <Box
        component="section"
        id="hero-section"
        role="region"
        aria-label="Sección principal marketing médico"
        sx={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          fontFamily: '"Work Sans", sans-serif',
          background: 'linear-gradient(135deg, rgba(238,244,255,1) 0%, rgba(245,250,255,1) 100%)',
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
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

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.95)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            py: { xs: 6, sm: 8, md: 10 },
            px: { xs: 3, sm: 4, md: 5 },
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant={isMobile ? 'h4' : 'h2'}
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4rem' },
                lineHeight: 1.2,
                textAlign: 'center',
                color: '#123456',
              }}
            >
              {renderTitle(mainTitle)}
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                lineHeight: 1.6,
                color: '#4a4a4a',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                mb: 4,
                textAlign: 'center',
              }}
            >
              {subtitle}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <ActionButton
                label={button1Label}
                onClick={handleGoToConsultation}
              />
              <ActionButton
                label={button2Label}
                onClick={handleScrollToNextSection}
              />
            </Box>

            <Typography
              variant="body2"
              component="p"
              sx={{
                mt: 4,
                color: '#4a4a4a',
                fontSize: '0.875rem',
                textAlign: 'center',
              }}
            >
              {microCopy}
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
