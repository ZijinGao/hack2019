<template>
  <pdf scale="page-width" src="http://localhost:8080/demo.pdf" v-bind:page="this.$props.page">
    <template slot="loading">loading content here...</template>
  </pdf>
</template>

<script>
import pdf from "pdfvuer";

export default {
  props: {
    page: Number,
    videoTime: Number
  },
  mounted() {
    console.log(this.videoTime);
  },
  name: "PDFCard",
  components: {
    pdf
  }
};
</script>

<style scoped>
</style>
