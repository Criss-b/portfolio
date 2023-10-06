<template>
  <div class="cvContainer">
    <div class="titleContainer">
      <h1 class="title-h1">CV</h1>
      <span class="colorCv"></span
      ><downloadCv :curriculum="curriculum"></downloadCv>
    </div>

    <div class="introduction">
      <p>
        Studio per diventare Front-End developer, ho competenze in Javascript ed
        i relativi linguaggi di markup HTML e CSS. Inoltre, mi piace sviluppare
        web app a single page con il framework VueJS.
      </p>
    </div>
    <div>
      <span class="colorTitle">
        <h2 class="title-h2">LA MIA ESPERIENZA</h2>
      </span>
    </div>
    <div class="content">
      <ul>
        <li class="li">2020-2022</li>
        <li class="li">Impiegata back office</li>
        <li><em>Rivarolo Mantovano MN</em></li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li class="li">2017-2019</li>
        <li class="li">Impiegata front/back office</li>
        <li><em>Casalmaggiore CR</em></li>
      </ul>
    </div>
    <div>
      <span class="colorTitle">
        <h2 class="title-h2">STUDI</h2>
      </span>
    </div>
    <div class="content">
      <ul>
        <li class="li">2010-2015</li>
        <li class="li">Perito informatico</li>
        <li><em>Casalmaggiore CR</em></li>
      </ul>
    </div>
    <div>
      <span class="colorTitle">
        <h2 class="title-h2">ATTESTATI</h2>
      </span>
    </div>
    <div class="content">
      <div>
        <downloadCertificate :certificate="certificate"></downloadCertificate>
      </div>
    </div>
  </div>
</template>

<script>
import downloadCv from "@/components/downloadCv.vue";
import downloadCertificate from "@/components/downloadCertificate.vue";
export default {
  components: {
    downloadCv,
    downloadCertificate,
  },
  data() {
    return {
      curriculum: [
        {
          pathFile: "CV.pdf",
          buttonFileName: "Scarica CV",
          nameDownload: "CV Ballerini Cristina",
          imgFile: require("@/assets/img/curriculum.png"),
        },
      ],
      certificate: [
        {
          id: 1,
          pathFile: "Corso1.pdf",
          fileName: "HTML e CSS",
          imgFile: require("@/assets/img/certificate.png"),
        },
        {
          id: 2,
          pathFile: "Corso2.pdf",
          fileName: "Introduzione JS",
          imgFile: require("@/assets/img/certificate.png"),
        },
        {
          id: 3,
          pathFile: "Corso3.pdf",
          fileName: "Gestione dati JS",
          imgFile: require("@/assets/img/certificate.png"),
        },
        {
          id: 4,
          pathFile: "Corso4.pdf",
          fileName: "Programmazione asincrona JS",
          imgFile: require("@/assets/img/certificate.png"),
        },
        {
          id: 5,
          pathFile: "Corso5.pdf",
          fileName: "Introduzione Vue js",
          imgFile: require("@/assets/img/certificate.png"),
        },
        {
          id: 6,
          pathFile: "Corso6.pdf",
          fileName: "Vue js per SPA",
          imgFile: require("@/assets/img/certificate.png"),
        },
        {
          id: 7,
          pathFile: "Corso7.pdf",
          fileName: "Vue js 3",
          imgFile: require("@/assets/img/certificate.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cvContainer {
  background-size: cover;
  min-height: 100vh;
  color: #023535;
  letter-spacing: 1px;
}
.titleContainer {
  z-index: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 60px;
}
.title-h1 {
  font-size: 140px;
  z-index: 2;
  position: relative;
  bottom: 75px;
  left: 10px;
  text-shadow: 2px 2px 2px #347355;
  font-weight: 300;
}
.colorCv {
  z-index: 1;
  display: block;
  background-color: #3b8c66;
  height: 150px;
  width: 90%;
  margin-left: -20%;
}
.introduction {
  text-align: center;
  margin: 5% 20% 10%;
  width: 60%;
}
.introduction p {
  font-weight: 500;
  font-size: 30px;
  color: #023535;
}
.title-h2 {
  font-size: 65px;
  font-weight: 300;
  text-shadow: 2px 2px 2px #347355;
  margin-left: 10px;
}
.colorTitle {
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  background-color: #3b8c66;
  height: 100px;
  width: 90%;
  right: 0;
}
.content {
  margin: 5% 0 20%;
}
.content ul {
  margin-top: 10%;
  margin-bottom: -13.5%;
}
.content li {
  z-index: 2;
  list-style: none;
  margin-left: 15%;
  font-size: 30px;
}
.li {
  color: #023535;
}
em {
  color: #3b8c66;
}
.content li:last-child {
  margin-bottom: 25%;
}
.content div {
  margin-top: 10%;
  margin-bottom: -13.5%;
}
.content div:last-child {
  margin-bottom: 25%;
}
@media only screen and (max-width: 320px) {
  .title-h1 {
    font-size: 60px;
    margin-top: 10px;
    margin-bottom: -70px;
  }
  .colorCv {
    height: 70px;
    width: 80%;
    margin-left: -40%;
  }
  .introduction {
    margin: 20% 5%;
    width: 90%;
  }
  .introduction p {
    font-size: 16px;
  }
  .title-h2 {
    font-size: 22px;
  }
  .colorTitle {
    height: 50px;
    width: 80%;
  }
  .content ul {
    margin-top: 10%;
    margin-bottom: 13.5%;
    margin-left: 25%;
  }
  .content {
    margin-left: 0;
    margin-bottom: 10%;
  }
  .content li {
    margin-left: -10%;
    font-size: 16px;
  }
  .content li:last-child {
    margin-bottom: 35%;
  }
}
@media only screen and (min-width: 321px) and (max-width: 600px) {
  .title-h1 {
    font-size: 90px;
    margin-top: 50px;
  }
  .colorCv {
    height: 100px;
    width: 80%;
    margin-left: -35%;
  }
  .introduction {
    margin: 0 10% 10% 10%;
    width: 80%;
  }
  .introduction p {
    font-size: 15px;
  }
  .title-h2 {
    font-size: 25px;
  }
  .colorTitle {
    height: 60px;
    width: 80%;
  }
  .content li {
    font-size: 15px;
  }
  .content li:last-child {
    margin-bottom: 35%;
  }
}

@media only screen and (min-width: 601px) and (max-width: 890px) {
  .title-h1 {
    font-size: 90px;
    margin-top: 50px;
  }
  .colorCv {
    height: 100px;
    width: 80%;
  }
  .introduction {
    margin: 0 10% 5%;
    width: 80%;
  }
  .introduction p {
    font-size: 20px;
  }
  .title-h2 {
    font-size: 35px;
  }
  .colorTitle {
    height: 70px;
    width: 80%;
  }
  .content li {
    font-size: 20px;
  }
  .content li:last-child {
    margin-bottom: 30%;
  }
}
</style>
