import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas de <GifItem/>', () => {
  const title = 'patata';
  const url = 'https://patata.gif/';
  test('Debe coincidir con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('debería mostrar imagen con url y alt indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('debe existir el título', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  // test("Comprobación de parámetros obligatorios de props title y url", () => {});
});
