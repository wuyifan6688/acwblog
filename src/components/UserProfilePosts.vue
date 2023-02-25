<template>
  <div class="card">
    <div class="card-body">
       <div v-for="post in postme.posts" :key="post.id">
     <div class="card wocao">
        <div class="card-body">{{ post.content }}</div>
     </div>   
    </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
    postme:{
        type:Object,
        required:true
    }
}
}
</script>

<style scoped>
.wocao{
    margin-bottom: 13px;
}
</style>