<template>
  <div class="card">
    <div class="card-body">
    
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">发帖区</label>
  <textarea  v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button @click="sendthis" type="button" class="btn btn-primary send">发帖</button>
</div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
setup(props,context){
    let content=ref("");
    const sendthis=()=>{
        context.emit("sendme",content.value)
        content.value=""
    }


    return {
        sendthis,content
    }
}
}
</script>

<style>
.send{
    margin-top: 20px;
}
</style>