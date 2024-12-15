// components/landing/HeroSection/ActionButton.js
'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ActionButton({ t }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    window.location.href = '#';
  };

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
        color="primary"
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
        onClick={handleClick}
        aria-label={t.button}
      >
        {t.button}
      </Button>
    </motion.div>
  );
}

export default ActionButton;
