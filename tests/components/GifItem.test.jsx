import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem pruebas', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render(<GifItem url={url} title={title} />);
        expect(container).toMatchSnapshot();
    }); 

    test('debe renderizar una imagen', () => {
        render(<GifItem url={url} title={title} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de retorna un texto con el titulo', () => {
        render(<GifItem url={url} title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});