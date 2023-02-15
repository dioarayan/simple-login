<template>
  <!-- <div class="wrapper"> -->
  <div class="formContainer">
    <section class="formHeader">
      <img
        src="../../../../public/sdo_logo.png"
        alt="" />
    </section>
    <section class="formBody">
      <form @submit.prevent="submitForm">
        <h2>Sign Up</h2>
        <!-- <div class="formInputClass">
            <label
              for="firstName"
              class="labelInput"
              >First Name:
            </label>
            <input
              type="text"
              id="firstName"
              v-model.trim="firstName"
              placeholder="Juan" />
          </div>
          <div class="formInputClass">
            <label
              for="lastName"
              class="labelInput"
              >Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              v-model.trim="lastName"
              placeholder="dela Cruz" />
          </div> -->
        <div class="formInputClass">
          <label
            for="email"
            class="labelInput"
            >Email:
          </label>
          <input
            type="email"
            id="email"
            v-model.trim="email"
            placeholder="juandelacruz@gmail.com" />
        </div>
        <div class="formInputClass">
          <label
            for="password"
            class="labelInput"
            >Password:
          </label>
          <input
            type="password"
            id="password"
            v-model.trim="password"
            placeholder="********" />
        </div>
        <div class="formInputClass">
          <label
            for="confirmPass"
            class="labelInput"
            >Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPass"
            placeholder="********" />
        </div>
        <div class="buttonsClass">
          <button type="submit">Sign up!</button>
        </div>
        <div class="buttonsClass">
          <button type="submit">Sign up with Google</button>
        </div>
        <section class="footer">
          <p>
            Already have an account?
            <span
              ><a
                href="#"
                @click="$emit('logIn')"
                >Log In!</a
              ></span
            >
          </p>
        </section>
      </form>
    </section>
  </div>

  <!-- <div class="formContainer">
      <h1>Users</h1>
      <ul v-if="hasUsers">
        <li
          v-for="user in users"
          :key="user.id">
          {{ user.firstName + ' ' + user.lastName }}
        </li>
      </ul>
      <div v-else>No Users</div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

export default {
  emits: ['logIn'],
  setup() {
    const store = useStore();

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');

    const users = computed(() => {
      return store.getters.users;
    });

    const hasUsers = computed(() => {
      return store.getters.hasUsers;
    });

    const submitForm = () => {
      const formData = {
        first: firstName.value,
        last: lastName.value,
        email: email.value,
        pass: password.value,
      };
      return store.dispatch('addUser', formData);
    };
    return {
      firstName,
      lastName,
      email,
      password,
      users,
      hasUsers,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* .wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
} */

.formContainer {
  box-shadow: 5px 10px 12px #29292998;
  width: 380px;
  background-color: #fcef5ce1;
}

/* input {
  width: 220px;
} */
</style>

