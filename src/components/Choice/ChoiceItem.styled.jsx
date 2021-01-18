import styled from 'styled-components';
import {
  textColor,
  primaryColor,
  fontSize,
  fontHeight,
} from '../../utils/themes';

export const Container = styled.span`
  --border-width: 2px;
  --background-color: ${primaryColor};

  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  top: -1px;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: text-bottom;
  float: left;
  height: 20px;
  width: 20px;
  margin-right: 3px;

  ${(props) => (props.checked) && `
    display: inline-block;
    position: relative;
    cursor: pointer;
  `}

  ${(props) => (props.disabled) && `
    cursor: not-allowed;
  `}
`;

export const Choice = styled.input`
  position: absolute;
  left: 0;
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;

  ${(props) => (props.checked) && `
    &:after {
    }
  `}

  ${(props) => (props.disabled) && `
    cursor: not-allowed;
  `}
`;

export const InnerChoiceSpan = styled.span`
  --border-width: 2px;
  --background-color: ${primaryColor};

  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 20px;
  height: 20px;
  border: var(--border-width) solid var(--background-color);
  background-color: #fff;
  transition: all .3s;

  &:after {
    position: absolute;
    display: table;
    border-top: 0;
    border-left: 0;
    content: "";
  }

  ${(props) => (props.checked) && `
    border-color: var(--background-color);
  `}

  ${(props) => (props.disabled) && `
    background-color: transparent;
    opacity: .25;
    cursor: not-allowed;
  `}
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 14px;
  display: inline-block;

  :not(:last-child) {
    margin-bottom: 16px;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  ${(props) => (props.disabled) && `
    pointer-events: none;
  `}
`;
