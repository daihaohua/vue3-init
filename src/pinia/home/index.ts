// pinia框架
import {defineStore} from "pinia";

export default defineStore('homeStore',{
    state:()=>({
        count:0,
        username:'我是用户名'
    }),
    getters:{
        getcount:(state)=>state.count*2
    },
    actions:{
        
    }
})

