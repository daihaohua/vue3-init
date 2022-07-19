import store from ".";

// 获取state数据
export const getState = (stateUrl:string)=>{
    let stateUrlArr:Array<string> = stateUrl.split('/');
    return stateUrlArr.reduce((pre:any, next:string) => pre[next], store.state)
}
// // 操作
// export const getState = (stateUrl:string)=>{
//     let stateUrlArr:Array<string> = stateUrl.split('/');
//     return stateUrlArr.reduce((pre:any, next:string) => pre[next], store.state)
// }