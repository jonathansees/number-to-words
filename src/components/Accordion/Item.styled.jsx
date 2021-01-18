import styled from 'styled-components';
import {
  textColor,
  primaryColorDark,
  neutralColor,
} from '../../utils/themes';

export const StyledDT = styled.dt`
  --text-color: ${textColor};
  --hover-background-color: ${primaryColorDark};
  --bottom-border-color: ${neutralColor};

  background: transparent;
  padding: 10px;
  color: var(--text-color);
  border-bottom: 1.5px solid var(--bottom-border-color);
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  transition: .15s;
  &:hover{
    background-color: var(--hover-background-color);
  }
  i{
    float: right;
    transition: 0.2s;
    opacity: 0.3;
  }
`;

export const StyledDD = styled.dd`
  --text-color: ${textColor};

  background: var(--text-color);
  padding: 10px;
  margin: 0;
  -moz-box-shadow:    inset 1px 4px 9px -6px;
  -webkit-box-shadow: inset 1px 4px 9px -6px;
  box-shadow:         inset 1px 4px 9px -6px;
  transition: all 1s;
`;
