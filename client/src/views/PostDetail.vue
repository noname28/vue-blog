<template>
<div>
      <h1 class="post-title">{{post[0].POST_TITLE}}</h1>

      <span class="post-sender" >{{post[0].POST_SENDER}}</span>
      <p class="post-text">{{post[0].POST_DESCRIPTION}}
      </p>
      <span class="post-date"> {{post[0].POST_DATE}} </span>
      <router-link to="/" class="back-button">Geri Dön </router-link>
      <span class="btn-delete"  @click="post_delete(post[0].POST_SLUG)" > SİL </span>
</div>
</template>

<script>

import axios from "axios";

export default {
    name:"PostDetail",
    data : ()=>({
        post:[{"POST_TITLE":"","POST_SENDER":"","POST_DESCRIPTION":"","POST_DATE":"","POST_SLUG":""}],
    }),
    created(){
        axios.post("http://localhost:3000/post-detail/" + this.$route.params.slug).then(response=>{
            this.post = response.data.data;
        });
    },
    methods:{
      post_delete(slug){
        axios.get("http://localhost:3000/delete/" + slug).then(response=>{
            console.log(response);
            let route = this.$router.resolve({ path: "/" });
            window.open(route.href,"_self");
        });
      }
    },
}
</script>

<style scoped>
.post-sender {
  font-size: 20px;
  color: blueviolet;
  margin: 0 auto;
  font-family: "Calibri";
}

.post-text {
  font-size: 18px;
  margin: 10px auto;
  background: rgb(236, 227, 227);
  line-height: 1.7;
}
.post-title {
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  color: indigo;
}
.post-date {
  float: right;
  font-size: 14px;
  color: gray;
}
.back-button
{
    color:gray;
    font-size:20px;
    cursor:pointer;
}
</style>
