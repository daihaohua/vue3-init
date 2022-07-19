<template>
    <div class=''>
       <div>
         我是pinia组件
         <div>我是state数据{{count}}</div>
         <div>我是getter数据{{getcount}}</div>
         <div>我是getter数据{{username}}</div>
         <div>我是组件监听数据{{getCount}}</div>

        <button @click="add">通过加state修改</button>
        <div>-------------------------</div>

        <div>我是通过action修改的数据{{username1}}</div>
        <button @click="actionAdd">通过加actions修改仓库数据</button>
        <!-- svg图标 -->
       </div>
    
</div>
</template>
<script lang='ts' setup>
import {computed} from 'vue';
  import { storeToRefs } from 'pinia'
  import homeStore from '@/pinia/home';
  import aboutStore from '@/pinia/about';
  let {count,getcount,username1} = storeToRefs(homeStore());
  let {username} = storeToRefs(aboutStore());
  let HomeStore = homeStore();
  let a = 1;
  const add = ()=>{
    count.value = a++;
    username.value = "我是修改后的名称";
  }
  const getCount = computed(()=>count.value);
  const actionAdd = ()=>{
     console.log('组件')
    HomeStore.setState("我是通过action修改的数据")
  }
</script>
<style scoped lang='scss'>

</style>