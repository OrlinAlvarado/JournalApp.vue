<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 1 }})"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">09</span>            
            <span class="mx-1 fs-5">Septiembre</span>            
            <span class="mx-2 fw-light">2021, Jueves</span>            
        </div>
        <div class="entry-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio accusamus sit vel quasi unde recusandae dolores, officiis eveniet! Inventore accusantium adipisci maxime, quibusdam assumenda minima, dicta magni eius quos, cupiditate deleniti. Eveniet ut id dignissimos laudantium nihil cumque? Doloremque repudiandae harum et! Ipsum hic iusto placeat iure at saepe consequuntur!
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }
        
        .entry-container{
            font-size: 12px;
        }
    }
</style>