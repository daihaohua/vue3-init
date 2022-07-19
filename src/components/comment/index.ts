
// 注册全局组件
export default function(app:any){
    const modulesFiles = require.context('./', false, /.+\.vue$/)
    modulesFiles.keys().forEach((modulePath: string) => {
        const component = modulesFiles(modulePath)?.default
        if(component?.name){
            // console.log(modulePath,'组件')
            app.component(component?.name,component);
        }
    })
    
}