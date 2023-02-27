<template>
    <div> <ContentBase>
        <div class="row justify-content-md-center">
            <div class="col-3">
            <form @submit.prevent="register">              
            <div class="mb-3">
                <label for="username" class="form-label">用户名</label>
                <input v-model="username" type="text" class="form-control" id="username" >
            
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">密码</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">确认密码</label>
                <input v-model="confirm" type="password" class="form-control" id="password">
            </div>
            <span>{{ tt}}</span>
            <button type="submit" class="btn btn-primary">登录</button>
            </form>
            </div>
        </div>
    
        
     </ContentBase>
    
    </div>
  </template>
  
  <script>

  import {ref} from "vue"
  import { useStore } from "vuex";
  import router from "@/router"//不是useroute
  import $ from "jquery"
  import ContentBase from '@/components/ContentBase.vue';

  export default {
  components:{
    ContentBase
  },
  setup(){
   
    let password=ref("")
    let username=ref("")
    let confirm=ref("")
    let tt=ref("")
    const store =useStore();
    const register=()=>{
       $.ajax({
        url:"https://app165.acapp.acwing.com.cn/myspace/user/",
        type:"post",
        data:{
            username:username.value,
            password:password.value,
            password_confirm:confirm.value
        },
        success(resp){
            tt.value    =resp.result,
            console.log(resp)
            store.dispatch("login",{
                username:username.value,
                password:password.value,//注意ref需要value
                success(){
                router.push({name:"UserList"})
            }

            });
           


        },
        error(resp){
            tt=resp
        }
       })
    }
    

    return {
        password,username,confirm,register,tt
    }
  }
  }
  </script>
  
  <style scoped>
  button{
    width: 100%;
  }
  
  </style>