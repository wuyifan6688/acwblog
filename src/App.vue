<template>
  <div>
    <NavBar></NavBar>
    <router-view ></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import NavBar from "@/components/NavBar"

export default {
components:{
  NavBar,
 
}
}
</script>

<style>

</style>