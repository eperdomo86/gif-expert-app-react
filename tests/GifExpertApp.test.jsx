
import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el compomente <GifExpertApp />', () => { 

    test('debe renderizar el componente con dos categorias', () => { 
         render(<GifExpertApp />);
         expect (screen.getByText('Dragon Ball'));
         expect (screen.getAllByText('One Punch'));
    });
});