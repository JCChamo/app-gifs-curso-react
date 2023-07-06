import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid/>', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading al principio', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items en cuanto se carguen las imágenes', () => {
    const gifs = [
      { id: 123, title: 'Saitama', url: 'https://prueba.com/saitama.gif' },
      { id: 456, title: 'Goku', url: 'https://prueba.com/goku.gif' },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
