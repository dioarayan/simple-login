<template>
  <div class="bGround">
    <LogIn
      v-if="loginClicked"
      @sign-up="signUp" />
    <SignUp
      v-if="signupClicked"
      @log-in="logIn" />
  </div>
</template>

<script>
import { ref } from 'vue';

import LogIn from '../components/auth/LogIn.vue';
import SignUp from '../components/auth/SignUp.vue';

export default {
  components: { LogIn, SignUp },

  setup() {
    const loginClicked = ref(true);
    const signupClicked = ref(false);

    const signUp = () => {
      loginClicked.value = false;
      signupClicked.value = true;
    };

    const logIn = () => {
      loginClicked.value = true;
      signupClicked.value = false;
    };

    return { logIn, loginClicked, signUp, signupClicked };
  },
};
</script>

<style scoped>
/* #008F50 darker green
  #24B066 green
  #FCF05C yellow
  #9D9D9D gray */

.bGround {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url('../../public/IMG_8921.JPG');
  background-color: #008f50;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
}
</style>

