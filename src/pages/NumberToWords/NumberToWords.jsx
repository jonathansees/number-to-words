import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Collapse } from 'react-collapse';
import Drawer, { DrawerItem } from '../../components/Drawer';
import NumberConverter from '../../components/NumberConverter';
import NumberPad from '../../components/NumberPad';
import Radio, { RadioItem } from '../../components/Radio';
import Select, { Option } from '../../components/Select';
import Switch from '../../components/Switch';
import TextInput from '../../components/TextInput/TextInput';
import {
  Wrapper,
  InputWrapper,
  StyledButton,
  StyledIcon,
  StyledSliderWrapper,
  StyledSlider,
} from './NumberToWords.styled'

const colors = [
  'Blue',
  'Cyan',
  'Gray',
  'Green',
  'Salmon',
  'SeaGreen',
  'SlateGray',
];
const descriptors = ['Dark', 'Light'];

const NumberToWords = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [numberValue, setNumberValue] = useState('');
  const [inputType, setInputType] = useState('text');
  const [color, setColor] = useState(colors[0]);
  const [description, setDescription] = useState('');
  const [isCustomTheme, setIsCustomTheme] = useState(false);
  const [digitNumber, setDigitNumber] = useState('');

  const handlePadClick = (value) => {
    switch (value) {
      case 'c':
        setNumberValue(numberValue.slice(0, -1));
        break;
      case 'e':
        setDigitNumber(numberValue);
        break;
      default:
        setNumberValue(numberValue + value);
    }
  };

  return (
    <ThemeProvider theme={{ mode: isCustomTheme ? description + color : 'Sonatype' }}>
      <StyledIcon variant="primary" onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
      <Drawer isOpen={isDrawerOpen}>
        <DrawerItem isOpen header="Theme">
          <Switch
            left="Sonatype"
            right="Custom"
            onClick={(e) => setIsCustomTheme(e.target.checked)}
          />
          <Collapse isOpened={isCustomTheme}>
            <Select
              placeholder="Description"
              size="small"
              name="descriptors"
              id="descriptors"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              {descriptors.sort().map((description) => (
                <Option value={description}>{description}</Option>
              ))}
            </Select>
            <Select
              size="small"
              name="colors"
              id="colors"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              {colors.sort().map((color) => (
                <Option value={color}>{color}</Option>
              ))}
            </Select>
          </Collapse>
        </DrawerItem>
        <DrawerItem header="Input Type" >
          <Radio
            vertical
            value={inputType}
            name="theme"
            onChange={(e) => setInputType(e.target.value)}
          >
            <RadioItem id="text">Text Input</RadioItem>
            <RadioItem id="pad">Number Pad</RadioItem>
          </Radio>
        </DrawerItem>
      </Drawer>
      <Wrapper>
        <InputWrapper>
          <StyledSliderWrapper>
            <StyledSlider active={inputType === 'text'}>
              <TextInput
                placeholder="Enter a number"
                onChange={(e) => setNumberValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? setDigitNumber(e.target.value) : null }
                value={numberValue}
              />
              <StyledButton onClick={() => setDigitNumber(numberValue)}>Translate</StyledButton>
            </StyledSlider>
            <StyledSlider active={inputType === 'pad'}>
              <NumberPad value={numberValue} onClick={(e) => handlePadClick(e.target.value)} />
            </StyledSlider>
          </StyledSliderWrapper>
          {digitNumber ? <NumberConverter number={digitNumber} /> : null}
        </InputWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default NumberToWords;
