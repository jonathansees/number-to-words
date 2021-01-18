import styled from 'styled-components';
import Button from '../../components/Button';
import { Cog } from '../../components/Icons';
import { neutralColor } from '../../utils/themes';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const StyledIcon = styled(Cog)`
  --background-color: ${neutralColor};

  color: var(--background-color);
  position: fixed;
  top: 10px;
  right: 10px;
  height: 25px;
  cursor: pointer;
`;

const StyledSliderWrapper = styled.div`
`;

const StyledSlider = styled.div`
  display: none;

  ${(props) => (props.active) && `
    display: flex;
  `}
`;

export {
  Wrapper,
  InputWrapper,
  StyledButton,
  StyledIcon,
  StyledSliderWrapper,
  StyledSlider,
};
