<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Log In</button>
  </form>
</template>
<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
export default {
  name: "SingupForm",
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>
<style></style>
