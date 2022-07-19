import index from './index/index';
import index1 from './index1/index1';

export default {
    index:{
        ...index,
        namespaced: true, //这个必须放在当前模块中,不能进行扩展否则会报错
    },
    index1:{
        ...index1,
        namespaced: true,
    }
}