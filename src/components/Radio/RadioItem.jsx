import React from 'react';
import PropTypes from 'prop-types';
import StyledRadioItem from './RadioItem.styled';

const RadioItem = (props) => {
  const {
    checked,
    ...restProps
  } = props;

  return (
    <StyledRadioItem
      type="radio"
      checked={checked}
      {...restProps}
    />
  );
};

RadioItem.propTypes = {
  checked: PropTypes.bool,
};

RadioItem.defaultProps = {
  checked: false,
};

export default RadioItem;
