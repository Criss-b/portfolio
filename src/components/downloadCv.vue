<template>
  <button
    class="btn"
    @click="downloadFile"
    v-for="item in curriculum"
    :key="item"
  >
    <img class="img" :src="item.imgFile" />
    {{ item.buttonFileName }}
  </button>
</template>

<script>
export default {
  name: "downloadCv",
  props: {
    curriculum: {
      type: Array,
      required: true,
    },
  },
  methods: {
    downloadFile() {
      for (let i = 0; i < this.curriculum.length; i++) {
        const file = this.curriculum[i].pathFile;
        const link = document.createElement("a");
        link.href = `/${file}`;
        link.download = this.curriculum[i].nameDownload;
        link.click();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  font-family: nenue;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #c7a67e;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 15px;
  margin-left: 5%;
}
.btn:hover {
  opacity: 0.5;
}
.img {
  height: 50px;
  width: auto;
}
@media screen and (max-width: 750px) {
  .img {
    height: 40px;
    width: auto;
  }
}
@media screen and (max-width: 420px) {
  .img {
    height: 30px;
    width: auto;
  }
}
@media screen and (max-width: 320px) {
  .img {
    height: 25px;
    width: auto;
  }
}
</style>
