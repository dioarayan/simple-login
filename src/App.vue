<template>
  <div class="bGround">
    <RouterView />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";

export default {
  components: { LoginPage },
  setup() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

/* #008F50 darker green
  #24B066 green
  #FCF05C yellow
  #9D9D9D gray */

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.bGround {
  background-image: url("../../public/IMG_8921.JPG");
  background-color: #008f50;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
}
</style>
