import PrimeraApp from '../PrimeraApp';
const { render } = require("@testing-library/react");

describe('Pruebas en PrimeraApp', () => {
    test('debe mostrar el mensaje Hola soy David', () => {
        const saludo = 'Hola soy David';

        const {getByText} = render(<PrimeraApp saludo = 'Hola soy David' />);

        expect(getByText(saludo)).toBeInTheDocument(); 
    })        
})
