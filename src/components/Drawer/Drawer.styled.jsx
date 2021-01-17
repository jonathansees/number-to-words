import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';

const StyledDrawer = styled.div`
  --drawer-width: 250px;

  position: fixed;
  width: var(--drawer-width);
  height: 100vh;
  background-image: linear-gradient(to bottom right, ${darken('0.1', 'rgb(81,172,241)')}, rgb(81,172,241));
  margin-left: -250px;
  float: left;
  overflow: auto;
  box-shadow: 0px 0px 5px #7f7f7f;
  z-index: 999;
  
  transition: all .3s;

  ${(props) => (props.isOpen) && `
    margin-left: 0px;
  `}
`;

export const StyledDrawerContent = styled.dl`
  margin-block: auto;
  border: 1px solid #BBBBBB;
  border-top: none;
`;

StyledDrawer.propTypes = {
  isOpen: PropTypes.bool,
};

StyledDrawer.defaultProps = {
  isOpen: false,
};

export default StyledDrawer;
