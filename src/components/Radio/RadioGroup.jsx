import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import StyledRadioGroup, { Legend } from './RadioGroup.styled';

const Radio = (props) => {
  const {
    children,
    name,
    theme: themeProp,
    mode,
    variant,
    size,
    legend,
    vertical,
    disabled,
    value,
    onChange,
    className,
  } = props;

  const [checkedId, setCheckedId] = useState(value);

  const handleChange = (event) => {
    const { id } = event.target;

    setCheckedId(id);

    onChange({
      target: {
        ...props,
        value: id,
      },
    });
  };

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledRadioGroup
        vertical={vertical}
        className={className}
        onChange={(event) => handleChange(event)}
      >
        {legend && <Legend>{legend}</Legend>}
        {children.map((child) => React.cloneElement(child, {
          checked: child.props.id === checkedId,
          name,
          disabled,
          variant: theme.variant,
          size: theme.size,
        }))}
      </StyledRadioGroup>
    </ThemeProvider>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
  legend: PropTypes.bool,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  value: '',
  children: null,
  theme: {},
  mode: null,
  variant: null,
  size: null,
  className: '',
  disabled: false,
  vertical: false,
  legend: undefined,
  onChange: {},
};

export default withTheme(Radio);
