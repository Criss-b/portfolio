<template>
  <!-- <div class="spanContainer">
    <span class="span"></span>
  </div> -->
  <div v-if="visible" class="footerContainer">
    <div class="links">
      <ul class="itemLink">
        <li>
          <a
            class="aContacts"
            href="mailto:cri.ballerini@gmail.com"
            target="_blank"
            ><img
              src="@/assets/img/mail.png"
              alt=""
            />cri.ballerini@gmail.com</a
          >
        </li>
        <li>
          <a
            class="aContacts"
            href="http://www.linkedin.com/in/cristina-ballerini-b6213919b"
            target="_blank"
            ><img src="@/assets/img/linkedin.png" alt="" />LinkedIn</a
          >
        </li>
        <li>
          <a class="aContacts" href="https://github.com/Criss-b" target="_blank"
            ><img src="@/assets/img/github.png" alt="" />GitHub</a
          >
        </li>
      </ul>
    </div>
    <p class="credits">COPYRIGHT © CB 2024</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "footerComponent",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    ...mapState(["menuActive"]),
    control() {
      if (this.menuActive) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footerContainer {
  background: linear-gradient(
    0deg,
    rgba(242, 235, 226, 1) 0%,
    rgba(248, 245, 240, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 180px 0px 80px;
  width: 100%;
  height: auto;
}
.links {
  width: 100%;
  margin-bottom: 80px;
}
.itemLink {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-grow: 0;
  list-style: none;
}
.itemLink li {
  flex-basis: 220px;
}
.aContacts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  color: #c7a67e;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
}
.aContacts:hover {
  opacity: 0.5;
}
.aContacts img {
  height: 20px;
  width: auto;
}
.credits {
  padding-top: 10px;
  color: #c7a67e;
  font-size: 12px;
  font-weight: 600;
}
@media screen and (max-width: 768px) {
  .itemLink {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .itemLink li {
    flex-basis: 0;
  }
}
</style>
