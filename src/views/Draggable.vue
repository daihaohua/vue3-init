<template>
  <div id="app">
    <!--使用draggable组件-->
    <From :name="state.name" id='from' class="from" />
    <button @click="state.name = '我是父级修改的数据'">修改父级数据</button>
    <div class="itxst">
      <div class="col">
        <div class="title">国内网站</div>
        <draggable
          v-model="state.arr1"
          group="site"
          animation="300"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
          item-key="id"
        >
          <template #item="{ element }">
            <div>{{ element.name }}</div>
          </template>
        </draggable>
      </div>
      <div class="col">
        <div class="title">你可以把左边的元素拖到右边</div>
        <draggable
          v-model="state.arr2"
          group="site"
          animation="100"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
          item-key="id"
        >
          <template #item="{ element }">
            <div>{{ element.name }}</div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
  
<script lang='ts' setup>
import { reactive } from "vue";
import draggable from "vuedraggable";
import From from "@/components/From";
const state = reactive({
  drag: false,
  list: [1, 2, 3, 4, 5, 6],
  arr1: [
    { id: 1, name: "www.itxst.com" },
    { id: 2, name: "www.jd.com" },
    { id: 3, name: "www.baidu.com" },
    { id: 4, name: "www.taobao.com" },
  ],
  arr2: [
    { id: 5, name: "www.google.com" },
    { id: 6, name: "www.msn.com" },
    { id: 7, name: "www.ebay.com" },
    { id: 8, name: "www.yahoo.com" },
  ],
  name:'我是父组件的内容'
});
const onStart = () => {};
const onEnd = () => {};
</script>
  
<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}

.chosenClass {
  background-color: #ccc !important;
  opacity: 1 !important;
}

.dragClass {
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}

.itxst {
  margin: 10px;
}

.title {
  padding: 6px 12px;
}

.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}

.col + .col {
  margin-left: 10px;
}
.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}

.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}

.item + .item {
  border-top: none;
  margin-top: 6px;
}
</style>