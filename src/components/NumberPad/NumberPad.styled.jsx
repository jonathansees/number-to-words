import styled from 'styled-components';
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

const StyledHex = styled.div`
  --border-width: 2px;
  --background-color: ${primaryColor};
  --hover-background-color: ${primaryColorDark};
  --active-background-color: ${activeBackgroundColor};
  
  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  position: relative;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: var(--background-color);
  width: 45px;
  height: 45px;
  margin: 0 5px;
  display: inline-block;
  transform: rotate(90deg);
  // transition: all 150ms ease-in-out;
  
  transition: all 10s;

  &:hover{
    background: var(--hover-background-color);
    cursor: pointer;
      
    div{
      color: var(--hover-background-color);
      font-weight: bold;
      cursor: pointer;
      transition: all .2s;
    }
  }
   
  &:before{
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    position: absolute;
    top:3%;
    left:3%;
    width: 42.5px!important;
    height: 42.5px;
    background: var(--background-color);;
    content: '';
    z-index: 2;

    &:hover{
      background: var(--hover-background-color);
      cursor: pointer;
    }
  }
   
  &:after{
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    position: absolute;
    top:5.8%;
    left:5.9%;
    width: 40px!important;
    height: 40px;
    background: white;
    content: '';
    z-index: 3;
  }


`;

const StyledHexContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  color: var(--background-color);;
  z-index: 99;
`;

const KeypadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  
  max-width: 100%;
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNumber = styled.div`
  --border-width: 2px;
  --background-color: ${primaryColor};

  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  background-color: transparent;
  color: var(--background-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  outline: none;
  box-sizing: border-box;
  border-radius: 4px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  font-size: var(--font-size);
  font-height: var(--font-height);

  padding: ${padding} ${sidePadding};
  min-height: ${minHeight};
`;

export {
  StyledHex,
  StyledHexContent,
  KeypadWrapper,
  StyledWrapper,
  StyledNumber,
};
