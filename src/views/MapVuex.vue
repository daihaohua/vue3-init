<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="updateVuex(0)">修改仓库数据</button>
    <button @click="updateVuex(1)">不修改仓库数据</button>
    仓库中的数据:{{homeTitle}}
    仓库中的数据1:{{mapHomeIndex.title}}
    <h3>--------------------</h3>
    <button @click="updateIndex">修改首页数据</button>
    <div>仓库首页数据{{mapIndex.title}}</div>
    <div>仓库首页数字{{mapIndex}}</div>
    
    <span class="iconfont icon-shouye" style="color:red;font-size:20px"></span>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex';
import {computed} from 'vue';
import * as TypesHome from "@/store/modules/home/type"
import * as operationVuex from "@/store/operationVuex"
import * as mapVuex from "@/utils/mapVuex"
  let store = useStore();
//   console.log(store.state.title,'全局数据');
//   console.log(store.state.home.title,'模块home');
//   console.log(operationVuex.getState('title'),'模块home');
  console.log(store.state.home.index.title,'模块home/index');

  // 映射处理
  const mapIndex = mapVuex.useState('home',['title','num']);
  const mapHomeIndex = mapVuex.useState('home/index',['title','name']);
  const mapIndexMutation = mapVuex.useMutations('home',['update']);
  const mapIndexAction = mapVuex.useActions('home',['updates']);
  // end

  // 监听vuex中的数据的变化
  const homeTitle = computed(()=>operationVuex.getState('home/title'));
  const  updateVuex = (type:number = 0)=>{
    store.commit(`home/${TypesHome.UPDATE_TITLE}`,{index:type,title:'我是修改的vuex中的数据'},{root:true});
  }

  const updateIndex = ()=>{
    console.log(mapIndexMutation)
    mapIndexMutation.update({index:0,title:'我是修改的map中的数据'})

    // 使用mapIndex的时候需要加上.value,以为是转化成ref对象
    // store.commit(`home/${TypesHome.UPDATE_TITLE}`,{index:type,title:'我是修改的vuex中的数据'},{root:true});
    // store.commit(`UPDATE_TITLE`,{title:'我是测试map中的数据修改',num:mapIndex.num.value+1},{root:true});
  }
</script>
