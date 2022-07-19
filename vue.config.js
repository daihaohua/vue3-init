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


        config.module
        .rule('svg')
        .exclude.add(resolvs('src/svg/icon'))//注意：路径要具体到存放的svg的路径下，不然会报错
        .end()
        config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolvs('src/svg/icon'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
}