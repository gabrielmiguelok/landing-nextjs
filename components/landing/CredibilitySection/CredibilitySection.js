'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaHeart, FaStar, FaEye, FaUserCheck, FaStethoscope } from 'react-icons/fa';
import ContentContainer from '@utils/ContentContainer';

/* =====================
   Configuración (SSOT)
   ===================== */
const COLOR_MAP = {
  primary: '#128df3',
  secondary: '#3fb395',
  black: '#123456',
};

const SECTION_TITLE = [
  { text: 'Consolida ', color: 'black' },
  { text: 'Tu Presencia ', color: 'primary' },
  { text: 'y Credibilidad ', color: 'black' },
  { text: 'Médica ', color: 'secondary' },
  { text: 'en Línea', color: 'primary' },
];

const SECTION_SUBTITLE = [
  { text: 'Potencia la ', color: 'black' },
  { text: 'confianza ', color: 'secondary' },
  { text: 'de tus pacientes y destaca la ', color: 'black' },
  { text: 'calidad ', color: 'primary' },
  { text: 'de tus servicios a través de estrategias personalizadas.', color: 'black' },
];

const CARDS = [
  {
    icon: <FaHeart size={50} color={COLOR_MAP.primary} aria-hidden="true" />,
    title: 'Confianza Auténtica',
    text: 'Refuerza la relación médico-paciente con información fiable y comunicación clara.',
  },
  {
    icon: <FaStar size={50} color={COLOR_MAP.primary} aria-hidden="true" />,
    title: 'Reputación Online',
    text: 'Destaca tus logros, credenciales y testimonios para elevar tu perfil digital.',
  },
  {
    icon: <FaEye size={50} color={COLOR_MAP.primary} aria-hidden="true" />,
    title: 'Visibilidad Estratégica',
    text: 'Aumenta el alcance de tu práctica llegando a nuevas audiencias con posicionamiento digital.',
  },
  {
    icon: <FaUserCheck size={50} color={COLOR_MAP.primary} aria-hidden="true" />,
    title: 'Atención Personalizada',
    text: 'Adapta tu enfoque a las necesidades únicas de cada paciente, fortaleciendo su fidelidad.',
  },
  {
    icon: <FaStethoscope size={50} color={COLOR_MAP.primary} aria-hidden="true" />,
    title: 'Cuidado Integral',
    text: 'Ofrece acompañamiento holístico con salud preventiva, seguimiento y comunicación continua.',
  },
];

const BUTTON_CTA_LABEL = 'Explora Cómo Mejorar Tu Presencia';
const BUTTON_CTA_LINK = '#';

const PASTEL_COLORS = [
  'rgba(59,128,238,0.15)',
  'rgba(63,179,149,0.15)',
  'rgba(250,202,99,0.15)',
  'rgba(18,77,217,0.10)',
  'rgba(59,128,238,0.10)',
];

const NUMBER_OF_FIGURES = 8;

const CARD_MAX_WIDTH = 360;
const CARD_PADDING_Y = { xs: 5, sm: 7 };
const CARD_PADDING_X = { xs: 4, sm: 5 };
const CARD_TITLE_SIZE = { xs: '1.4rem', sm: '1.6rem' };
const CARD_TEXT_SIZE = { xs: '1rem', sm: '1.1rem' };
const SECTION_PADDING_Y = { xs: 10, sm: 14, md: 18 };

/* =====================
   Componente Principal
   ===================== */
