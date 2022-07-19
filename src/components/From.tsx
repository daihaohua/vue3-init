import { defineComponent,ref,Ref ,watch }  from 'vue';

export default defineComponent({
    props:{
        name:{
            type:String,
            default:''
        }
    },
    setup(props,attr){
        console.log(props,attr)
        let title:Ref<string> = ref('标题')
        let arr:Ref<Array<any>> = ref([{name:1},{name:2},{name:3}])
        let arr1:Ref<Array<any>> = ref([1,2,3,4,5,6,7])
        let obj:Ref<any> = ref({name:'99999'})
        const click = ()=>{
            console.log('点击事件')
        }
        const chackInput = (e:any)=>{
            console.log(e.target.value);
        }

        // 监听父级数据不好
        watch(()=>props.name,()=>{
            console.log('监听到了')
        })
        return ()=>(
        <div>
            {
                arr.value.map((item:any,index:number)=>{
                    return (
                        <div>{item.name}</div>
                    )
                })
            }
            <button onClick={click}>点我进行操作</button>
            <input onInput={chackInput} />
            {arr1.value}
            {title.value}
        </div>
        )
    }
})