import { render, screen } from '@testing-library/react';
import NumberConverter from './NumberConverter';

test('renders number', () => {
  render(<NumberConverter number='12' />);
  const linkElement = screen.getByText('Twelve');
  expect(linkElement).toBeInTheDocument();
});

describe('Number Converter', () => {
  test('renders positive number', () => {
    render(<NumberConverter number='12' />);
    const output = screen.getByText('Twelve');
    expect(output).toBeInTheDocument();
  });
  
  test('renders negative number', () => {
    render(<NumberConverter number='-89' />);
    const output = screen.getByText('Negative eighty nine');
    expect(output).toBeInTheDocument();
  });
  
  test('renders zero', () => {
    render(<NumberConverter number='0' />);
    const output = screen.getByText('Zero');
    expect(output).toBeInTheDocument();
  });
  
  test('renders number with commas', () => {
    render(<NumberConverter number='9,000,000,000' />);
    const output = screen.getByText('Nine billion');
    expect(output).toBeInTheDocument();
  });
  
  test('renders too large error message', () => {
    const number = Number.MAX_SAFE_INTEGER + 1;
    render(<NumberConverter number={number.toString()} />);
    const output = screen.getByText('Please enter a smaller number.');
    expect(output).toBeInTheDocument();
  });
  
  test('renders too small error message', () => {
    const number = Number.MIN_SAFE_INTEGER - 1;
    render(<NumberConverter number={number.toString()} />);
    const output = screen.getByText('Please enter a larger number.');
    expect(output).toBeInTheDocument();
  });
  
  test('renders NaN error message', () => {
    render(<NumberConverter number="a" />);
    const output = screen.getByText('Please enter a valid number.');
    expect(output).toBeInTheDocument();
  });
})
