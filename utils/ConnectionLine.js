// utils/ConnectionLine.js
'use client';

import React from 'react';

const ConnectionLine = ({ x1, y1, x2, y2, color }) => (
  <svg
    aria-hidden="true"
    role="presentation"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0, // Asegura que las líneas estén por debajo del contenedor blanco
    }}
  >
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" />
  </svg>
);

export default ConnectionLine;
