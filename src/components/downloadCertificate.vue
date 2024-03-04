<template>
  <div class="certificateContainer">
    <button
      class="btn"
      @click="downloadFile(id)"
      v-for="(item, id) in certificate"
      :key="id"
    >
      <img class="img" :src="item.imgFile" />
      <p>{{ item.fileName }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "downloadCertificate",
  props: {
    certificate: {
      type: Array,
      require: true,
    },
  },
  methods: {
    downloadFile(id) {
      const file = this.certificate[id].pathFile;
      const link = document.createElement("a");
      link.href = `/${file}`;
      link.download = this.certificate[id].fileName;
      link.click();
    },
  },
};
</script>

<style lang="scss" scoped>
.certificateContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 5% 10%;
}
.btn {
  font-family: nenue;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 150px;
  padding: 0 5px;
  background-color: transparent;
  border: none;
}
p {
  color: #c7a67e;
  font-size: 0.9rem;
  font-weight: 600;
}
.btn:hover {
  opacity: 0.5;
}
@media screen and (max-width: 884px) {
  .certificateContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
}
@media screen and (max-width: 430px) {
  .img {
    height: 40px;
    width: auto;
  }
}
</style>
