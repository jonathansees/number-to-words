import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Container,
  Choice,
  InnerChoiceSpan,
} from './ChoiceItem.styled';

const ChoiceItem = (props) => {
  const {
    type,
    id,
    name,
    value,
    checked,
    disabled,
    variant,
    size,
    onChange,
    children,
    className,
    ...restProps
  } = props;

  return (
    <Label for={id} className={className} disabled={disabled}>
      <Container checked={checked} disabled={disabled} size={size}>
        <Choice
          type={type}
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          size={size}
          // onChange={onChange}
          {...restProps}
        />
        <InnerChoiceSpan
          className={className}
          variant={variant}
          size={size}
          checked={checked}
          disabled={disabled}
        />
      </Container>
      {children}
    </Label>
  );
};

ChoiceItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

ChoiceItem.defaultProps = {
  type: 'checkbox',
  id: null,
  name: null,
  value: null,
  checked: false,
  disabled: false,
  className: null,
  onChange: {},
};

export default ChoiceItem;
