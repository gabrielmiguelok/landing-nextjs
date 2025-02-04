// /components/landing/FooterSection.js
'use client';

import React from 'react';
import { Box, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FooterSection() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      id="footer-section"
      sx={{
        /* Agregamos position y z-index para colocar curvas detrás */
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#f5f5f5',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Curva superior (opcional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%' }}
        >
          <path
            fill="#ffffff"
            d="M0,64L40,96C80,128,160,192,240,224C320,256,400,256,480,224C560,192,640,128,720,133.3C800,139,880,213,960,250.7C1040,288,1120,288,1200,256C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </Box>

      {/* --- CÓDIGO ORIGINAL DEL FOOTER (NO SE ELIMINA NI UNA LÍNEA) --- */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: { xs: 2, md: 6 } }}>
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
            ¡Hablemos!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Formulario de Contacto */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: '#fff',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Envíanos un mensaje
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 4,
                      textTransform: 'none',
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Datos de Contacto */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Contáctanos Directamente
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  <Link href="mailto:contacto@medmarketing.com">contacto@medmarketing.com</Link>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body1" color="text.secondary">
                  1234 Calle Principal, Ciudad, País
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          mt: 6,
          color: theme.palette.text.secondary,
          fontSize: '0.9rem',
        }}
      >
        © {new Date().getFullYear()} MedMarketing. Todos los derechos reservados.
      </Box>
      {/* --- FIN DEL CÓDIGO ORIGINAL DEL FOOTER --- */}

      {/* Curva inferior (opcional) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%' }}
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
