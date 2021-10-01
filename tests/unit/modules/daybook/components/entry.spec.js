
import { shallowMount } from '@vue/test-utils'
import { journalState } from '../../../mock-data/test-journal-state'

import Entry from '@/modules/daybook/components/Entry.vue'

describe('Pruebas en Entry Component', () => {
    const mockRouter = {
        push: jest.fn()
    }
    
    const entry = journalState.entries[1]
    
    const wrapper = shallowMount( Entry, {
        props: {
            entry
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }
    })
    
    test('debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
    test('debe de redireccionar al hacer click en el entry-container', () => {
        wrapper.find('div').trigger('click')
        
        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'entry', params: { id: entry.id }})
    })
    
    test('pruebas en las propiedades computadas', () => {
        expect(wrapper.vm.day).toBe( 22 )
        expect(wrapper.vm.month).toBe('Septiembre')
        expect(wrapper.vm.yearDay).toBe('2021, Miércoles');
    })
    
    
    
})
