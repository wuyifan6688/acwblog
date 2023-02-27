<template>
  <div class="card">
    <div class="card-body">
       <div v-for="post in postme.posts" :key="post.id">
     <div class="card wocao">
        <div class="card-body">{{ post.content }}<button v-if="is_me" type="button"  @click="del(post.id)"   class="btn btn-danger">删除</button></div>
     </div>   
    </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {computed}from "vue"
export default {
props:{
    postme:{
        type:Object,
        required:true
    },
    user:{
        type:Object,
        required:true
    }
},
setup(props,context){
    const store=useStore();
    let is_me=computed(()=>store.state.user.id==props.user.id)

    const del=id=>{
        context.emit("del",id)//上一行的del是触发的事件，需要用emit再触发父亲左边的定义事件
        console.log("hhh")
    }
    return {store,is_me,del}
}
}
</script>

<style scoped>
.wocao{
    margin-bottom: 13px;
}
.btn{
    float: right;
}
</style>