<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>我是改变的值 {{num}}</div>
    <div>我是计算属性的监听 {{monitr}}</div>
    <button @click="clickNum">点我修改</button>
    <From />
    1111
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import From from '@/components/From';
// import From1 from '@views/About.vue';
 // hooks函数
  const useInit = ()=>{
    console.log('我是hooks函数')
    setTimeout(()=>{console.log('我是定时器里面的函数')},100)
    return 123
  }
  // 
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    From,
    // From1
  },
  // 如果里面有什么周期函数的话,是不能添加async的,必须要使用hooks函数进行处理
  setup(){
    console.log(6666)
    // 引入hooks函数
    const result = useInit();
    console.log(result,'我是hooks函数返回的值')

    // 初始化数据
    let state = reactive({
      num:0,
      num1:1
    })
    // 生命周期函数
    onMounted(()=>{
      console.log('我是onMounted生命周期里的函数')
    })
    
    // 计算属性
    const monitr = computed(()=>state.num);
    console.log('77777')

    // watch监听
    // （监听一个变量）
    let stor = watch(()=>state.num,()=>{
      console.log('我是watch监听函数的时间处理',)
    })

    const counter = ref(0)
    let stor1 = watch(counter,()=>{
      console.log('我是watch监听函数的时间处理',)
    })

    
    // （监听多个个变量）
    // watch([()=>state.num,()=>state.num1],()=>{

    // })

    const clickNum = ()=>{
      state.num++;
      if(state.num >= 10){
        console.log('取消监听')
        stor();
      }
    }
    // toRefs将普通变量变成响应式的 ...state会取消属性的响应式
    return {
      ...toRefs(state),
      clickNum,
      monitr
    }
  }
});
</script>
