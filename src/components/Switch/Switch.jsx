import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import { StyledSwitch, StyledWrapper, StyledSpan } from './Switch.styled';

const Switch = (props) => {
  const {
    left,
    right,
    mode,
    variant,
    size,
    disabled,
    theme: themeProp,
    className,
    onClick,
  } = props;

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  const [isActive, setIsActive] = useState('left');

  const handleClick = (side) => {
    setIsActive(side);

    onClick({
      target: {
        ...props,
        checked: side === 'right',
      },
    });
  };

  const renderButton = (side, content) => (
    <StyledSwitch
      size="small"
      invert
      variant={theme.variant}
      side={side}
      active={isActive === side}
      onClick={isActive !== side ? () => handleClick(side) : null}
    >
      {content}
    </StyledSwitch>
  );

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledWrapper className={className}>
        <StyledSpan variant={theme.variant} active={isActive} />
        {renderButton('left', left)}
        {renderButton('right', right)}
      </StyledWrapper>
    </ThemeProvider>
  );
};

Switch.propTypes = {
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  className: PropTypes.string,
};

Switch.defaultProps = {
  mode: null,
  variant: null,
  size: null,
  disabled: false,
  theme: {},
  className: '',
};

export default withTheme(Switch);
