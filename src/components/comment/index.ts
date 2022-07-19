
// 注册全局组件
export default function(app:any){
    const modulesFiles = require.context('./', false, /.+\.vue$/)
    modulesFiles.keys().forEach((modulePath: string) => {
        const component = modulesFiles(modulePath)?.default
        let fileName:string = '';
        const callback:any =   function(req:string = '',$1:string = ''){
            fileName = $1;
        }
        modulePath?.replace(/^.\/([a-z|A-Z|0-9]+).vue/ig,callback)
        if(component?.name){
            app.component(component?.name,component);
        }else if(fileName){
            app.component(fileName,component);
            console.log(modulePath,'组件')
        }
    })
    
}