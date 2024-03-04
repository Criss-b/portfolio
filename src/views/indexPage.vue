<template>
  <div class="indexContainer">
    <div class="headerContainer">
      <div class="headerBackground" :class="{ appear: isAppear }">
        <div class="desc">
          <div class="descBackground" :class="{ appear: isAppear }">
            <h1>CRISTINA BALLERINI</h1>
            <p>Junior Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contentContainer">
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
      isAppear: false,
      projects: [
        {
          id: 1,
          hrefCard: "https://cb-pizza-lover.netlify.app/",
          srcCard: require("@/assets/img/pizza.webp"),
          descCard: "Web app per pizzeria con prenotazione",
          target: "_blank",
        },
        {
          id: 2,
          hrefCard: "https://cb-qrcode-generator.netlify.app/",
          srcCard: require("@/assets/img/qr.webp"),
          descCard: "Web app per la generazione di qrcode tramite link",
          target: "_blank",
        },
        /* {
          id: 3,
          hrefCard: "/wip",
          srcCard: require("@/assets/img/wip.webp"),
          descCard: "Lavori in corso... (sito web associazione Oltrefossa)",
          target: "",
        }, */
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.isAppear = true;
    }, 1);
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: 100px 0 80px;
}
.headerBackground {
  position: relative;
  display: flex;
  align-items: center;

  background: repeating-linear-gradient(
    90deg,
    #ffffff 0px,
    #ffffff 250px,
    #f2ebe2 250px,
    #f2ebe2 550px,
    #ffffff 550px,
    #ffffff 800px
  );
  width: 800px;
  height: 300px;
  left: -700px;
  transition: left 1s ease-in-out;
}
.headerBackground.appear {
  left: 0;
  justify-content: center;
}
.descBackground {
  position: relative;
  z-index: 99;
  background-color: #e6d7c5;
  width: max-content;
  height: auto;
  right: -1050px;
  transition: right 1s ease-in-out;
}
.descBackground.appear {
  right: 0;
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.desc h1 {
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 3.5rem;
  z-index: 99;
  padding: 10px 10px 0;
  text-align: center;
}
.desc p {
  font-size: 25px;
  color: #ffffff;
  font-weight: 600;
  z-index: 99;
  padding: 0px 10px 10px;
  text-align: center;
}
.contentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 50px;
  background-color: #ece1d4;
}
.projectsContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 25%;
  width: 90%;
}
@media screen and (max-width: 1080px) {
  .desc h1 {
    font-size: 40px;
  }
  .desc p {
    font-size: 25px;
  }
  .contentContainer h2 {
    font-size: 40px;
  }
}
@media screen and (max-width: 884px) {
  .headerBackground {
    background: repeating-linear-gradient(
      90deg,
      #ffffff 0px,
      #ffffff 242px,
      #f2ebe2 242px,
      #f2ebe2 526px,
      #ffffff 526px,
      #ffffff 768px
    );
    width: 768px;
    height: 284px;
  }
  .desc h1 {
    font-size: 40px;
  }
  .desc p {
    font-size: 25px;
  }
  .contentContainer h2 {
    font-size: 40px;
  }
}
@media screen and (max-width: 430px) {
  .headerBackground {
    background: repeating-linear-gradient(
      90deg,
      #ffffff 0px,
      #ffffff 50px,
      #f2ebe2 50px,
      #f2ebe2 270px,
      #ffffff 270px,
      #ffffff 320px
    );
    width: 320px;
    height: 220px;
  }
  .desc h1 {
    font-size: 25px;
  }
  .desc p {
    font-size: 20px;
    text-align: center;
  }
  .contentContainer h2 {
    font-size: 30px;
  }
}
</style>
