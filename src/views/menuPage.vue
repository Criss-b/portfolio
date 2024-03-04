<template>
  <div class="containerMenu">
    <RouterLink to="/">
      <button @click="clickTo({ name: 'index' })">HOME</button>
    </RouterLink>

    <RouterLink to="/cv">
      <button @click="clickTo({ name: 'cv' })">CV</button>
    </RouterLink>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "menuPage",
  methods: {
    ...mapMutations(["SET_MENU_ACTIVE"]),
    clickTo(to) {
      this.SET_MENU_ACTIVE(false);
      this.$router.push(to);
    },
  },
};
</script>

<style lang="scss" scoped>
.containerMenu {
  letter-spacing: 1px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding-top: 50px;
}

button {
  background-color: transparent;
  border: none;
  color: #c7a67e;
  font-family: nenue;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
}
@media only screen and (max-width: 884px) {
  button {
    font-size: 30px;
  }
}
@media only screen and (max-width: 768px) {
  button {
    font-size: 40px;
  }
}
@media only screen and (max-width: 430px) {
  button {
    font-size: 30px;
  }
}
</style>
