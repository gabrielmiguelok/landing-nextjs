// @components/landing/WorkApproachSection/WorkApproachSection.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaCheckCircle, FaChartLine } from 'react-icons/fa';
import ContentContainer from '@utils/ContentContainer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function WorkApproachSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [figures, setFigures] = useState([]);

  // Colores usados en el hero para mantener consistencia
  const colorMap = {
    primary: '#128df3',
    secondary: '#3fb395',
    black: '#123456',
  };

  // Titular y subtítulo segmentados, mismos colores y esquema que el Hero
  const mainTitle = [
    { text: 'Cómo ', color: 'black' },
    { text: 'Elevamos ', color: 'primary' },
    { text: 'Tu Presencia ', color: 'black' },
    { text: 'Digital ', color: 'secondary' },
    { text: 'Médica', color: 'primary' },
  ];

  const subtitle = [
    { text: 'Diseñamos estrategias de ', color: 'black' },
    { text: 'marketing médico ', color: 'primary' },
    { text: 'que reflejan la calidad de tu práctica y generan ', color: 'black' },
    { text: 'confianza auténtica ', color: 'secondary' },
    { text: 'en tus pacientes, atrayendo nuevos y fidelizando a los actuales.', color: 'black' },
  ];

  // Nuevo texto para las secciones con íconos
  const features = [
    {
      icon: <FaCheckCircle size={40} color="#124ed9" />,
      title: 'Confianza Duradera',
      description:
        'Forjamos una presencia en línea que inspira credibilidad, cultivando la lealtad de tus pacientes a largo plazo.',
    },
    {
      icon: <FaChartLine size={40} color="#124ed9" />,
      title: 'Expansión Continua',
      description:
        'Implementamos estrategias basadas en datos que impulsan tu visibilidad, generando un flujo constante de nuevos pacientes.',
    },
  ];

  // Función para renderizar texto coloreado similar al Hero
  const renderColoredText = (parts) => {
    return parts.map((part, index) => (
      <Box
        key={index}
        component="span"
        sx={{ color: colorMap[part.color] || colorMap.black, fontWeight: 'bold' }}
      >
        {part.text}
      </Box>
    ));
  };

  useEffect(() => {
    const numberOfFigures = 8;
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

  const handleCTA = () => {
    window.location.href = '#';
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: 'linear-gradient(135deg, rgba(238,244,255,1) 0%, rgba(245,250,255,1) 100%)',
        py: { xs: 8, sm: 12, md: 16 },
        px: 2,
        fontFamily: '"Work Sans", sans-serif',
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

      {/* Contenido principal */}
      <ContentContainer
        maxWidth="xl"
        width="100%"
        paddingY={{ xs: 0, sm: 0 }}
        paddingX={{ xs: 0, sm: 0 }}
        marginY={{ xs: 0, sm: 0 }}
        borderRadiusStyle="square"
        boxShadowLevel={0}
        hasBorder={false}
        backgroundColor="transparent"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ContentContainer
          maxWidth="lg"
          width="100%"
          paddingY={{ xs: 0, sm: 0 }}
          paddingX={{ xs: 2, sm: 4 }}
          marginY={{ xs: 2, sm: 4 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              lineHeight: 1.2,
              textAlign: 'center',
              color: colorMap.black,
            }}
          >
            {renderColoredText(mainTitle)}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 5,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6,
              textAlign: 'center',
              color: colorMap.black,
              fontWeight: 400,
            }}
          >
            {renderColoredText(subtitle)}
          </Typography>
        </ContentContainer>

        <ContentContainer
          maxWidth="md"
          width="100%"
          paddingY={{ xs: 0, sm: 0 }}
          paddingX={{ xs: 0, sm: 0 }}
          marginY={{ xs: 2, sm: 4 }}
          borderRadiusStyle="rounded"
          boxShadowLevel={3}
          hasBorder={false}
          backgroundColor="transparent"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            mx: 'auto',
          }}
        >
          {/* Video Destacado */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <video
              src="#"
              controls
              preload="metadata"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </ContentContainer>

        {/* Sección de características con fondos blancos */}
        <ContentContainer
          maxWidth="lg"
          width="100%"
          paddingY={{ xs: 0, sm: 0 }}
          paddingX={{ xs: 0, sm: 0 }}
          marginY={{ xs: 2, sm: 4 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {features.map((feature, index) => (
            <ContentContainer
              key={index}
              maxWidth="sm"
              width="100%"
              paddingY={{ xs: 4, sm: 6 }}
              paddingX={{ xs: 3, sm: 4 }}
              marginY={{ xs: 0, sm: 0 }}
              borderRadiusStyle="rounded"
              boxShadowLevel={3}
              hasBorder={false}
              backgroundColor="rgba(255,255,255,0.95)"
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {feature.icon}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mt: 2,
                  color: '#124ed9',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  color: '#4a4a4a',
                  mt: 1,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                {feature.description}
              </Typography>
            </ContentContainer>
          ))}
        </ContentContainer>

        <ContentContainer
          maxWidth="md"
          width="100%"
          paddingY={{ xs: 0, sm: 0 }}
          paddingX={{ xs: 0, sm: 0 }}
          marginY={{ xs: 4, sm: 6 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
          sx={{ textAlign: 'center' }}
        >
          <Button
            variant="contained"
            onClick={handleCTA}
            sx={{
              borderRadius: theme.shape.borderRadius,
              padding: isMobile ? '0.6rem 2rem' : '0.8rem 2.5rem',
              fontSize: isMobile ? '1rem' : '1.2rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 'none',
              background: 'linear-gradient(45deg, #124ed9 30%, #128df3 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #181a20 30%, #128df3 90%)',
                boxShadow: 'none',
              },
              color: '#fff',
            }}
          >
            Agendar una Cita
          </Button>
        </ContentContainer>
      </ContentContainer>
    </Box>
  );
}
