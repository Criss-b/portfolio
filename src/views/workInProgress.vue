<template>
  <div class="container">
    <h1>CI STO LAVORANDO...</h1>
    <p>PRESTO ALTRI PROGETTI!</p>
  </div>
</template>

<script>
export default {
  name: "workInProgress",
};
</script>

<style lang="scss" scoped>
.container {
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c7a67e;
}
h1 {
  font-size: 80px;
  text-align: center;
}
p {
  font-size: 30px;
  text-align: center;
}
@media only screen and (max-width: 884px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 15px;
  }
}
</style>
