<template>
  <div class="formContainer">
    <section class="formHeader">
      <img
        src="../../public/sdo_logo.png"
        alt="" />
    </section>
    <section class="formBody">
      <form
        action=""
        class="body">
        <h2>Log In</h2>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email" />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Password" />
        <button>Submit</button>
      </form>
      <section class="footer">
        <p>
          No account yet?
          <span
            ><a
              href="#"
              @click="$emit('signUp')"
              >Sign up!</a
            ></span
          >
        </p>
      </section>
    </section>
  </div>
  <footer>
    <p>Copyright 2023</p>
  </footer>
</template>

<script>
export default {
  emits: ['signUp'],
};
</script>

<style scoped>
.formContainer {
  box-shadow: 5px 10px 12px #29292998;
  width: 300px;
  /* centering */
  position: abso4lute;
  left: 0;
  right: 0;
  top: 80px;
  margin-left: auto;
  margin-right: auto;
  /* stacking */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  width: 80%;
  height: 2em;
}
</style>

