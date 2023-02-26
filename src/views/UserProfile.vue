<template>
    <div>
     <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo :user="user" @followme="follow" ></UserProfileInfo>
                <UserProfileWrite class="write" @sendme="sendit"></UserProfileWrite>
            </div>
                <div class="col-9">
                    <UserProfilePosts :postme="posts"></UserProfilePosts>
                </div>
            
        </div>
     </ContentBase>
    
    </div>
  </template>
  
  <script>
  import ContentBase from '@/components/ContentBase.vue';
  import UserProfileInfo from '@/components/UserProfileInfo.vue';
  import UserProfilePosts from "@/components/UserProfilePosts.vue";
  import UserProfileWrite from '@/components/UserProfileWrite.vue';
  import $ from "jquery"
  import {reactive}from "vue"
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  export default {
  components:{
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
     UserProfileWrite
  },
  setup(){
    const store=useStore();
    const route=useRoute();
  const user=reactive({});
  const posts=reactive({});
    const userId=route.params.userId

  $.ajax({
    url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",
    type:"get",
    data:{
        user_id:userId
    },
    Headers:{
        "Authorization":"Bearer "+store.state.user.access
    },
    success(resp){
        user.id=resp.id;
        user.name=resp.name;
        user.photo=resp.photo;
        user.is_followed=resp.is_followed;
        user.followerCount=resp.followerCount
    }

  })

  $.ajax({
    url:"https://app165.acapp.acwing.com.cn/myspace/post/",
    type:"get",
    Headers:{
        "Authorization":"Bearer "+store.state.user.access
    },
    success(resp){
        posts.posts=resp.post
    }
  })

   const sendit=(content)=>{
    posts.count++;
    posts.posts.unshift({
        id:posts.count,
        content:content
    })
   }
   const follow= ()=>{ 
    if(user.is_followed)user.followerCount--;
    else user.followerCount++;
    user. is_followed=!user.is_followed;
   
   }

   return {user,follow,posts,sendit}//必须要双引号
  }
  }
  </script>
  
  <style>
  .write{
    margin-top: 20px;
  }
  </style>