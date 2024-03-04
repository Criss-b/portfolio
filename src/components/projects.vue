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
          if (
            window.scrollY >= positionProject - halfInnerHeight &&
            window.innerWidth >= 768
          ) {
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
  position: relative;
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
  z-index: 99;
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
@media screen and (max-width: 1080px) {
  .card,
  .card a {
    width: 380px;
    height: 380px;
  }
  img {
    width: 380px;
    height: 380px;
  }
}
@media screen and (max-width: 884px) {
  .card,
  .card a {
    width: 200px;
    height: 200px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  .project:nth-child(odd) .card {
    left: -80px;
  }
  .project:nth-child(even) .card {
    right: -80px;
  }
  .backgroundContent {
    width: 300px;
    height: 300px;
  }
  .project:nth-child(odd) .backgroundContent {
    right: 50px;
  }
  .project:nth-child(even) .backgroundContent {
    left: 50px;
  }

  .description.fromTop {
    top: 120px;
  }
  .description {
    font-size: 15px;
  }
}
@media screen and (max-width: 430px) {
  .item {
    flex-direction: column;
    justify-content: center;
  }
  .project:nth-child(odd) .item {
    flex-direction: column;
  }
  .project:nth-child(even) .item {
    flex-direction: column;
  }
  .project:nth-child(odd) .card {
    left: 0px;
  }
  .project:nth-child(even) .card {
    right: 0px;
  }
  .backgroundContent {
    height: 100px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .project:nth-child(odd) .backgroundContent {
    right: 0px;
    top: -50px;
  }
  .project:nth-child(even) .backgroundContent {
    justify-content: flex-end;
    left: 0px;
    top: -50px;
  }
  .description {
    font-size: 12px;
    opacity: 1;
    padding-bottom: 10px;
  }
  .media-content {
    padding: 0;
  }
}
</style>
