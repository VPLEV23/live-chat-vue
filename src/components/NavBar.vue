<template>
  <nav>
    <div>
      <p>Hey.... there display name here</p>
      <p class="email">Currently login in as.... email</p>
    </div>
    <button @click="handleClick">LogOut</button>
  </nav>
</template>
<script>
import useLogout from "../composables/useLogout";
export default {
  name: "NavBar",
  setup() {
    const { logout, error } = useLogout();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user log out");
      }
    };
    return { handleClick };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
