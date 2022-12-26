<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import NavBar from "../components/NavBar.vue";
import getUser from "../composables/getUser";

export default {
  name: "Chatroom",
  components: {
    NavBar,
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
