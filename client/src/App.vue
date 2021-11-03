<template>
  <div id="app">
    <div class="block">
      <h1 class="title">İlk Vue blog siteme hoşgeldiniz!</h1>
      <p class="sub-title">Blog için Vue kullanımı örnek 1.0.0</p>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.block{
  max-width: 600px;
  margin:0 auto;
  text-align: center;
}
.title {
  font-family: "Verdana";
}
.sub-title {
  margin: 0px;
  font-family: "Verdana";
}
</style>