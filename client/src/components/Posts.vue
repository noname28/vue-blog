<template>
  <div class="posts">
    <router-link to="/create" class="back-button">Create New</router-link>
    <div class="post" v-for="post in posts" :key="post.POST_ID">
      <div class="post-title" @click="post_detail(post.POST_SLUG)">{{
        post.POST_TITLE
      }}</div>
      <span class="post-sender">{{ post.POST_SENDER }}</span>
      <p class="post-text">
        {{
          post.POST_DESCRIPTION.length > 200
            ? post.POST_DESCRIPTION.slice(0, 200) + "..."
            : post.POST_DESCRIPTION
        }}
      </p>
      <span class="post-date"> {{ post.POST_DATE }} </span>
      <span class="btn-delete"  @click="post_delete(post.POST_SLUG)" > SİL </span>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Posts",
  props: ["posts"],
  methods: {
    post_detail(slug) {
      this.$router.push("/post/" + slug);
    },
    post_delete(slug){
        axios.get("http://localhost:3000/delete/" + slug).then(response=>{
            console.log(response);
            let route = this.$router.resolve({ path: "/" });
            window.open(route.href,"_self");
        });
      }
  },
};
</script>

<style scoped>
.post {
  margin-top: 30px;
}
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
  display: block;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: indigo;
}
.post-title:hover{
  display: block;
  color: blueviolet;
  font-weight: bold;
}
.post-date {
  float: right;
  font-size: 14px;
  color: gray;
}
</style>
