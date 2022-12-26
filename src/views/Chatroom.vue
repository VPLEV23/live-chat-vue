<template>
  <div class="container">
    <NavBar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import NavBar from "../components/NavBar.vue";
import getUser from "../composables/getUser";
import NewChatForm from "../components/NewChatForm.vue";

export default {
  name: "Chatroom",
  components: {
    NavBar,
    NewChatForm,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>
