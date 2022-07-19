import * as TypesHome from "./type"

interface State {
    title:string,
}
const state:State = {
    title:'我是index数据'
}
const mutations = {
    [TypesHome.UPDATE_TITLE](state:State,args:{title:string,index:number}){
        switch(args.index){
            case 0: //修改
                state.title = args.title;
            break;
            case 1:
            break
        }
    },
    update(state:State,title:string){
        state.title = title;
    }
}
const actions = {
     // 获取文案数据 dhh 20220228
  updates({ commit,dispatch, rootState }:any){
    console.log('进来了')
  },
}   

export default{
    state,
    mutations,
    actions,
}