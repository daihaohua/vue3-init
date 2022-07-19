<template>
    <div class=''>
       <div>
         我是pinia组件
         <div>我是state数据{{count}}</div>
         <div>我是getter数据{{getcount}}</div>
         <div>我是getter数据{{username}}</div>
        <button @click="add">通过加state修改</button>
       </div>
    
</div>
</template>
<script lang='ts' setup>
  import { storeToRefs } from 'pinia'
  import homeStore from '@/pinia/home';
  import aboutStore from '@/pinia/about';
  let {count,getcount} = storeToRefs(homeStore());
  let {username} = storeToRefs(aboutStore());
  let a = 1;
  const add = ()=>{
    count.value = a++;
    username.value = "我是修改后的名称";
  }
</script>
<style scoped lang='scss'>

</style>