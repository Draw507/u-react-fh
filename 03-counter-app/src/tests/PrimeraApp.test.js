import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
const { render } = require("@testing-library/react");

describe('Pruebas en PrimeraApp', () => {
    // test('debe mostrar el mensaje Hola soy David', () => {
    //     const saludo = 'Hola soy David';
    //     const {getByText} = render(<PrimeraApp saludo = 'Hola soy David' />);
    //     expect(getByText(saludo)).toBeInTheDocument(); 
    // })    
    
    test('debe de mostrar PrimeraApp correctamente ', () => {
        
        const saludo = 'Hola soy David';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar el subtitulo', () => {
        const saludo = 'Hola soy David';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } subtitulo = { subtitulo } /> );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
        
    });
    
})
