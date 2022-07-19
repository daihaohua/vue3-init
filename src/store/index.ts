import { createStore } from 'vuex'
import homeChilderIndex from './modules/home/childerIndex';
import homeIndex from './modules/home/index';
export default createStore({
  // 全局数据
  state: {
    title: '我是首页数据',
    num:0
  },
  mutations: {
    UPDATE_TITLE(state: any, args: { title: string, num: number }) {
      state.title = args.title;
      state.num = args.num;
    }
  },
  actions: {
  },
  modules: {
    // home模块
    home: {
      ...homeIndex, //home模块数据
      modules: {
        ...homeChilderIndex, //home模块子级数据
      },
      namespaced: true,
    }
  }
})
