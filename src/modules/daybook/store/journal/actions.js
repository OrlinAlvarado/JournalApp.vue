import journalApi from '@/api/journalApi';

// export const myAction = async ({ commit }) => {
    
// }

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    
    if( !data ){
        commit('setEntries', [])
        return
    }
    
    const entries = []
    
    for(let id of Object.keys( data )){
        entries.push({
            id,
            ...data[id]
        })
    }
    
    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
    const { date, text, picture } =  entry
    
    const dataToSave = {
        date,
        picture,
        text
    }
    
    await journalApi.put(`/entries/${ entry.id }.json`, dataToSave)
    
    dataToSave.id = entry.id 
    commit('updateEntry', { ...dataToSave })
}

export const createEntry = async ({ commit }, entry) => {
    const { date, text, picture } =  entry
    
    const dataToSave = {
        date,
        picture,
        text
    }
    
    const { data } = await journalApi.post(`/entries.json`, dataToSave)
        
    commit('addEntry', { id: data.name, ...dataToSave })
    
    return data.name
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${ id }.json`)
    
    commit('deleteEntry', id)
}