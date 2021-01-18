import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Item } from '../Accordion';
import { primaryColor } from '../../utils/themes';

const StyledDrawer = styled.div`
  --drawer-width: 250px;
  --border-width: 2px;
  --background-color: ${primaryColor};

  position: fixed;
  width: var(--drawer-width);
  height: 100vh;
  background-color: var(--background-color);
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
  border-top: none;
`;

export const DrawerItem = styled(Item)`
`;

StyledDrawer.propTypes = {
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
};

StyledDrawer.defaultProps = {
  disabled: false,
  vertical: false,
};

export default StyledDrawer;
