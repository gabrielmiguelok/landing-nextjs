'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

export default function FaqSection() {
  const theme = useTheme();

  const faqs = [
    {
      question: '¿Cuánto tarda en dar resultados el marketing médico?',
      answer:
        'Dependiendo del plan y la estrategia, los resultados pueden comenzar a verse en unas pocas semanas. Sin embargo, el posicionamiento sólido lleva al menos 2-3 meses de trabajo constante.',
    },
    {
      question: '¿Puedo cambiar de plan más adelante?',
      answer:
        'Sí, puedes escalar a un plan superior en cualquier momento. Nos adaptamos a la etapa de crecimiento de tu práctica médica.',
    },
    {
      question: '¿Qué pasa si no tengo sitio web?',
      answer:
        'Podemos crear uno para ti o rediseñar el que tengas, optimizado para atraer y retener pacientes.',
    },
  ];

  return (
    <Box
      component="section"
      id="faq-section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#ffffff',
        position: 'relative',
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
          Preguntas Frecuentes
        </Typography>
      </motion.div>

      <Box sx={{ maxWidth: '800px', margin: '0 auto', px: 2 }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion
              sx={{
                mb: 2,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
              >
                <Typography sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
