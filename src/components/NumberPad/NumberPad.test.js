import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import NumberPad from './NumberPad';

describe('Number Pad', () => {
  test('renders display number when passed down as prop', () => {
    render(<NumberPad value='12' />);
    const displayValue = screen.getByText('12');
    expect(displayValue).toBeInTheDocument();
  });
})
