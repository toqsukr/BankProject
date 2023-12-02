import { render, screen } from '@testing-library/react';
import Button from './button.component';
import PlusIcon from '../icons/plusIcon.component';

describe('Button tests', () => {
  it('Empty button render', () => {
    render(<Button />);
    const button = screen.getByRole<HTMLButtonElement>('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('');
  });

  it('Not empty button render', () => {
    render(<Button type='button' text='кнопка' color='purple' icon={PlusIcon} />);

    const button = screen.getByRole<HTMLButtonElement>('button');
    expect(button).toBeTruthy();

    expect(button).toHaveAttribute('color', 'purple');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('icon', PlusIcon);
    expect(button.textContent).toBe('кнопка');
  });
});
