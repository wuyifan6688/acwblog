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
  import { reactive } from 'vue';
  export default {
  components:{
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
     UserProfileWrite
  },
  setup(){
   const user=reactive({
    id:1,
    username:"wyf",
    lastname:"w",
    firstname:"yf",
    followerCount:0,
    is_followed:false
   });

   const posts=reactive({
    count:3,
    posts:[
        {
        id:1,
        content:"你好"
    },
        {
        id:2,
        content:"w好"
    },
        {
        id:1,
        content:"t好"
    },
]
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