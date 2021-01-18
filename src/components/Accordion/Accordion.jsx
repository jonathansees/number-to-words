import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccordion } from './Accordion.styled';

const Accordion = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <StyledAccordion className={className}>
      {children}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: '',
};

export default Accordion;
