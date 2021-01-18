import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import StyledDrawer from './Drawer.styled';
import Accordion from '../Accordion';

const Drawer = (props) => {
  const {
    isOpen,
    mode,
    variant,
    theme: themeProp,
    children,
    className,
  } = props;

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
  };

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledDrawer isOpen={isOpen} variant={theme.variant} className={className}>
        <Accordion>
          {children}
        </Accordion>
      </StyledDrawer>
    </ThemeProvider>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  mode: PropTypes.string,
  variant: PropTypes.string,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  className: PropTypes.string,
  children: PropTypes.node,
};

Drawer.defaultProps = {
  isOpen: false,
  mode: null,
  variant: null,
  theme: {},
  className: '',
  children: null,
};

export default withTheme(Drawer);
