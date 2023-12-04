import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

export const useChannelStore = defineStore('channel',()=>{
  const channelList=ref([]);
  const getList = async () => {
    const { data : { data } } = await axios.get("http://geek.itheima.net/v1_0/channels");
    channelList.value=data.channels;
  } 

  return {
    channelList,
    getList
  }
},{
  // persist:true //开启当前模块的持久化
  persist:{
    key:"heima",
    storage:sessionStorage //默认存储在localStorage，可以设置，
    
  }
}
)