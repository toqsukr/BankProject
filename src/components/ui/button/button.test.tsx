import { render, screen } from '@testing-library/react';
import Button from './button.component';

describe('Button tests', () => {
  it('Empty button render', () => {
    render(<Button />);
    const button = screen.getByRole<HTMLButtonElement>('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('');
  });

  it('Not empty button render', () => {
    render(<Button text='кнопка' />);

    const button = screen.getByRole<HTMLButtonElement>('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('кнопка');
  });
});
