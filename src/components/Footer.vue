<template>
  <div class="footerContainer">
    <ul class="itemLink">
      <li class="linkedin">
        <a
          class="aContacts"
          href="http://www.linkedin.com/in/cristina-ballerini-b6213919b"
          target="_blank"
          ><img src="@/assets/img/linkedin.png" alt=""
        /></a>
      </li>
      <li class="mail">
        <a
          class="aContacts"
          href="mailto:cri.ballerini@gmail.com"
          target="_blank"
          ><img src="@/assets/img/mail.png" alt=""
        /></a>
      </li>
    </ul>
    <p class="credits">POWERED BY CB</p>
  </div>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>

<style lang="scss" scoped>
.footerContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
  height: auto;
}
.itemLink {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}
.aContacts {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  text-shadow: 2px 2px 2px #6c786b;
  font-weight: 300;
  padding: 0 10px;
}
.aContacts img {
  height: 40px;
  width: auto;
}
.credits {
  padding-top: 10px;
  color: white;
  font-size: 0.5rem;
  text-shadow: 2px 2px 2px #6c786b;
}
</style>
