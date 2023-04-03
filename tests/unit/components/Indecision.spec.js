import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/indecision';

describe('Indecision Component', () => {
    let wrapper;
    let clgSpy;
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
    });
    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    test('escribir en el input no debe disparar nada, excepto el console.log()', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');
        
        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(0);
    })

});