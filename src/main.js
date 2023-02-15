import { createApp } from 'vue';
import App from './App.vue';
import store from './components/store/modules/users.js';
import router from './router.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDApIXS4aFy0QZ3khVXFLXeIOjkDk62rMg",
  authDomain: "simple-login-c23df.firebaseapp.com",
  projectId: "simple-login-c23df",
  storageBucket: "simple-login-c23df.appspot.com",
  messagingSenderId: "1096088641316",
  appId: "1:1096088641316:web:7570ed53a0a7ed2170ddb1"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');

