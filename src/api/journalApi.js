

import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-c1c1b-default-rtdb.firebaseio.com'
})


export default journalApi