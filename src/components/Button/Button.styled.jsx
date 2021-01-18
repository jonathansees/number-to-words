import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  textColor,
  primaryColor,
  primaryColorDark,
  activeBackgroundColor,
  padding,
  sidePadding,
  minHeight,
  fontSize,
  fontHeight,
} from '../../utils/themes';

const StyledButton = styled.button`
  --border-width: 2px;
  --background-color: ${primaryColor};
  --hover-background-color: ${primaryColorDark};
  --active-background-color: ${activeBackgroundColor};
  
  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  background-color: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  border: var(--border-width) solid var(--background-color);
  outline: none;
  box-sizing: border-box;
  border-radius: 4px;
  /* Gets rid of the blue highlight on mobile android */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  font-size: var(--font-size);
  font-height: var(--font-height);

  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:hover:not(.disabled) {
    background-color: var(--hover-background-color);
  }

  &:active {
    background-color: var(--active-background-color);
  }

  ${(props) => props.invert && css`
    background-color: transparent;
    color: var(--background-color);
    border: var(--border-width) solid var(--background-color);

    &:hover:not(.disabled) {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `}

  padding: ${padding} ${sidePadding};
  min-height: ${minHeight};
  min-width: 80px;
`;

StyledButton.propTypes = {
  disabled: PropTypes.bool,
  invert: PropTypes.bool,
};

StyledButton.defaultProps = {
  disabled: false,
  invert: false,
};

export default StyledButton;
