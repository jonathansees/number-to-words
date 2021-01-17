import React from 'react';
import PropTypes from 'prop-types';
import StyledDrawer from './Drawer.styled';

const Drawer = (props) => {
  const {
    isOpen,
    children,
    theme: themeProp,
    mode,
    variant,
    size,
    className,
  } = props;

  return (
    <StyledDrawer isOpen={isOpen} className={className}>
      {children}
    </StyledDrawer>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

Drawer.defaultProps = {
  children: null,
  mode: null,
  variant: null,
  size: null,
  className: '',
};

export default Drawer;
