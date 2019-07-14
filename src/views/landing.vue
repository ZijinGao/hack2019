<template>
  <div>
    <carousel></carousel>
    <courseList v-bind:items="this.techs" til="tech_category.png"></courseList>
    <courseList v-bind:items="this.arts" til="art_category.png"></courseList>
    <courseList v-bind:items="this.econs" til="econ_category.png"></courseList>
    <courseList v-bind:items="this.envs" til="global_category.png"></courseList>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import carousel from "@/components/carousel.vue";
import courseList from "@/components/courseList.vue";

export default {
  name: "landing",
  components: {
    carousel,
    courseList
  },
  data() {
    return {
      techs: [
        { image: "tech1.png", id: 1 },
        { image: "tech2.png", id: 2 },
        { image: "tech3.png", id: 3 },
        { image: "tech4.png", id: 4 },
        { image: "tech1.png", id: 5 },
        { image: "tech4.png", id: 6 },
        { image: "tech3.png", id: 7 },
        { image: "tech2.png", id: 8 }
      ],
      arts: [
        { image: "art1.png", id: 1 },
        { image: "art2.png", id: 2 },
        { image: "art3.png", id: 3 },
        { image: "art1.png", id: 4 },
        { image: "art2.png", id: 5 },
        { image: "art3.png", id: 6 },
        { image: "art1.png", id: 7 },
        { image: "art2.png", id: 8 }
      ],
      econs: [
        { image: "econ1.png", id: 1 },
        { image: "econ2.png", id: 2 },
        { image: "econ3.png", id: 3 },
        { image: "econ4.png", id: 4 },
        { image: "econ1.png", id: 5 },
        { image: "econ3.png", id: 6 },
        { image: "econ2.png", id: 7 },
        { image: "econ4.png", id: 8 }
      ],
      envs: [
        { image: "env1.png", id: 1 },
        { image: "env2.png", id: 2 },
        { image: "env3.png", id: 3 },
        { image: "env2.png", id: 4 },
        { image: "env1.png", id: 5 },
        { image: "env3.png", id: 6 },
        { image: "econ2.png", id: 7 },
        { image: "env1.png", id: 8 }
      ]
    };
  }
};
</script>
