import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Pruebas del componente Home', () => {
    test('debe de hace match con el snapshot', () => {
        const wrapper = shallowMount( Home )
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    })
    
    test('hacer click en un boton debe redireccionar a no-entry', () => {
        
        const mockRouter = {
            push: jest.fn()
        }
        
        const wrapper = shallowMount( Home, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }    
        })
        
        wrapper.find('button').trigger('click')
        
        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry'})
        
    })
    
    
})


