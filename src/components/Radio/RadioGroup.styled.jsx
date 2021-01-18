import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  textColor,
  fontSize,
  fontHeight,
} from '../../utils/themes';

const StyledRadioGroup = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;

  ${(props) => props.vertical && css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Legend = styled.legend`
  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  color: var(--text-color);
  font-weight: 400;
  font-size: var(--font-size);
  font-height: var(--font-height);
  line-height: 18px;
  padding-left: 0;
  margin-bottom: 16px;
`;

StyledRadioGroup.propTypes = {
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
};

StyledRadioGroup.defaultProps = {
  disabled: false,
  vertical: false,
};

export default StyledRadioGroup;
