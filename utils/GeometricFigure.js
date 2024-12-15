// components/GeometricFigure.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const GeometricFigure = ({ figure }) => {
  const theme = useTheme();
  const { shapeType, size, color, top, left } = figure;

  const styles = {
    position: 'absolute',
    top: top,
    left: left,
    width: shapeType !== 'triangle' ? size : 0,
    height: shapeType !== 'triangle' ? size : 0,
    backgroundColor: shapeType === 'triangle' ? 'transparent' : color,
    borderRadius:
      shapeType === 'circle'
        ? '50%'
        : shapeType === 'square'
        ? '0px'
        : '0px',
    border: 'none',
    opacity: 0.7,
    pointerEvents: 'none',
    ...(shapeType === 'triangle' && {
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
    }),
    boxShadow:
      shapeType === 'inner'
        ? '0 2px 4px rgba(0, 0, 0, 0.05)'
        : '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    zIndex: shapeType === 'inner' ? 1 : 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ delay: figure.id * 0.1, duration: 0.6 }}
      aria-hidden="true"
      role="presentation"
      style={styles}
    />
  );
};

export default GeometricFigure;
