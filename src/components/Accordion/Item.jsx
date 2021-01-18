import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import { Collapse } from 'react-collapse';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import {
  StyledDT,
  StyledDD,
} from './Item.styled';

const Item = (props) => {
  const {
    isOpen,
    header,
    mode,
    variant,
    theme: themeProp,
    children,
  } = props;

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
  };

  const [isActive, setIsActive] = useState(isOpen);

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledDT variant={theme.variant} onClick={() => setIsActive(!isActive)}>{header}</StyledDT>
      <Collapse isOpened={!isActive}>
        <StyledDD variant={theme.variant}>{children}</StyledDD>
      </Collapse>
    </ThemeProvider>
  );
};

Item.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.string,
  mode: PropTypes.string,
  variant: PropTypes.string,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
  }),
};

Item.defaultProps = {
  isOpen: false,
  children: 'Submit',
  theme: {},
  mode: null,
  variant: null,
};

export default withTheme(Item);
