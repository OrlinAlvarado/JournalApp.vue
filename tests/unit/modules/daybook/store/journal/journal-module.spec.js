import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'



const createVuexStore = ( initialState ) =>  createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialState }
        }
    }
})


describe('Vuex - Pruebas en el Journal Module', () => {
    test('este es el estado inicial, debe tener este state', () => {
        const store = createVuexStore( journalState )
        
        const { isLoading, entries } = store.state.journal
        
        
        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries)        
        
    })
    
    //Mutations
    test('mutation: setEntries', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        
        store.commit('journal/setEntries', journalState.entries)
        
        expect( store.state.journal.entries.length).toBe(2)
        expect( store.state.journal.isLoading).toBeFalsy()
        
    })
    
    test('mutation: updateEntry', () => {
        
        const store = createVuexStore( journalState )
        
        //updatedEntry
        
        const updatedEntry = {
            id: '-MkggXlcRyiHVJxQ5A6z',
            date : 1632318217996,
            picture : "https://res.cloudinary.com/orlinalvarado/image/upload/v1632322156/fnhs5y4gc3cqbvuybusg.jpg",
            text : "Pruba de updateEntry"
        }
        
        store.commit('journal/updateEntry', updatedEntry)
        
        const storeEntries = store.state.journal.entries
        
        
        expect( storeEntries.length ).toBe(2)
        // expect( storeEntries[1]).toEqual(updatedEntry)        
        expect(
            storeEntries.find( e =>  e.id === updatedEntry.id )
        ).toEqual( updatedEntry )
    })
    
    test('mutation: addEntry, deleteEntry', () => {
        
        const store = createVuexStore( journalState )
        
        const newEntry = {
            id: 'ABC-123',
            date : 1632318217996,
            picture : "https://path/to/image.jpg",
            text : "New Entry"
        }
        
        store.commit('journal/addEntry', newEntry)
        
        let storeEntries = store.state.journal.entries
        expect( storeEntries.length ).toBe(3)
        // expect( storeEntries.find( e => e.id === newEntry.id)).toEqual( newEntry )
        expect( storeEntries.find( e => e.id === newEntry.id)).toBeTruthy()
        
        
        store.commit('journal/deleteEntry', 'ABC-123')
        
        storeEntries = store.state.journal.entries
        expect( storeEntries.length ).toBe(2)
        // expect( storeEntries.find( e => e.id === newEntry.id)).toBe( undefined )
        expect( storeEntries.find( e => e.id === newEntry.id)).toBeFalsy()
        
    })
    
    
    //Getters
    
    test('getters: getEntriesByTerm, getEntryById', () => {
        const store = createVuexStore( journalState )
        
        const [ entry1, entry2 ] = journalState.entries
        
        expect( store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect( store.getters['journal/getEntriesByTerm']('nuevo').length).toBe(1)
        expect( store.getters['journal/getEntriesByTerm']('nuevo')).toEqual([ entry1])
        
        
        expect( store.getters['journal/getEntryById']('-MkCjs6_aJSW-Curk58B')).toEqual( entry1 )
        
    })
    
    //Actions
    
    test('actions: loadEntries', async() => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        
        await store.dispatch('journal/loadEntries')
        
        expect( store.state.journal.entries.length).toBe(2)
        
    })
    test('actions: updateEntry', async() => {
        const store = createVuexStore( journalState )
        
        const updatedEntry = {
            id: '-MkCjs6_aJSW-Curk58B',
            date : 1632318217996,
            picture : "https://res.cloudinary.com/orlinalvarado/image/upload/v1632322156/fnhs5y4gc3cqbvuybusg.jpg",
            text : "Hoy es un nuevo.",
            otroCampo: true,
            otroMas: { a: 1 }
        }
        
        await store.dispatch('journal/updateEntry', updatedEntry)
        
        expect( store.state.journal.entries.length).toBe(2)
        expect( 
            store.state.journal.entries.find( e => e.id === updatedEntry.id )
        ).toEqual( {
            id: '-MkCjs6_aJSW-Curk58B',
            date : 1632318217996,
            picture : "https://res.cloudinary.com/orlinalvarado/image/upload/v1632322156/fnhs5y4gc3cqbvuybusg.jpg",
            text : "Hoy es un nuevo.",
        })
        
    })
    
    test('actions: createEntry, deleteEntry', async() => {
        const store = createVuexStore( journalState )
        
        
        const newEntry = { 
            date: 1632318217996, 
            text: 'Nueva entrada desde las pruebas' 
        }
        
        const id = await store.dispatch('journal/createEntry', newEntry)
        
        expect( typeof id ).toBe('string')
        
        expect(id).toBeDefined()
        expect(id.length).toBeGreaterThan(0)
        expect( 
            store.state.journal.entries.find( e => e.id === id )
        ).toEqual( {
            ...newEntry,
            id
        })
        expect( 
            store.state.journal.entries.find( e => e.id === id )
        ).toBeTruthy()
        
        
        await store.dispatch('journal/deleteEntry', id)
        expect( store.state.journal.entries.find( e => e.id === id)).toBeFalsy()
        
        
    })
    
    
    
        
    
    
})
