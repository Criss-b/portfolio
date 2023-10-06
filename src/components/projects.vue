<template>
  <div v-for="project in projects" :key="project.id" class="projectItem">
    <div class="card">
      <a :href="project.hrefCard" :target="project.target">
        <div class="card-image">
          <img
            @mouseover="changeImg($event)"
            @mouseout="resetImg($event)"
            @touchmove="changeImg($event)"
            @touchend="resetImg($event)"
            :src="project.imgDefault"
            :data-id="project.id"
            alt=""
          />
        </div>
      </a>
      <div class="media-content">
        <p class="title">{{ project.titleCard }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeImg(event) {
      const id = event.target.dataset.id;
      const project = this.projects.find((obj) => obj.id.toString() === id);
      if (project) {
        event.target.src = project.srcCard;
      }
    },
    resetImg(event) {
      const id = event.target.dataset.id;
      const project = this.projects.find((obj) => obj.id.toString() === id);
      if (project) {
        event.target.src = project.imgDefault;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.projectItem {
  padding: 25px;
}
.card {
  border-radius: 5px;
  box-shadow: 0px 0px 6px 2px #6c786b;
}
.card-image {
  width: 300px;
  height: 300px;
}
.card-image img {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 300px;
  height: 300px;
}
.media-content {
  background-color: #347355;
  padding-top: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.title {
  font-weight: 400;
  color: #91fa27;
  text-align: center;
  padding-bottom: 20px;
  font-size: 25px;
  text-shadow: 2px 2px 2px #347355;
}
@media only screen and (max-width: 350px) {
  .projectItem {
    padding: 25px 0;
  }
}
@media only screen and (max-width: 350px) {
  .card-image {
    width: 200px;
    height: 200px;
  }
  .card-image img {
    width: 200px;
    height: 200px;
  }
  .title {
    font-size: 15px;
  }
}
</style>
