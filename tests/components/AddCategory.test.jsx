import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory/>', () => {
  const inputValue = 'Saitama';

  test('debe cambiar el valor del formulario', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('debe de llamar onNewCategory si el input tiene un nuevo valor', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    // expect(onNewCategory).toHaveBeenCalled();
    // expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe llamar al onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: '' } });
    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
