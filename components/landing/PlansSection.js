'use client';

import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';
import PaidIcon from '@mui/icons-material/Paid';

export default function PlansSection() {
  const theme = useTheme();

  const plans = [
    {
      name: 'Básico',
      price: '$99',
      features: ['Branding inicial', 'Campañas básicas', 'Reporte mensual'],
      icon: <StarIcon sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />,
    },
    {
      name: 'Profesional',
      price: '$199',
      features: ['Publicidad avanzada', 'SEO local', 'Soporte prioritario'],
      icon: (
        <WorkspacePremiumIcon
          sx={{ fontSize: '2rem', color: theme.palette.secondary.main }}
        />
      ),
    },
    {
      name: 'Premium',
      price: '$299',
      features: ['Automatizaciones', 'Gestión integral', 'Análisis de KPI'],
      icon: <PaidIcon sx={{ fontSize: '2rem', color: theme.palette.primary.dark }} />,
    },
  ];

  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        backgroundColor: '#eef4ff',
        py: { xs: 8, md: 10 },
        position: 'relative',
        zIndex: 1, // Para que el contenido quede encima
      }}
    >
      {/* Curva superior */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: 'translateY(-1px)',
          lineHeight: 0,
          zIndex: -1, // Curva de fondo
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%' }}
        >
          <path
            fill="#ffffff"
            d="M0,64L40,96C80,128,160,192,240,224C320,256,400,256,480,224C560,192,640,128,720,133.3C800,139,880,213,960,250.7C1040,288,1120,288,1200,256C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
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
          Planes de Marketing
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {plans.map((plan, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{plan.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {plan.name}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 2 }}>
                  {plan.price}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <Typography
                      key={featureIndex}
                      variant="body2"
                      color="text.secondary"
                    >
                      - {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 4,
                    textTransform: 'none',
                    mt: 2,
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  Contratar
                </Button>
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
          lineHeight: 0,
          zIndex: -1, // Curva de fondo
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%' }}
        >
          <path
            fill="#ffffff"
            d="M0,224L30,218.7C60,213,120,203,180,192C240,181,300,171,360,154.7C420,139,480,117,540,117.3C600,117,660,139,720,144C780,149,840,139,900,128C960,117,1020,107,1080,106.7C1140,107,1200,117,1260,144C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </Box>
    </Box>
  );
}
