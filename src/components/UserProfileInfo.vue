<template>
    <div class="card">
        <div class="cardbody">
            <div class="row">

        <div class="col-3">
            <img class="img-fluid" :src="user.photo" alt="">
        </div>

        <div class="col-9">
            <div class="username">{{user.username}} </div>
            <div class="userfans">粉丝数:{{ user.followerCount }}</div>
            <button v-if="user.is_followed" @click="follow" type="button" class="btn btn-primary">取消关注</button>
            <button v-else  type="button" @click="follow" class="btn btn-primary">+关注</button>
        </div>

    </div>
        </div>
    </div>
 
</template>

<script>
import { computed } from 'vue'


export default {
   name:"UserInfo",
props:{
    user:{type:Object,
        require:true
        
    }
},
setup(props,context){
    let fullname=computed(()=>props.user.lastname+" "+props.user.firstname);
    const follow=()=>{
        context.emit("followme");
    }

    return {fullname,follow}
}
}
</script>

<style scoped>

img{
    border-radius: 50%;
}
.username{
font-weight: bold;
}
.userfans{
    font-size: 12px;
    color: rgb(167, 10, 10);
}
button{
    padding: 2px 4px;
    font-size: 12px;
}
</style>