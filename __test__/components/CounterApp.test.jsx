import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../../src/components/Counter/Counter.jsx';

describe('[Snapshots]', () => {
  test('Should match snapshot', () => {
    const value = 0;
    const { container } = render(<Counter value={value} />);

    expect(container).toMatchSnapshot();
  });

  test('Should contain an initial value equal to 100', () => {
    const value = 100;
    const { container } = render(<Counter value={value} />);

    expect(screen.getByText(100)).toBeTruthy();
  });
});

describe('[Events]', () => {
  test('Should increment the counter with the +1 button', () => {
    const value = 0;
    render(<Counter value={value} />);
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    fireEvent.click(screen.getByRole('button', { name: 'add' }));

    expect(screen.getByText(3)).toBeTruthy();
  });

  test('Should diminish the counter with the -1 button', () => {
    const value = 0;
    render(<Counter value={value} />);
    fireEvent.click(screen.getByRole('button', { name: 'subtract' }));

    expect(screen.getByText(-1)).toBeTruthy();
  });

  test('Should reset the counter value', () => {
    const value = 0;
    render(<Counter value={value} />);
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    fireEvent.click(screen.getByRole('button', { name: 'add' }));
    fireEvent.click(screen.getByRole('button', { name: 'reload' }));

    expect(screen.getByText(0)).toBeTruthy();
  });
});
