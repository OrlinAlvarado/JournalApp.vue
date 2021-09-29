import { shallowMount } from '@vue/test-utils'
import Fab from '@/modules/daybook/components/Fab'

describe('Pruebas del componente Fab', () => {
    test('debe de hace match con el snapshot', () => {
        const wrapper = shallowMount( Fab )
        
        expect( wrapper.html() ).toMatchSnapshot()
        
    })
    
    test('debe mostrar el icono por defecto', () => {
        const wrapper = shallowMount( Fab )
        
        //const faPlus = wrapper.find('i').classes().indexOf('fa-plus')
        //expect(faPlus).toBeGreaterThan(-1)        
        
        const iTag = wrapper.find('i')
        
        expect( iTag.classes('fa-plus')).toBeTruthy()
        
    })
    
    test('debe mostrar el icono por defecto', () => {
        
        const icon = 'fa-circle'
        const wrapper = shallowMount( Fab, { props: {
            icon
        }} )
        
        //const faCircle = wrapper.find('i').classes().indexOf(icon)
        //expect(faCircle).toBeGreaterThan(-1)        
        
        const iTag = wrapper.find('i')
        
        expect( iTag.classes(icon)).toBeTruthy()
        
    })
    
    test('debe de emitir el evento on:click cuando se hace click', () => {
        const wrapper = shallowMount( Fab )
    
        //console.log(wrapper.emitted());
        wrapper.find('button').trigger('click')
        
        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })
    
 
    
})
