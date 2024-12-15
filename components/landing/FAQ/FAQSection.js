'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  Link,
  IconButton,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ==========================================
   Configuración Principal (SSOT)
   ==========================================
   Ajusta estos valores para personalizar el FAQ.
*/

const CONFIG = {
  mainTitle: 'Preguntas Frecuentes',
  mainSubtitle:
    'Resuelve tus dudas sobre cómo nuestros servicios de marketing digital pueden ayudar a tu práctica médica a atraer más pacientes y mejorar tu reputación en línea.',
  faqs: [
    {
      question: '¿En qué consiste el servicio de marketing médico digital?',
      answer:
        'Nuestro servicio incluye el diseño de estrategias personalizadas para incrementar tu presencia online. Esto abarca optimización de tu sitio web, manejo profesional de redes sociales, campañas publicitarias enfocadas, gestión de reseñas, posicionamiento en motores de búsqueda y más, todo pensado para ayudarte a llegar a más pacientes potenciales.',
    },
    {
      question: '¿Cómo me ayuda a destacar frente a otros profesionales de la salud?',
      answer:
        'Trabajamos en la construcción de una identidad digital sólida, destacando tus especialidades, trayectoria y opiniones positivas de pacientes. Gracias a contenidos relevantes, una imagen de marca coherente y estrategias de visibilidad específicas, podrás diferenciarte y reforzar la confianza en tus servicios.',
    },
    {
      question: '¿Qué resultados puedo esperar al implementar estas estrategias?',
      answer:
        'Al mejorar tu presencia en línea, podrás incrementar el volumen de solicitudes de cita, atraer pacientes de mayor calidad, consolidar tu reputación como profesional de la salud y aumentar la fidelidad de tus pacientes actuales. En definitiva, verás un crecimiento sostenible en tu consulta.',
    },
    {
      question: '¿Qué tipo de soporte ofrecen durante el proceso?',
      answer:
        'Ofrecemos acompañamiento integral: desde la planificación inicial hasta el análisis continuo de resultados. Recibirás informes mensuales, asesoramiento experto en estrategias de marketing digital y soporte técnico para asegurar que tus canales de comunicación estén siempre optimizados.',
    },
    {
      question: '¿Puedo adaptar los planes según las necesidades de mi especialidad médica?',
      answer:
        'Sí, cada estrategia se ajusta a tu especialidad, tipo de pacientes, ubicación geográfica y objetivos a corto y largo plazo. Nuestro enfoque personalizado garantiza que obtengas las soluciones más adecuadas para tu práctica.',
    },
  ],
};

/* ==========================================
   Variantes de Animación para Framer Motion
   ========================================== */
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

/* ==========================================
   Componente Interno: Sección de Título Principal
   ========================================== */
function MainTitleSection({ title, subtitle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: isMobile ? '2.3rem' : '2.7rem',
            color: theme.palette.text.primary,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mt: 2,
            color: theme.palette.info.main,
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>
    </Box>
  );
}

/* ==========================================
   Componente Interno: Lista de FAQs
   ========================================== */
function FAQListSection({ faqs }) {
  const theme = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container maxWidth="lg" ref={ref} disableGutters sx={{ mt: 4 }}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <Grid container spacing={4}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Accordion
                  sx={{
                    boxShadow: theme.shadows[2],
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:before': {
                      display: 'none',
                    },
                    backgroundColor: theme.palette.background.paper,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.01)',
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-content-${index}`}
                    id={`panel-header-${index}`}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        whiteSpace: 'pre-line',
                        fontSize: '0.95rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

/* ==========================================
   Componente Principal: FAQSection
   ========================================== */
export default function FAQSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        // Se remueven líneas innecesarias ajustando padding y background
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 15% 85%, rgba(18, 77, 217, 0.1) 25%, ${theme.palette.background.default} 40%),
          radial-gradient(circle at 85% 15%, rgba(18, 77, 217, 0.1) 25%, ${theme.palette.background.default} 40%)
        `,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          mx: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 4, md: 6 },
          width: '100%',
        }}
      >
        {/* Sección de Título */}
        <MainTitleSection title={CONFIG.mainTitle} subtitle={CONFIG.mainSubtitle} />

        {/* Lista de FAQs */}
        <FAQListSection faqs={CONFIG.faqs} />
      </Box>
    </Box>
  );
}
