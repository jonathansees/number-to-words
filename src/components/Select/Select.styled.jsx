import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ChevronDown } from '../Icons';
import {
  secondaryTextColor,
  backgroundColor,
  focusBorderColor,
  padding,
  leftSidePadding,
  rightSidePadding,
  minHeight,
  fontSize,
  fontHeight,
} from '../../utils/themes';

export const StyledSelectWrapper = styled.div`
  --text-color: ${secondaryTextColor};
  --placeholder-color: grey;
  --background-color: ${backgroundColor};
  --border-color: ${focusBorderColor};
  --focus-border-color: ${focusBorderColor};
  --icon-color: ${focusBorderColor};
  --border-size: 2px;

  --font-size: ${fontSize};
  --font-height: ${fontHeight};
  --padding: ${padding};
  --left-side-padding: ${leftSidePadding};
  --right-side-padding: ${rightSidePadding};
  --min-height: ${minHeight};

  display: flex;
  position: relative;
  cursor: pointer;
  background-color: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;

  &:hover {
    border: var(--border-size) solid var(--focus-border-color);
  }

  &.focus {
    border: var(--border-size) solid var(--focus-border-color);
    box-shadow: 0 0 0 1px var(--focus-border-color);
    outline: none;
  }

  &:active {
    border: var(--border-size) solid var(--focus-border-color);
    box-shadow: 0 0 0 1px var(--focus-border-color);
  }
  
  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

export const StyledSelect = styled.select`
  background-color: transparent;
  appearance: none;
  box-sizing: border-box;
  /* account for border but dont set height because native selects break */
  flex: 1;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  margin: 0;
  /*  safari adds extra margin on native selects */
  max-width: 100%;
  /* need to do font color like this in order to remove the dotted outline in firefox */
  color: $Gray01;
  min-height: var(--min-height);
  font-size: var(--font-size);
  font-height: var(--font-height);
  padding: var(--padding) var(--right-side-padding) var(--padding) var(--left-side-padding);

  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:focus,
  &:hover,
  &:active,
  &::-moz-focus-inner {
    border: none;
    outline: none;
  }

  /* Hides arrow on IE and older Edge */
  &::-ms-expand {
    display: none;
  }

  &[data-chosen="placeholder"] {
    color: var(--placeholder-color);
  }
`;

export const StyledOption = styled.option`
  color: var(--text-color);
  text-shadow: 0 0 0 grey;
`;

export const StyledPlaceholder = styled(StyledOption)`
  color: lightGrey;
  text-shadow: 0 0 0 grey;
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  right: var(--left-side-padding);
  height: 100%;
  display: flex;
  pointer-events: none;
`;

export const StyledIcon = styled(ChevronDown)`
  color: var(--icon-color);
  margin: auto;
  height: var(--font-size);

  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

StyledSelect.propTypes = {
  disabled: PropTypes.bool,
};

StyledSelect.defaultProps = {
  disabled: false,
};
