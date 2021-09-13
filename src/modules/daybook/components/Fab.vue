<template>
  <button class="btn btn-primary">
      <!-- <i :class="fabIcon"></i> -->
      <i 
        class="fa fa-2x"
        :class="icon"
      >
          
      </i>
  </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    },
    computed: {
        fabIcon(){
            return 'fa fa-2x ' + this.icon
        }
    }
    
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
</style>