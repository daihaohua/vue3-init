const path = require('path');
function resolvs(dir){
    return path.join(__dirname,dir)
  };
module.exports = {
    "devServer":{
        port: 8888,
        hotOnly:true, //热更新
        open:true, //自动打开浏览器
    },
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolvs('src'))
        .set('@assets',resolvs('src/assets'))
        .set('@components',resolvs('src/components'))
        .set('@views',resolvs('src/views'))
    }
}