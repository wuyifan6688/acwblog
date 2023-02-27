<template>
    <div>
     <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo :user="user" @followme="follow" ></UserProfileInfo>
                <UserProfileWrite v-if="is_me" class="write" @sendme="sendit"></UserProfileWrite>
            </div>
                <div class="col-9">
                    <UserProfilePosts :postme="posts" :user="user"  @del="delone"></UserProfilePosts>
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
  import {computed, reactive}from "vue"
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
    headers:{
        "Authorization":"Bearer "+store.state.user.access
    },
    success(resp){
        user.id=resp.id;
        user.username=resp.username;
        user.photo=resp.photo;
        user.is_followed=resp.is_followed;
        user.followerCount=resp.followerCount
    }

  })

  $.ajax({
    url:"https://app165.acapp.acwing.com.cn/myspace/post/",
    type:"get",
    data:{
        user_id:userId
    },
    headers:{
        "Authorization":"Bearer "+store.state.user.access
    },
    success(resp){
        posts.posts=resp;
     
    },
    error(){
        console.log("failed")
    }
  })

   const sendit=(content)=>{
    posts.count++;
    posts.posts.unshift({
        id:posts.count,
        content:content
    });
    $.ajax({
        url:"https://app165.acapp.acwing.com.cn/myspace/post/",
        type:"post",
        data:{content:content},
        headers:{
        "Authorization":"Bearer "+store.state.user.access
    },
    })
   }



   const follow= ()=>{ 
    if(user.is_followed)user.followerCount--;
    else user.followerCount++;
    user. is_followed=!user.is_followed;
   
   }


   const delone=(id)=>{
    $.ajax({
        url:"https://app165.acapp.acwing.com.cn/myspace/post/",
        type:"delete",
        data:{
            post_id:id
        },
        headers:{
        "Authorization":"Bearer "+store.state.user.access
    },
   
    success(){console.log("go")}
    }),
     posts.posts=posts.posts.filter(post=>post.id!=id);
     posts.count=posts.posts.length//为什么前端必须删除：因为告诉服务器之后，自己并不会立即刷新删除
   }

   const is_me=computed(()=>userId==store.state.user.id)

   return {user,follow,posts,sendit,is_me,delone}//必须要双引号
  }
  }
  </script>
  
  <style>
  .write{
    margin-top: 20px;
  }
  </style>