export default function CredibilitySection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const [figures, setFigures] = useState([]);

  useEffect(() => {
    const newFigures = Array.from({ length: NUMBER_OF_FIGURES }).map((_, i) => {
      const size = Math.random() * 120 + 100;
      const color = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
      const rand = Math.random();
      const shapeType = rand < 0.33 ? 'circle' : rand < 0.66 ? 'square' : 'triangle';
      const top = `${Math.random() * 80}%`;
      const left = `${Math.random() * 100}%`;
      return { id: i, size, color, shapeType, top, left };
    });
    setFigures(newFigures);
  }, []);

  const topCards = CARDS.slice(0, 3);
  const bottomCards = CARDS.slice(3, 5);

  const renderColoredText = (parts) =>
    parts.map((part, index) => (
      <Box
        key={index}
        component="span"
        sx={{ color: COLOR_MAP[part.color] || COLOR_MAP.black, fontWeight: 'bold' }}
      >
        {part.text}
      </Box>
    ));

  const renderCardGroup = (cards, columns) => (
    <Box
      sx={{
        display: 'grid',
        gap: 5,
        gridTemplateColumns: isMobile ? '1fr' : isMedium ? '1fr 1fr' : `repeat(${columns}, 1fr)`,
        justifyItems: 'center',
      }}
    >
      {cards.map((card, index) => (
        <article
          key={index}
          aria-labelledby={`card-title-${index}`}
          role="article"
          style={{ width: '100%', maxWidth: `${CARD_MAX_WIDTH}px` }}
        >
          <ContentContainer
            maxWidth="sm"
            width="100%"
            paddingY={CARD_PADDING_Y}
            paddingX={CARD_PADDING_X}
            marginY={{ xs: 0, sm: 0 }}
            borderRadiusStyle="rounded"
            boxShadowLevel={4}
            hasBorder={false}
            backgroundColor="#ffffff"
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e0e0e0',
            }}
          >
            {card.icon}
            <Typography
              id={`card-title-${index}`}
              variant="h5"
              sx={{
                fontWeight: 600,
                mt: 3,
                color: COLOR_MAP.primary,
                fontSize: CARD_TITLE_SIZE,
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                color: '#4a4a4a',
                mt: 2,
                fontSize: CARD_TEXT_SIZE,
                lineHeight: 1.6,
              }}
            >
              {card.text}
            </Typography>
          </ContentContainer>
        </article>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      aria-label="Sección de credibilidad médica en línea"
      role="region"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: 'linear-gradient(135deg, #f0f5fa 0%, #ffffff 100%)',
        py: SECTION_PADDING_Y,
        px: 2,
        fontFamily: '"Work Sans", sans-serif',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden="true">
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

      <ContentContainer
        maxWidth="xl"
        width="100%"
        paddingY={0}
        paddingX={0}
        marginY={0}
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
          paddingY={0}
          paddingX={{ xs: 2, sm: 4 }}
          marginY={{ xs: 2, sm: 4 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
              lineHeight: 1.2,
              color: COLOR_MAP.black,
            }}
          >
            {renderColoredText(SECTION_TITLE)}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 5,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
              lineHeight: 1.6,
              color: COLOR_MAP.black,
              fontWeight: 400,
            }}
          >
            {renderColoredText(SECTION_SUBTITLE)}
          </Typography>
        </ContentContainer>

        <ContentContainer
          maxWidth="lg"
          width="100%"
          paddingY={0}
          paddingX={{ xs: 2, sm: 4 }}
          marginY={{ xs: 3, sm: 5 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
        >
          {renderCardGroup(topCards, 3)}
        </ContentContainer>

        <ContentContainer
          maxWidth="lg"
          width="100%"
          paddingY={0}
          paddingX={{ xs: 2, sm: 4 }}
          marginY={{ xs: 3, sm: 5 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
        >
          {renderCardGroup(bottomCards, 2)}
        </ContentContainer>

        <ContentContainer
          maxWidth="md"
          width="100%"
          paddingY={0}
          paddingX={0}
          marginY={{ xs: 4, sm: 6 }}
          borderRadiusStyle="square"
          boxShadowLevel={0}
          hasBorder={false}
          backgroundColor="transparent"
          sx={{ textAlign: 'center' }}
        >
          <Button
            variant="contained"
            href={BUTTON_CTA_LINK}
            sx={{
              borderRadius: theme.shape.borderRadius,
              padding: isMobile ? '0.7rem 2rem' : '1rem 2.8rem',
              fontSize: isMobile ? '1.05rem' : '1.25rem',
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
            aria-label="Explora más opciones para mejorar tu presencia en línea"
          >
            {BUTTON_CTA_LABEL}
          </Button>
        </ContentContainer>
      </ContentContainer>
    </Box>
  );
}
