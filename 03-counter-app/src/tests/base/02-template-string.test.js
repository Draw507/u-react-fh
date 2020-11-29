import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string'

describe('Prueba template string', () => {
    test('getSaludo debe de retornar hola david', () => {        
        const nombre = 'David';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar Hola Susana si no hay parametros', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Susana')
        
    })
    
        
})
