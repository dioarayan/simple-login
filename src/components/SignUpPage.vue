<template>
  <div class="signup">
    <section class="header">
      <img src="../../public/sdo_logo.png" alt="" />
    </section>
    <form action="" class="main">
      <h2>Sign Up</h2>
      <div class="formInputClass">
        <label for="firstName" class="labelInput">First Name: </label>
        <input type="text" id="firstName" placeholder="Juan" />
      </div>
      <div class="formInputClass">
        <label for="lastName" class="labelInput">Last Name: </label>
        <input type="text" id="lastName" placeholder="dela Cruz" />
      </div>
      <div class="formInputClass">
        <label for="email" class="labelInput">Email: </label>
        <input type="email" id="email" placeholder="juandelacruz@gmail.com" />
      </div>
      <div class="formInputClass">
        <label for="password" class="labelInput">Password: </label>
        <input type="password" id="password" placeholder="********" />
      </div>
      <div class="formInputClass">
        <label for="confirmPass" class="labelInput">Confirm Password: </label>
        <input type="password" id="confirmPass" placeholder="********" />
      </div>
      <div class="buttonsClass">
        <button type="submit">Submit</button>
      </div>
      <section class="footer">
        <p>
          Already have an account? <span><a href="/">Login!</a></span>
        </p>
      </section>
    </form>
  </div>
</template>

<style>
.signup {
  box-shadow: 5px 10px 12px #29292998;
  width: 500px;
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  margin-left: auto;
  margin-right: auto;
}

.formInputClass {
  width: 420px;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  margin: 2px 20px;
}

.formInputClass input {
  width: 65%;
}

.labelInput {
  width: 35%;
  text-align: right;
  line-height: 20px;
  /* height: 40px; */
}

.buttonsClass {
  width: 200px;
  text-align: right;
}
</style>
