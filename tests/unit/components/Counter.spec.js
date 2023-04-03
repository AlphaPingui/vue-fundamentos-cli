import {shallowMount} from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
    // test('Debe de hacer match con el snapshot', () => {
        
    //     expect(wrapper.html()).toMatchSnapshot();
    // });

    it('El valor por defecto debe ser 100 en el p', () => {
        const wrapper = shallowMount(Counter);
        const allPTags = wrapper.findAll('p');
        expect(allPTags[1].text()).toBe('100');
    });
})