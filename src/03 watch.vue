<script setup>
import { ref,watch } from 'vue'

const count=ref(0);
const nickname=ref("张三");

const changeCount=()=>{
  count.value++
};
const changeNickname=()=>{
  nickname.value="lisi"
};

watch([count,nickname],(newArr,OldArr)=>{
  console.log(newArr,OldArr,"kkkk")
},{
  immediate:true
}
);


const userInfo= ref({
  age:19,
  name:"mary"
});
const setUserInfo = ()=>{
  // 修改了userInfo.value watch检测不到变化  修改了对象的地址，才能检测到
  userInfo.value.age++;
  // userInfo.value({age:30,name:"hh"})
};
watch(userInfo,(newValue)=>{
  console.log(newValue,"==newValue")
},{
  // 修改了userInfo.value watch检测不到变化，加上deep：true 可以检测到
  deep:true,
});

// 监听对象中的某个属性
watch(
  ()=>userInfo.value.age,
  (newV,oldV)=>{
    console.log(newV,oldV,"==newV,oldV")
  }
)

</script>

<template>
  <div>{{count}}</div>
  <button @click="changeCount">改数字</button>
  <div>{{nickname}}</div>
  <button @click="changeNickname">改昵称</button>
  <div>-------------------</div>
  <div>{{userInfo}}</div>
  <button @click="setUserInfo">修改年龄</button>
</template>

<style scoped>
</style>
