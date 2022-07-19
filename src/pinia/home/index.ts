// pinia框架
import {defineStore} from "pinia";

export default defineStore('homeStore',{
    state:()=>({
        count:0,
        username1:'我是用户名'
    }),
    getters:{
        getcount:(state)=>state.count*2
    },
    actions:{
        setState(str:string){
            this.username1 = str;
            console.log('仓库',str, this.username1)
        }
    }
})

