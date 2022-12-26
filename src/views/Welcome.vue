<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        Not account yet? <span @click="showLogin = flase">SignUp</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SingupForm @signup="enterChat" />
      <p>
        Already have an account?
        <span @click="showLogin = true">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SingupForm from "../components/SingupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { useRouter } from "vue-router";
export default {
  name: "Welcome",
  components: {
    SingupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
.welcome button {
  margin: 20px auto;
}
</style>
