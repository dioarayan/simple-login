<template>
  <div class="formBody">
    <section class="header">
      <img src="../../public/sdo_logo.png" alt="" />
    </section>
    <section class="main">
      <form action="" class="body">
        <h2>Log In</h2>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="pass" id="pass" placeholder="Password" />
        <button>Submit</button>
      </form>
      <section class="footer">
        <p>
          No account yet? <span><a href="/signup">Sign up!</a></span>
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
  setup() {},
};
</script>

<style>
.formBody {
  box-shadow: 5px 10px 12px #29292998;
  width: 350px;
  /* centering */
  position: absolute;
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

.header {
  background-color: rgb(255, 255, 255);
}

.header img {
  padding: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.main {
  background-color: #fcef5ce1;
  width: 100%;
  padding-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input,
button {
  border-radius: 10px;
  border: solid gray 1px;
  padding: 5px;
  margin: 4px 3px;
}

input {
  width: 80%;
  height: 2em;
}

button {
  background-color: #008f50;
  width: 82%;
  height: 3em;
  color: white;
}

.main .footer p {
  text-align: center;
}

footer p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
