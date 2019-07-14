<template>
  <div id="container">
    <div id="container-inside" @click="goToCourse">
      <div id="left" class="slide-button" @click.stop="carouselClicked"></div>
      <el-carousel
        indicator-position="inside"
        height="500px"
        :autoplay="false"
        arrow="never"
        trigger="click"
        ref="carousel"
      >
        <el-carousel-item v-for="item in images" :key="item.id">
          <img :src="getImgUrl(item.image)" alt="image here" height="500px" />
        </el-carousel-item>
      </el-carousel>
      <div id="right" class="slide-button" @click.stop="carouselClicked"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/css/carousel.scss";
</style>

<script>
export default {
  name: "carousel",
  data() {
    return {
      images: [
        { image: "science.png", id: 1 },
        { image: "interaction.png", id: 2 },
        { image: "visualArt.png", id: 3 },
        { image: "science.png", id: 1 },
        { image: "interaction.png", id: 2 },
        { image: "visualArt.png", id: 3 },
        { image: "science.png", id: 1 },
        { image: "interaction.png", id: 2 },
        { image: "visualArt.png", id: 3 }
      ]
    };
  },
  methods: {
    getImgUrl: function(pic) {
      return require(`../assets/${pic}`);
    },
    goToCourse() {
      console.log(1);
      this.$router.push("/video");
    },
    carouselClicked: function(e) {
      const { screenX } = e;
      if (screenX > window.screen.width / 2) {
        this.$refs.carousel.next();
      } else {
        this.$refs.carousel.prev();
      }
    }
  }
};
</script>
