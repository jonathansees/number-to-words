import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import StyledButton from './Button.styled';

const Button = (props) => {
  const {
    children,
    theme: themeProp,
    mode,
    variant,
    size,
    invert,
    disabled,
    className,
    ...restProps
  } = props;

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledButton
        className={className}
        variant={theme.variant}
        invert={invert}
        size={theme.size}
        disabled={disabled}
        {...restProps}
      >
        { children }
      </StyledButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  invert: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Submit',
  theme: {},
  mode: null,
  variant: null,
  size: null,
  invert: false,
  className: '',
  disabled: false,
};

export default withTheme(Button);
