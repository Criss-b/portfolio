<template>
  <div
    v-for="project in projects"
    :key="project.id"
    class="project"
    :id="project.id"
  >
    <div class="item">
      <div class="card" :class="{ fromSide: isAppear[project.id] }">
        <a :href="project.hrefCard" :target="project.target">
          <img :src="project.srcCard" :data-id="project.id" alt="" />
        </a>
      </div>
      <div class="backgroundContent">
        <div class="media-content">
          <p class="description" :class="{ fromTop: isAppear[project.id] }">
            {{ project.descCard }}
          </p>
        </div>
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
  data() {
    return {
      isAppear: {},
    };
  },
  methods: {
    handleScroll() {
      const halfInnerHeight = window.innerHeight / 2;
      this.projects.forEach((project) => {
        const element = document.getElementById(project.id);
        if (element) {
          const coord = element.getBoundingClientRect();
          const positionProject = coord.top + window.scrollY;
          if (window.scrollY >= positionProject - halfInnerHeight) {
            this.isAppear[project.id] = true;
          }
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: row;
  padding: 50px;
  width: 100%;
  height: auto;
}
.project:nth-child(odd) {
  justify-content: flex-start;
  margin: 25px 0;
}
.project:nth-child(even) {
  justify-content: flex-end;
  margin: 25px 0;
}
.item {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.project:nth-child(even) .item {
  flex-direction: row-reverse;
}
.card,
.card a {
  position: relative;
  display: flex;
  align-items: center;
  width: 432px;
  height: 432px;
  background-color: #ece1d4;
  z-index: 99;
}
.project:nth-child(odd) .card {
  left: -110px;
  transition: left 0.5s ease-in-out;
}
.project:nth-child(even) .card {
  right: -110px;
  transition: right 0.5s ease-in-out;
}
.project:nth-child(odd) .card.fromSide {
  left: 100px;
}
.project:nth-child(even) .card.fromSide {
  right: 100px;
}
img {
  width: 432px;
  height: 432px;
}
img:hover {
  opacity: 0.7;
}
.backgroundContent {
  position: relative;
  display: flex;
  width: 700px;
  height: 500px;
  background-color: #f8f5f0;
}
.project:nth-child(odd) .backgroundContent {
  right: 100px;
  justify-content: flex-end;
}
.project:nth-child(even) .backgroundContent {
  justify-content: flex-start;
  left: 100px;
}
.media-content {
  width: 60%;
  position: relative;
  display: flex;
  padding: 0 40px;
}
.description {
  position: relative;
  height: fit-content;
  font-weight: 600;
  color: #ab7f49;
  font-size: 18px;
  text-align: center;
  opacity: 0;
  top: 0;
  transition: top 1s ease-in-out;
}

.description.fromTop {
  top: 225px;
  opacity: 1;
}
.project:nth-child(even) .media-content {
  justify-content: right;
  text-align: right;
}
@media screen and (max-width: 768px) {
  .card {
    width: 350px;
    height: 350px;
  }
  img {
    width: 200px;
    height: 200px;
    margin: 0 10px;
  }
  .backgroundContent {
    width: 250px;
    height: 150px;
  }
}
@media only screen and (max-width: 426px) {
  .project {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .project:nth-child(odd),
  .project:nth-child(even) {
    justify-content: center;
  }
  .card {
    width: 200px;
    height: 200px;
  }
  img {
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }
  .backgroundContent {
    padding: 0 10px;
    width: 150px;
    height: 150px;
  }
  .description {
    font-size: 12px;
  }
  .media-content {
    padding: 0;
  }
}
</style>
