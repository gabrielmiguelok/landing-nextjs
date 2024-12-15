'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Grid, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SectionDivider from '@utils/SectionDivider';

/* =====================
   Configuración (SSOT)
   ===================== */

/* Colores corporativos */
const COLOR_MAP = {
  primary: '#124ed9',
  secondary: '#3fb395',
  black: '#123456',
};

/* Títulos y textos principales */
const TITLE_PARTS = [
  { text: 'Selecciona el ' },
  { text: 'Plan ', color: 'primary' },
  { text: 'Perfecto ', color: 'secondary' },
  { text: 'para Impulsar tu ', color: 'black' },
  { text: 'Marca Médica', color: 'primary' },
];

const SUBTITLE =
  'Mejora tu visibilidad en línea, gana la confianza de pacientes potenciales y destaca tu expertise con planes diseñados para profesionales de la salud.';

/* Texto distintivo para el plan más popular */
const POPULAR_TEXT = 'Más Popular';

/* Definición de planes de suscripción: Títulos, precios, beneficios, etc. */
const PLANS = [
  {
    id: 1,
    title: 'Plan Base',
    price: '$299 USD / mes',
    contacts: 'Gestión de redes sociales básicas',
    features: [
      'Perfil optimizado en Google My Business',
      'Publicaciones semanales en redes sociales',
      'Reportes mensuales de alcance',
      'Asesoría inicial en marketing médico',
    ],
    button_text: 'Comenzar ahora',
    popular: false,
    profileUrl: '#',
    icon: SearchIcon,
  },
  {
    id: 2,
    title: 'Plan Profesional',
    price: '$749 USD / mes',
    contacts: 'Estrategias segmentadas por especialidad',
    features: [
      'Todo lo incluido en el Plan Base',
      'Campañas publicitarias orientadas a pacientes locales',
      'Diseño de landing page médica personalizada',
      'Análisis SEO y mejora de posicionamiento',
      'Soporte prioritario',
    ],
    button_text: 'Iniciar',
    popular: true,
    profileUrl: '#',
    icon: DashboardCustomizeIcon,
  },
  {
    id: 3,
    title: 'Plan Premium',
    price: 'A convenir',
    contacts: 'Soluciones avanzadas y a medida',
    features: [
      'Estrategias integrales de branding médico',
      'Gestión completa de reputación online',
      'Integración con CRM y sistemas internos',
      'Consultoría continua y formación de tu equipo',
    ],
    button_text: 'Contáctanos',
    popular: false,
    profileUrl: '#',
    icon: ThumbUpAltIcon,
  },
];

/* Figuras decorativas de fondo */
const NUMBER_OF_FIGURES = 10;
const PASTEL_COLORS = [
  'rgba(59,128,238,0.15)',
  'rgba(63,179,149,0.15)',
  'rgba(250,202,99,0.15)',
  'rgba(18,77,217,0.10)',
  'rgba(59,128,238,0.10)',
];

/* =====================
   Componente Principal
   ===================== */
export default function SubscriptionPlansSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

  const renderTitle = (parts) =>
    parts.map((part, index) => (
      <Box
        key={index}
        component="span"
        sx={{
          color: part.color ? COLOR_MAP[part.color] : COLOR_MAP.black,
          fontWeight: 'bold',
        }}
      >
        {part.text}
      </Box>
    ));

  /* No hace nada en el click, ya que no queremos redirect por ahora */
  const handlePlanClick = () => {};

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(238,244,255,1) 0%, rgba(245,250,255,1) 100%)',
        py: { xs: 10, sm: 14, md: 18 },
        px: 2,
        fontFamily: '"Work Sans", sans-serif',
      }}
      aria-label="Sección de planes de suscripción para marketing médico"
    >
      {/* Figuras de fondo decorativas (sin valor semántico) */}
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

      {/* Contenido principal */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          width: '100%',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {/* Títulos */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: COLOR_MAP.black,
                mb: 2,
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                lineHeight: 1.2,
              }}
            >
              {renderTitle(TITLE_PARTS)}
            </Typography>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              component="p"
              gutterBottom
              sx={{
                mt: 4,
                color: '#4a4a4a',
                maxWidth: '1000px',
                margin: '0 auto',
                fontSize: isMobile ? '1.5rem' : '2rem',
                lineHeight: 1.6,
              }}
            >
              {SUBTITLE}
            </Typography>
          </motion.div>
        </Box>

        <SectionDivider
          width="60%"
          height="2px"
          color={COLOR_MAP.primary}
          marginY="40px"
          align="center"
          variant="solid"
        />

        {/* Lista de Planes */}
        <Grid container spacing={6} justifyContent="center">
          {PLANS.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <Grid item xs={12} md={4} key={plan.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: { xs: 4, sm: 6 },
                      textAlign: 'center',
                      position: 'relative',
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                    onClick={handlePlanClick}
                    role="region"
                    aria-labelledby={`plan-title-${index}`}
                  >
                    {plan.popular && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          backgroundColor: COLOR_MAP.primary,
                          color: '#ffffff',
                          padding: isMobile ? '4px 8px' : '6px 12px',
                          borderTopRightRadius: '12px',
                          borderBottomLeftRadius: '8px',
                          fontWeight: 'bold',
                          zIndex: 3,
                          fontSize: isMobile ? '0.75rem' : '0.875rem',
                        }}
                      >
                        {POPULAR_TEXT}
                      </Box>
                    )}

                    <PlanIcon
                      sx={{
                        fontSize: isMobile ? 60 : 80,
                        color: COLOR_MAP.primary,
                        mb: 3,
                      }}
                      aria-hidden="true"
                    />

                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: COLOR_MAP.black,
                        mb: 2,
                        fontSize: isMobile ? '1.4rem' : '1.6rem',
                      }}
                      id={`plan-title-${index}`}
                    >
                      {plan.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      gutterBottom
                      sx={{
                        color: COLOR_MAP.primary,
                        mb: 2,
                        fontSize: isMobile ? '1.2rem' : '1.4rem',
                        fontWeight: '600',
                      }}
                    >
                      {plan.price}
                    </Typography>

                    {plan.contacts && (
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                        sx={{
                          color: '#4a4a4a',
                          mb: 3,
                          fontSize: isMobile ? '1rem' : '1.2rem',
                        }}
                      >
                        {plan.contacts}
                      </Typography>
                    )}

                    <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                      {plan.features.map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body1"
                          component="p"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            color: '#4a4a4a',
                            fontSize: isMobile ? '0.95rem' : '1rem',
                          }}
                        >
                          <CheckIcon
                            sx={{ color: COLOR_MAP.primary, mr: 1, fontSize: '1.1rem' }}
                            aria-hidden="true"
                          />
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 4,
                        textTransform: 'none',
                        borderRadius: '30px',
                        background: 'linear-gradient(to bottom, #128df3, #124ed9)',
                        color: '#ffffff',
                        px: 3,
                        py: 1.2,
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                        '&:hover': {
                          background: '#124ed9',
                        },
                      }}
                      href="#"
                      aria-label={plan.button_text}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {plan.button_text}
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
