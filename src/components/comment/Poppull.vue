<template>
  <div class="poppull">我是公共弹框组件你是什么</div>
</template>
<script lang='ts'>
    import { defineComponent, reactive, toRefs } from "vue";
    export default defineComponent({
    name: "Poppull",
    setup() {
        let state = reactive({});
        return {
        ...toRefs(state),
        };
    },
    });
</script>
<style scoped lang='scss'>
</style>