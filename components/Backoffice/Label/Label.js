import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
//
import { StyledLabel } from './styles';

// ----------------------------------------------------------------------

const Label = forwardRef(({ children, color = 'default', sx, ...other }, ref) => {
  const theme = useTheme();

  const iconStyle = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
  };

  return (
    <StyledLabel
      ref={ref}
      component="span"
      ownerState={{ color }}
      sx={{
        ...sx,
      }}
      theme={theme}
      {...other}
    >
      {children}
    </StyledLabel>
  );
});

Label.displayName = "Label";

export default Label;
