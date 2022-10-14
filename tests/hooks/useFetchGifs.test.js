import { renderHook, screen, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hooks useFetchGrid', () => { 

    const category = 'One Punch';

    test('debe de retornar el estado inicial', () => { 
         const { result } = renderHook( () => useFetchGifs(category));
         const { images, isLoading } = result.current;
         expect(images.length).toBe(0);
         expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en falso', async() => { 
        const { result } = renderHook( () => useFetchGifs(category));

        await waitFor(
            () => expect (result.current.images.length).toBeGreaterThan(0), { timeout:3000 }
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    }); 
});