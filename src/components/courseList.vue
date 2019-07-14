<template>
  <div id="dummy">
    <div id="container">
      <div id="category">
        <img :src="getImgUrl(this.$props.til)" style="margin-left:0" />
      </div>
      <div v-for="item in this.$props.items" class="zoom">
        <img :src="getImgUrl(item.image)" alt="images here" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/courseList.scss";
</style>

<script>
export default {
  name: "courseList",
  props: {
    items: Array,
    til: String
  },
  mounted() {
    this.con();
  },
  methods: {
    getImgUrl(pic) {
      return require(`../assets/${pic}`);
    },
    con() {
      console.log(this.$props);
    }
  }
};
</script>
