'use client';

import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function AboutSection() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      id="about-section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Fondo curvo superior (SVG) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        >
          <path
            fill="#ffffff"
            d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,250.7C560,288,640,288,720,266.7C800,245,880,203,960,170.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </Box>

      <Box
        sx={{
          backgroundColor: '#ffffff',
          pt: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          pb: { xs: 6, md: 10 },
          borderRadius: '0 0 50% 50% / 0 0 10% 10%', // curva inferior suave
        }}
      >
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
            Conoce Sobre Nosotros
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
            Somos una agencia de marketing médico comprometida con impulsar la
            presencia digital de profesionales de la salud. Nuestro equipo
            multidisciplinario combina creatividad, tecnología y experiencia
            estratégica para conectar a los doctores con sus pacientes ideales.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#f9f9ff',
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                <EmojiObjectsIcon
                  sx={{ color: theme.palette.primary.main, fontSize: '3rem', mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Innovación
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Apostamos por la tecnología y tendencias actuales para
                  destacar tu práctica médica.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#f9f9ff',
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                <GroupIcon
                  sx={{ color: theme.palette.primary.main, fontSize: '3rem', mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Equipo Dedicado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contamos con especialistas en SEO, diseño, copywriting y más,
                  listos para ayudarte.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#f9f9ff',
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                <StarOutlineIcon
                  sx={{ color: theme.palette.primary.main, fontSize: '3rem', mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Resultados Confiables
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Medimos cada paso para garantizar que obtengas el retorno de
                  inversión esperado.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
