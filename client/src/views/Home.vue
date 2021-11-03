<template>
  <div class="container">
    <Posts :posts="posts"/>
  </div>
</template>

<script>
import Posts from "@/components/Posts";
import axios from "axios";

export default {
  name:"Home",
  data : ()=>({
    posts:[],
  }),
  components:
  {
    Posts
  },
  created(){
    // alert("sayfa yüklendi!");
    axios.get("http://localhost:3000/posts").then(res=>{
      this.posts = res.data.data;
      // console.log(res.data);
    })
  }, 
}
</script>

<style>
.container{
  max-width: 600px;
  margin:0 auto;

}
</style>