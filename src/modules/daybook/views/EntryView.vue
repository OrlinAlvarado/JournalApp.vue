<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold mx-2">{{ day }}</span>
                <span class="fs-3 fw-bold">{{ month }}</span>
                <span class="mx-2 fs-3 fw-bold">{{ yearDay }}</span>
            </div>
            
            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary">
                    Borrar
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        
        <hr>
        
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                rows="4"
                placeholder="¿Que sucedió hoy?"
                v-model="entry.text"
            >
                
            </textarea>
        </div>
        
        <img 
            src="https://www.lifeder.com/wp-content/uploads/2020/11/paisaje-natural-y-antropico.jpg" 
            alt="entry-picture"
            class="img-thumbnail"
        >
    </template>
    
    <Fab 
        icon="fa-save"
    />
    
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

import getDayMothYear from '../helpers/getDayMothYear'
    
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data(){
        return {
            entry: null
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day(){
            const { day } = getDayMothYear( this.entry.date )
            return day
        },
        month(){
            const { month } = getDayMothYear( this.entry.date )
            return month
        },
        yearDay(){
            const { yearDay } = getDayMothYear( this.entry.date )
            return yearDay
        },
    },
    methods: {
        loadEntry(){
            const entry  = this.getEntryById( this.id )
            if( !entry ) return this.$router.push({ name: 'no-entry'})
            
            this.entry = entry
        }
    },
    created(){
       this.loadEntry()
    },
    watch: {
        id(){
            this.loadEntry()
        }
    }
    
}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    
    &:focus{
        outline: none;
    }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;  
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>