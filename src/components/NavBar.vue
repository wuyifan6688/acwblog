<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 mb-2 bg-light text-dark ">
  <div class="container">
    <a class="navbar-brand" href="#">Myspace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name:`home`}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:`UserList`}">好友列表</router-link>
        </li>
       
      </ul>




      
    <ul class="navbar-nav" v-if="!$store.state.user.is_login">
      <li class="nav-item">
          <router-link class="nav-link" :to="{name:`LoginView`}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:`RegisterView`}">注册</router-link>
        </li>
    </ul>
    <ul class="navbar-nav" v-else>
      <li class="nav-item">
          <router-link class="nav-link" :to="{name:`UserProfile`,params:{userId:$store.state.user.id}}">{{$store.state.user.username}}</router-link>
        </li>
        <li class="nav-item">
<a  class="nav-link" style="cursor: pointer;" @click="logout"> 退出</a>
        </li>
    </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { useStore } from 'vuex';
export default {
setup(){
  const store=useStore();
  const logout=()=>{
    store.commit("logout")
  }


  return {
    logout
  }
}
}
</script>

<style>

</style>