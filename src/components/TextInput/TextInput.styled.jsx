import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  textColor,
  backgroundColor,
  focusBackground,
  padding,
  sidePadding,
  minHeight,
  fontSize,
  fontHeight,
  focusBorderColor,
} from './themes';

export const StyledWrapper = styled.div`
--font-size: ${fontSize};
--font-height: ${fontHeight};
--padding: ${padding};
--min-height: ${minHeight};


--text-color: ${textColor};
--background-color: ${backgroundColor};
--border-color: ${focusBorderColor};
--focus-background: ${focusBackground};
--focus-border-color: ${focusBorderColor};
--border-size: 2px;
--placeholder-color: gray;

  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: var(--border-size) solid var(--border-color);
  background-color: var(--background-color);

  &:focus,
  &.focus-within {
    background-color: var(--focus-background);
    border: var(--border-size) solid var(--focus-border-color);
    box-shadow: 0 0 0 1px var(--focus-border-color);
  }

  &:active {
    background-color: var(--focus-background);
    border: var(--border-size) solid var(--focus-border-color);
    box-shadow: 0 0 0 1px var(--focus-border-color);
  }

  @media (hover) {
    &:focus,
    &:hover {
      border: var(--border-size) solid var(--focus-border-color);
    }
  }

  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

const StyledTextInput = styled.input`
  --font-size: ${fontSize};
  --font-height: ${fontHeight};
  --padding: ${padding};
  --side-padding: ${sidePadding};
  --min-height: ${minHeight};

  box-sizing: border-box;
  flex: 1;
  border: none;
  background: transparent;

  min-height: var(--min-height);
  font-size: var(--font-size);
  font-height: var(--font-height);
  padding: var(--padding) var(--side-padding);

  color: ${textColor};
  padding: 5px 10px;

  &::placeholder {
    color: var(--placeholder-color);
    font-weight: 500;
  }

  &:read-only {
    background: $Gray08;
  }

  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: $screen-md) {
    padding: 6px $Spatial2;
    font-weight: 500;
  }
`;

StyledTextInput.propTypes = {
  disabled: PropTypes.bool,
  invert: PropTypes.bool,
};

StyledTextInput.defaultProps = {
  disabled: false,
  invert: false,
};

export default StyledTextInput;
