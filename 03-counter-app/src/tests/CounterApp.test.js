const { shallow } = require("enzyme");
const { default: CounterApp } = require("../CounterApp");

describe('Pruebas CounterApp', () => {
    let wrapper;    
    beforeEach(() => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe incrementar con el boton +1 ', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('6');
    });

    test('debe decrementar con el boton -1 ', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('4');
    });
})
