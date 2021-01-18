import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import {
  StyledSelect,
  StyledSelectWrapper,
  StyledPlaceholder,
  StyledIcon,
  StyledIconWrapper,
} from './Select.styled';

const Select = (props) => {
  const {
    children,
    theme: themeProp,
    mode,
    variant,
    size,
    placeholder,
    // invert,
    disabled,
    className,
    ...restProps
  } = props;

  const [placeholderProp] = useState(placeholder);

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledSelectWrapper
        className={className}
        variant={theme.variant}
        // invert={invert}
        size={theme.size}
        disabled={disabled}
      >
        <StyledIconWrapper>
          <StyledIcon disabled={disabled} />
        </StyledIconWrapper>
        <StyledSelect disabled={disabled} {...restProps}>
          {placeholder ? <StyledPlaceholder value="">{placeholderProp}</StyledPlaceholder> : null }
          {children}
        </StyledSelect>
      </StyledSelectWrapper>
    </ThemeProvider>
  );
};

Select.propTypes = {
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
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  children: 'Submit',
  theme: {},
  mode: null,
  variant: null,
  size: null,
  invert: false,
  className: '',
  placeholder: '',
  disabled: false,
};

export default withTheme(Select);
