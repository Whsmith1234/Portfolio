<template>
<div id="portfolio">
  <br><br>
    <h1 class = "uk-text-light uk-text-primary" id = "name">Portfolio</h1>
      <div class="uk-container">
        <div
          class="uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="masonry: true"
        >
          <div class="item" v-for="project in projects" :key="project">
            <HelloWorld
              :link="project.link"
              :code ="project.code"
              :name="project.name"
              :image="project.image"
              :tags="project.tags"
              :description="project.description"
            />
          </div>
        </div>
      </div>
</div>
</template>
<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  name: "Portfolio",
   components: {
    HelloWorld,
  },
  props: {
    projects: Array,
  },
};
</script>