<template>
    <div class='My'>
        个人中心
        <!--  -->
        <Poppull />
</div>
</template>
<script lang='ts'>
  import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
     name: 'My',
     setup(){
         let state = reactive({
     })
      return{
      ...toRefs(state)
      }
   },
   });
</script>
<style scoped lang='scss'>

</style>