<template>
  <div class="container mx-auto px-4 bg-center">   
    <form id="form1" name="form1" >
    <div >
        <router-link to="/" class="btn-back">Geri Dön </router-link>
    </div>

    <div class="line-post-title">
      <label for="post-title" class="lbl"> Post Title </label>
      <input
        type="text"
        id="post-title"
        name="post-title"
        class="input_text"
        v-model="post.POST_TITLE"
      />
    </div>
    <div class="line-post-description">
      <label for="post-description" class="lbl">
        Post Description
      </label>
      <textarea
        type="text"
        id="post-description"
        name="post-description"
        class="input_text"
        rows="5"
        cols="56"
        v-model="post.POST_DESCRIPTION"
      />
    </div>
    <div class="line-post-sender">
      <label for="post-sender" class="lbl"> Post Sender </label>
      <input
        type="text"
        id="post-sender"
        name="post-sender"
        class="input_text"
        v-model="post.POST_SENDER"
      />
    </div>
    <div class="line-post-date">
      <label for="post-date" class="lbl"> Post Date </label>
      <input
        type="text"
        id="post-date"
        name="post-date"
        class="input_text"
        v-model="post.POST_DATE"
      />
    </div>
    <div class="line-post-slug">
      <label for="post-slug" class="lbl"> Post Slug </label>
      <input
        type="text"
        id="post-slug"
        name="post-slug"
        class="input_text"
        v-model="post.POST_SLUG"
      />
    </div>
    <div class="footer-buttons">
      <input
        id="btn-reset"
        type="reset"
        @click="btn_reset()"
        name="btn-reset"
        value="Reset"
        class="btn-primary"
      />
      <input
        id="btn-save"
        type="button"
        @click="btn_save()"
        name="btn-save"
        value="Save"
        class="btn-secondary"
      />
      
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Create",
  data() {
    return {
      post: {
        POST_TITLE: "",
        POST_DESCRIPTION: "",
        POST_SENDER: "",
        POST_DATE: "",
        POST_SLUG: "",
      },
    };
  },
  methods: {
    btn_save() {
      var data = {
        POST_TITLE: this.post.POST_TITLE,
        POST_DESCRIPTION: this.post.POST_DESCRIPTION,
        POST_SENDER: this.post.POST_SENDER,
        POST_DATE: this.post.POST_DATE,
        POST_SLUG: this.post.POST_SLUG,
      };
      axios.put("http://localhost:3000/create",data).then(response=>{
          console.log(response);
          if (response.data.message == "success")
          {
            alert(response.data.id + " has been created!");
            // this.$router.push({ name: "Home"});
            let route = this.$router.resolve({ path: "/" });
            window.open(route.href,"_self");
          }
      })
    },
    btn_reset(){
      this.post = [];
      // var wform = document.getElementById("form1");
      // wform.reset();
    }
  },
};
</script>
