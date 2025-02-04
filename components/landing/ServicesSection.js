// /components/landing/ServicesSection.js
'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export default function ServicesSection() {
  const theme = useTheme();

  const servicesData = [
    {
      icon: <LocalHospitalIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Branding Médico',
      description:
        'Creamos una identidad visual y de marca coherente que refleje tu experiencia y especialidad.',
    },
    {
      icon: <CampaignIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Publicidad Digital',
      description:
        'Gestionamos campañas en redes sociales y Google para llegar a los pacientes que necesitas.',
    },
    {
      icon: <AssessmentIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'SEO para Clínicas',
      description:
        'Posiciona tu clínica o consultorio en los primeros lugares de búsqueda y atrae pacientes.',
    },
    {
      icon: (
        <PrecisionManufacturingIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: 'Automatización de Procesos',
      description:
        'Integramos herramientas de chat y correo para mantener comunicación constante con tus pacientes.',
    },
  ];

  return (
    <Box
      component="section"
      id="services-section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
        zIndex: 1, // Para poner contenido encima
      }}
    >
      {/* Curva superior */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          lineHeight: 0,
          zIndex: -1, // Detrás
        }}
      >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%' }}>
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ fill: '#eef4ff' }}
          />
        </svg>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            color: theme.palette.primary.main,
          }}
        >
          Nuestros Servicios
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            mb: 6,
            color: theme.palette.text.secondary,
            fontSize: '1.1rem',
          }}
        >
          Descubre cómo podemos ayudarte a destacar en el mundo digital y
          conectar con los pacientes ideales para tu especialidad.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {servicesData.map((service, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Curva inferior */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          lineHeight: 0,
          zIndex: -1, // Detrás
        }}
      >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%' }}>
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ fill: '#eef4ff' }}
          />
        </svg>
      </Box>
    </Box>
  );
}
