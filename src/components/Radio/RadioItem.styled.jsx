import styled from 'styled-components';
import { ChoiceItem } from '../Choice/index';
import { primaryColor } from '../../utils/themes';

const Radio = styled(ChoiceItem)`
  --border-width: 2px;
  --background-color: ${primaryColor};

  span {
    input {
      z-index: 1;
      margin: 3px;
      height: 12px;
      width: 12px;
    
      ${(props) => (props.disabled) && `
        cursor: not-allowed;
      `}
    }

    span {
      border-radius: 20px;
    
      &:after {
        background-color: var(--background-color);
        width: 12px;
        height: 12px;
        left: 2px;
        top: 2px;
        border-radius: 6px;
    
        opacity: 0;
        transform: scale(0);
        transition: all .3s cubic-bezier(.78,.14,.15,.86);
        background-color: var(--background-color);
      }
    
      ${(props) => (props.checked) && `
        border: var(--border-width) solid var(--background-color);
    
        &:after {
          transform: scale(1);
          opacity: 1;
          transition: all .3s cubic-bezier(.78,.14,.15,.86);
        }
      `}
    }
  }
`;

export default Radio;
