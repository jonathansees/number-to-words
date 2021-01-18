import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button'; 
import {
  primaryColor,
  primaryColorLight,
} from '../../utils/themes';

const StyledWrapper = styled.div`
  // width: 400px;
  // height: 40px;
  will-change: transform;
  transition: .3s ease all;
`;

const StyledSpan = styled.span`
  --background-color: ${primaryColor};

  background-color: var(--background-color);
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  border-radius: 4px;
  z-index: -1;
  transition: .3s ease-out all;

  ${(props) => props.active === 'right' && css`
    left: 50%;
  `}
`;

const StyledSwitch = styled(Button)`
  --background-color-dark: ${primaryColorLight};

  display: inline-block;
  width: 50%;
  height: 100%;
  position: relative;
  transition: .3s ease all;
  &:hover{
    cursor: default;
  }
  &:focus {
    outline: none;
  }

  &:hover:not(.disabled) {
    background-color: transparent;
    ${(props) => !props.active && css`
      color: var(--background-color-dark);
      cursor: pointer;
    `}
  }

  ${(props) => props.side === 'left' && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${(props) => props.side === 'right' && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${(props) => props.active && css`
    color: white;
  `}
`;

StyledSwitch.propTypes = {
  disabled: PropTypes.bool,
  invert: PropTypes.bool,
};

StyledSwitch.defaultProps = {
  disabled: false,
  invert: false,
};

export { StyledSwitch, StyledWrapper, StyledSpan };
