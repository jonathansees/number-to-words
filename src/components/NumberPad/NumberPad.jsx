import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import {
  StyledHex,
  StyledHexContent,
  KeypadWrapper,
  StyledWrapper,
  StyledNumber,
} from './NumberPad.styled';

const NumberPad = (props) => {
  const {
    value,
    theme: themeProp,
    variant,
    size,
    className,
    onClick,
  } = props;

  const handleClick = (key) => {
    onClick({
      target: {
        ...props,
        value: key,
      },
    });
  };

  const theme = {
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  const keys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', 'c', '0', 'e'];

  return (
    <StyledWrapper>
      <StyledNumber size="large" variant={theme.variant}>{value}</StyledNumber>
      <KeypadWrapper>
        {keys.map((key) => (
          <StyledHex className={className} variant={theme.variant} onClick={() => handleClick(key)}>
            <StyledHexContent>
              {key}
            </StyledHexContent>
          </StyledHex>
        ))}
      </KeypadWrapper>
    </StyledWrapper>
  );
};

NumberPad.propTypes = {
  value: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.shape({
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
};

NumberPad.defaultProps = {
  value: '',
  variant: null,
  size: null,
  className: '',
  theme: {},
};

export default NumberPad;
