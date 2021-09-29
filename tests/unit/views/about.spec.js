import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe('Pruebas del componente Aboute', () => {
    test('debe de hace match con el snapshot', () => {
        const wrapper = shallowMount( About )
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    })
    
})
