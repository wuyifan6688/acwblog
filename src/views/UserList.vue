<template>
    <div>
     <ContentBase>
       <div class="card" v-for="use in user" :key="use.id" @click="open_profile(use.id)">
        <div class="card-body">
            <div class="row">
                <div class="col-1">
                    <img :src="use.photo" alt="" class="img-fluid">
                </div>
                <div class="col-11">
                  <div class="username">{{ use.username }}</div>
                  <div class="follower">{{ use.followerCount }}</div>
                </div>
            </div>
        </div>
       </div>
     </ContentBase>
    
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';

  import ContentBase from '@/components/ContentBase.vue';
  import $ from "jquery";
  import {ref} from "vue";
  import router from '@/router';
  export default {
  components:{
    ContentBase
  },
  setup(){
    const store=useStore();//忘记加括号
   
    let user=ref([]);
    $.ajax({
        url:"https://app165.acapp.acwing.com.cn/myspace/userlist/",
        type:"get",
        success(resp){
            user.value=resp;
        }
    })

    const open_profile=userId=>{
        if(store.state.user.is_login)
        {router.push({
            name:"UserProfile",
            params:{
                userId
            }
        })}
        else {
            router.push({name:"LoginView"})
        }
    }

    return {
        user,open_profile
    }
  }
  }
  </script>
  
  <style scoped>
  img{
    border-radius: 50%;
  }
  .username{
    font-weight: bold;
    height: 50%;
  }
  .follower{
    font-size: 12px;
    color: goldenrod;
    height:50%
  }
  .card{
    margin-top: 20px;
    cursor: pointer;
  }
  .card:hover{
    box-shadow:2px 2px 10px rgb(5, 28, 91) ;
    transition: 0.5s;
  }
  </style>