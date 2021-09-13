<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="fs-3 fw-bold">Septiembre</span>
            <span class="mx-2 fs-3 fw-bold">2021</span>
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
        >
            
        </textarea>
    </div>
    
    <img 
        src="https://www.lifeder.com/wp-content/uploads/2020/11/paisaje-natural-y-antropico.jpg" 
        alt="entry-picture"
        class="img-thumbnail"
    >
    
    <Fab 
        icon="fa-save"
    />
    
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
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