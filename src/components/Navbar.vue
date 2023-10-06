<template>
  <div class="menuContainer">
    <div class="logoContainer">
      <RouterLink to="/">
        <img
          class="logo"
          src="@/assets/img/logoGreen1.svg"
          @click="clickTo({ name: 'index' })"
        />
      </RouterLink>
    </div>
    <div class="btnContainer">
      <RouterLink to="/">
        <button
          class="btn"
          :class="{ underline: $route.path === '/' }"
          @click="clickTo({ path: '/' })"
        >
          HOME
        </button>
      </RouterLink>

      <RouterLink to="/cv">
        <button
          class="btn"
          @click="clickTo({ path: '/cv' })"
          :class="{ underline: $route.path === '/cv' }"
        >
          CV
        </button>
      </RouterLink>

      <RouterLink to="/contatti">
        <button
          class="btn"
          @click="clickTo({ path: '/contatti' })"
          :class="{ underline: $route.path === '/contatti' }"
        >
          CONTATTI
        </button>
      </RouterLink>
    </div>
  </div>
  <div
    class="menuBurger"
    @click="toggleMenu"
    :class="{ 'is-active': menuActive }"
    @menuOff="menuOff($event)"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Nav-bar",
  computed: {
    ...mapState(["menuActive"]),
  },
  methods: {
    ...mapMutations(["SET_MENU_ACTIVE"]),
    toggleMenu() {
      this.SET_MENU_ACTIVE(!this.menuActive);
      if (this.menuActive) {
        this.$router.push({ name: "menu" });
      } else {
        this.$router.go(-1);
      }
    },
    clickTo(path) {
      this.SET_MENU_ACTIVE(false);
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.menuContainer {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
}

.btnContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  position: relative;
}

span {
  color: #347355;
}
.btn {
  background-color: transparent;
  border: none;
  color: #347355;
  font-family: nenue;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 15px;
}

.btn:hover {
  border-bottom: 1px solid #347355;
  cursor: pointer;
}
.underline {
  border-bottom: 1px solid #347355;
}
.menuBurger {
  position: absolute;
  right: 20px;
  top: 20px;
  display: inline-block;
  cursor: pointer;
  z-index: 4;
}
.menuBurger span {
  display: block;
  background-color: #347355;
  width: 30px;
  height: 3px;
  margin: 5px 0;
}
.menuBurger.is-active span:nth-child(2) {
  opacity: 0;
}
.menuBurger.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.menuBurger.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
@media only screen and (max-width: 964px) {
  .btnContainer {
    display: none;
  }
  .logoContainer {
    padding: 0;
  }
  .logo {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 64px;
    height: 64px;
  }
}
@media only screen and (min-width: 965px) {
  .menuBurger {
    display: none;
  }
  .logoContainer {
    display: none;
  }
}
@media only screen and (max-width: 317px) {
  .logo {
    width: 40px;
    height: 80px;
    margin-left: 0;
  }
}
@media only screen and (min-width: 318px) and (max-width: 600px) {
  .logo {
    margin-left: 0;
  }
}
@media only screen and (min-width: 601px) and (max-width: 768px) {
  .logo {
    margin-left: 0;
  }
}
</style>
