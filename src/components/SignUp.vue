<template>
  <div class="formContainer">
    <section class="formHeader">
      <img
        src="../../public/sdo_logo.png"
        alt="" />
    </section>
    <section class="formBody">
      <form action="">
        <h2>Sign Up</h2>
        <div class="formInputClass">
          <label
            for="firstName"
            class="labelInput"
            >First Name:
          </label>
          <input
            type="text"
            id="firstName"
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
            placeholder="dela Cruz" />
        </div>
        <div class="formInputClass">
          <label
            for="email"
            class="labelInput"
            >Email:
          </label>
          <input
            type="email"
            id="email"
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
          <button type="submit">Submit</button>
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
</template>

<script>
export default {
  emits: ['logIn'],
};
</script>

<style scoped>
.formContainer {
  box-shadow: 5px 10px 12px #29292998;
  width: 400px;
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
  width: 220px;
}
</style>

