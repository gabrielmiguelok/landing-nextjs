// components/SectionDivider.js

import React from 'react';
import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

function SectionDivider({
  width = '60%',
  height = '2px',
  color,
  marginY = '40px',
  marginX = '0px',
  align = 'center',
  variant = 'solid', // Opciones: 'solid', 'dashed', 'dotted'
  orientation = 'horizontal', // Opciones: 'horizontal', 'vertical'
}) {
  const theme = useTheme();
  const dividerColor = color || theme.palette.divider;

  return (
    <Box
      sx={{
        width: orientation === 'horizontal' ? width : height,
        height: orientation === 'horizontal' ? height : width,
        backgroundColor: variant === 'solid' ? dividerColor : 'transparent',
        borderTop:
          variant !== 'solid' && orientation === 'horizontal'
            ? `${height} ${variant} ${dividerColor}`
            : 'none',
        borderLeft:
          variant !== 'solid' && orientation === 'vertical'
            ? `${width} ${variant} ${dividerColor}`
            : 'none',
        marginY: orientation === 'horizontal' ? marginY : '0px',
        marginX: orientation === 'horizontal' ? 'auto' : marginX,
      }}
    />
  );
}

SectionDivider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  marginY: PropTypes.string,
  marginX: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default SectionDivider;
