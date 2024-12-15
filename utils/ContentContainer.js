// @utils/ContentContainer.js

import React from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ContentContainer({
  children,
  maxWidth = 'xl',
  width = '100%',
  paddingY = { xs: 4, sm: 6 },
  paddingX = { xs: 2, sm: 4, md: 6 },
  marginY = { xs: 2, sm: 4 },
  borderRadiusStyle = 'square', // 'square', 'mixed', 'rounded'
  boxShadowLevel = 3, // Nivel de sombra (0 a 25)
  backgroundColor, // Color de fondo personalizado
  hasBorder = true, // Añadir borde en todos los costados
  sx = {}, // Estilos adicionales
}) {
  const theme = useTheme();

  // Función para obtener el valor de borderRadius según el estilo
  const getBorderRadius = (style) => {
    switch (style) {
      case 'square':
        return 0;
      case 'mixed':
        return theme.shape.borderRadius / 2;
      case 'rounded':
      default:
        return theme.shape.borderRadius;
    }
  };

  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        width: width,
        backgroundColor: backgroundColor || theme.palette.background.paper,
        borderRadius: getBorderRadius(borderRadiusStyle),
        boxShadow: theme.shadows[boxShadowLevel],
        py: paddingY,
        px: paddingX,
        my: marginY,
        border: hasBorder ? `1px solid ${theme.palette.divider}` : 'none',
        ...sx, // Permite estilos adicionales
      }}
    >
      {children}
    </Container>
  );
}
