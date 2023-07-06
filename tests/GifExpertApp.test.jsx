import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Prueba en <GifExpertApp/>', () => {
  test('debe coincidir con el snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('', () => {
    render(<GifExpertApp />);
    screen.getByRole('heading', { level: 3 });
  });
});
