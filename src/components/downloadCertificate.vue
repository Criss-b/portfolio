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
  flex-wrap: wrap;
  width: 100%;
}
.btn {
  font-family: nenue;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 160px;
  padding: 0 10px;
  background-color: transparent;
  border: none;
}
p {
  color: #023535;
  font-size: 1rem;
}
@media only screen and (max-width: 769px) {
  .certificateContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 15%;
  }
}
</style>
