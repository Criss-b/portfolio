<template>
  <div class="indexContainer">
    <div class="headerContainer">
      <div class="desc">
        <h1>CRISTINA BALLERINI</h1>
        <p>Front-End Developer</p>
      </div>
      <div class="logo">
        <img src="@/assets/img/logoGreen.svg" />
      </div>
    </div>
    <div class="spanContainer">
      <span class="span"></span>
    </div>
    <div class="contentContainer">
      <h2><b>PROGETTI</b></h2>
      <div class="projectsContainer">
        <projects :projects="projects"></projects>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/components/projects.vue";
export default {
  components: { projects },
  data() {
    return {
      projects: [
        {
          id: 1,
          hrefCard: "https://jovial-sopapillas-a33ef3.netlify.app/",
          srcCard: require("@/assets/img/pizza.webp"),
          imgDefault: require("@/assets/img/project.webp"),
          titleCard: "PIZZA LOVER",
          target: "_blank",
        },
        {
          id: 2,
          hrefCard: "https://astonishing-lamington-f4f1ca.netlify.app/#/",
          srcCard: require("@/assets/img/qr.webp"),
          imgDefault: require("@/assets/img/project.webp"),
          titleCard: "QR GENERATOR",
          target: "_blank",
        },
        {
          id: 3,
          hrefCard: "/wip",
          srcCard: require("@/assets/img/wip.webp"),
          imgDefault: require("@/assets/img/project.webp"),
          titleCard: "WORK IN PROGRESS",
          target: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.indexContainer {
  font-family: nenue;
  font-weight: 800;
  font-weight: bolder;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
}
.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.desc h1 {
  color: #023535;
  letter-spacing: 1px;
  font-size: 3.5rem;
}
.desc p {
  font-size: 25px;
  color: #347355;
  font-weight: 300;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo img {
  width: 200px;
  height: 250px;
}
.spanContainer {
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
.span {
  display: block;
  background-color: #023535;
  height: 5px;
  width: 80%;
}
.contentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}
.contentContainer h2 {
  color: #023535;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 3rem;
  margin-bottom: 80px;
}
.projectsContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 25%;
}
@media only screen and (max-width: 320px) {
  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .desc h1 {
    font-size: 25px;
  }
  .desc p {
    font-size: 20px;
    text-align: center;
  }
  .logo {
    align-items: center;
  }
  .logo img {
    width: 100px;
    height: 132.5px;
  }
  .contentContainer h2 {
    font-size: 30px;
  }
  .projectsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: auto;
  }
}
@media only screen and (min-width: 321px) and (max-width: 426px) {
  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .desc h1 {
    font-size: 25px;
  }
  .desc p {
    font-size: 20px;
    text-align: center;
  }
  .logo {
    align-items: center;
  }
  .logo img {
    width: 100px;
    height: 132.5px;
  }
  .contentContainer h2 {
    font-size: 30px;
  }
  .projectsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: auto;
  }
}
@media only screen and (min-width: 427px) and (max-width: 650px) {
  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .desc h1 {
    font-size: 40px;
  }
  .desc p {
    font-size: 25px;
  }
  .logo img {
    width: 150px;
    height: 198.75px;
  }
  .contentContainer h2 {
    font-size: 40px;
  }
  .projectsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: auto;
  }
}
@media only screen and (min-width: 651px) and (max-width: 1080px) {
  .desc h1 {
    font-size: 40px;
  }
  .desc p {
    font-size: 25px;
  }
  .logo img {
    width: 150px;
    height: 198.75px;
  }
  .contentContainer h2 {
    font-size: 40px;
  }
  .projectsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: auto;
  }
}
</style>
