import styled from 'styled-components';
import {
  textColor,
  primaryColor,
  padding,
  sidePadding,
  minHeight,
  fontSize,
  fontHeight,
} from '../../utils/themes';

const StyledWrapper = styled.div`
  --border-width: 2px;
  --background-color: ${primaryColor};
  
  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  background-color: transparent;
  color: var(--background-color);
  border: var(--border-width) solid var(--background-color);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // text-transform: uppercase;
  // letter-spacing: 2px;
  margin-top: 20px;
  outline: none;
  box-sizing: border-box;
  border-radius: 4px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  font-size: var(--font-size);
  font-height: var(--font-height);

  padding: ${padding} ${sidePadding};
  min-height: ${minHeight};
  min-width: 80px;
`;

export default StyledWrapper;
