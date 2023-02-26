<template>
    <div> <ContentBase>
        <div class="row justify-content-md-center">
            <div class="col-3">
            <form @submit.prevent="login">              
            <div class="mb-3">
                <label for="username" class="form-label">用户名</label>
                <input v-model="username" type="text" class="form-control" id="username" >
            
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">密码</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            
            <button type="submit" class="btn btn-primary">登录</button>
            </form>
            </div>
        </div>
    
        
     </ContentBase>
    
    </div>
  </template>
  
  <script>
  import {useStore} from "vuex"//store的s要大写
  import {ref} from "vue"
  import ContentBase from '@/components/ContentBase.vue';
  import router from "@/router/index"
  export default {
  components:{
    ContentBase
  },
  setup(){
    const store=useStore();
    let password=ref("")
    let username=ref("")
    const login=()=>{
        store.dispatch('login', {
            username:username.value, 
            password:password.value,
            success(){
                router.push({name:`UserList`})
            }
        })
    }
    

    return {
        password,username,login
    }
  }
  }
  </script>
  
  <style scoped>
  button{
    width: 100%;
  }
  
  </style>