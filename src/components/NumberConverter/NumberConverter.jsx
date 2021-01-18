import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import StyledWrapper from './NumberConverter.styled';

const NumberConverter = (props) => {
  const {
    number,
    mode,
    variant,
    size,
    theme: themeProp,
    className,
  } = props;

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  const numberToEnglish = (n, custom_join_character) => {

    let string = n.toString().replace(/,/g, ""),
      negNumber = false, units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
  
    const and = custom_join_character || 'and';

    if (string[0] === '-') {
      negNumber = true;
      string = string.substring(1);
    }

    if (isNaN(string)) {
      return (
        <StyledWrapper
          variant="destructive"
          size={theme.size}
          className={className}
        >
          Please enter a valid number.
        </StyledWrapper>
      );
    }
  
    if (parseInt(string) > Number.MAX_SAFE_INTEGER) {
      const changeFactor = negNumber ? 'larger' : 'smaller';

      return (
        <StyledWrapper
          variant="destructive"
          size={theme.size}
          className={className}
        >
          Please enter a {changeFactor} number.
        </StyledWrapper>
      );
    }

    /* Is number zero? */
    if (parseInt(string) === 0) {
      return (
        <StyledWrapper
          variant="passive"
          size={theme.size}
          className={className}
        >
          Zero
        </StyledWrapper>
      );
    }
  
    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
  
    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }
  
    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }
  
    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {
      chunk = parseInt(chunks[i]);
      
      if (chunk) {
  
        /* Split chunk into array of individual integers */
        ints = chunks[i].split('').reverse().map(parseFloat);
  
        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
        if (ints[1] === 1) {
            ints[0] += 10;
        }
  
        /* Add scale word if chunk is not zero and array item exists */
        if ((word = scales[i])) {
            words.push(word);
        }
  
        /* Add unit word if array item exists */
        if ((word = units[ints[0]])) {
            words.push(word);
        }
  
        /* Add tens word if array item exists */
        if ((word = tens[ints[1]])) {
            words.push(word);
        }
  
        /* Add 'and' string after units or tens integer if: */
        if (ints[0] || ints[1]) {
  
            /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
            if (ints[2] || !i && chunksLen) {
                words.push(and);
            }
  
        }
  
        /* Add hundreds word if array item exists */
        if ((word = units[ints[2]])) {
            words.push(word + ' hundred');
        }
      }
    }
    
    if (negNumber) {
      words.push('Negative');
    }

    let returnNumber = words.reverse().join(' ');
  
    return (
      <StyledWrapper
        variant="passive"
        size={theme.size}
        className={className}
      >
        { returnNumber[0].toUpperCase() + returnNumber.substr(1) }
      </StyledWrapper>
    )
  }

  const wordNumber = numberToEnglish(number);

  return wordNumber;
};

NumberConverter.propTypes = {
  number: PropTypes.string,
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  className: PropTypes.string,
};

NumberConverter.defaultProps = {
  number: '',
  mode: null,
  variant: null,
  size: null,
  theme: {},
  className: '',
};

export default withTheme(NumberConverter);
