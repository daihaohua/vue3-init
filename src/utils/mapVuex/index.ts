import  {mapState,mapGetters,mapActions,mapMutations,createNamespacedHelpers,useStore} from 'vuex';
import  {computed} from 'vue';

// 检测类型
function checkType(type:any){
    return Object.prototype.toString.call(type);
}

// 对state和getter进行映射处理
function useMapper(mapper:any,mapFn:Function){
    // 获取仓库
    const store = useStore();
    // 获取到对应的对象的functions: {name:function, age: function}
    const storeStateFns = mapFn(mapper);
    // 对数据进行转换   
    const storeState:any = {};
    // 遍历key,将函数转换成computed的ref对象
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store:store});
        //转成ref
        storeState[fnKey] = computed(fn);
    });

    return storeState;
}

// 对actions和mutation进行映射处理
function mapAction(mapper:any,mapFn:Function){
    // 获取仓库
    const store = useStore();
    // 获取到对应的对象的functions: {name:function, age: function}
    const storeStateFns = mapFn(mapper);
    // 对数据进行转换   
    const storeState:any = {};
    // 遍历key,将函数转换成computed的ref对象
    Object.keys(storeStateFns).forEach(fnKey => {
        //转成ref
        storeState[fnKey] = storeStateFns[fnKey].bind({$store:store});
    });

    return storeState;
}


//是否有模块state
export function useState(moduleName:any,mapper?:any){
    let mapperFn:any = mapState;
    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    if(checkType(moduleName) === "[object String]" && moduleName.length > 0){
        console.log(createNamespacedHelpers(moduleName).mapState,'6666666')
        mapperFn = createNamespacedHelpers(moduleName).mapState;
    }

    return  useMapper(mapper,mapperFn);
}


//是否有模块Getters
export function useGetters(moduleName:any,mapper?:any){
    let mapperFn:any = mapGetters;
    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    if(checkType(moduleName) === "[object String]" && moduleName.length > 0){
        mapperFn = createNamespacedHelpers(moduleName).mapGetters;
    }

    return  useMapper(mapper,mapperFn);
}


//是否有模块Actions
export function useActions(moduleName:any,mapper?:any){
    let mapperFn:any = mapActions;
    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    if(checkType(moduleName) === "[object String]" && moduleName.length > 0){
        mapperFn = createNamespacedHelpers(moduleName).mapActions;
    }

    return  mapAction(mapper,mapperFn);
}

//是否有模块Mutations
export function useMutations(moduleName:any,mapper?:any){
    let mapperFn:any = mapMutations;
    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    if(checkType(moduleName) === "[object String]" && moduleName.length > 0){
        mapperFn = createNamespacedHelpers(moduleName).mapMutations;
    }

    return  mapAction(mapper,mapperFn);
}

