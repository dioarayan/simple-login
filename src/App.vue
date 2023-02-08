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
import LogIn from './components/LogIn.vue';
import SignUp from './components/SignUp.vue';

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

<style>
/* #008F50 darker green
  #24B066 green
  #FCF05C yellow
  #9D9D9D gray */
</style>

