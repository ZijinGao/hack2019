<template>
  <pdf scale="page-width" :src="this.$props.pdfURL" v-bind:page="this.$props.page">
    <template slot="loading">loading content here...</template>
  </pdf>
</template>

<script>
import pdf from "pdfvuer";

export default {
  props: {
    page: Number,
    videoTime: Number,
    pdfURL: String
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
