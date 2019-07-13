<template>
  <div class="about">
    <div>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
      <el-container>
        <el-main class="videoWrapper">
          <vue-plyr ref="plyr">
            <video id="player" poster="poster.png" controls :src="videoURL">
              <source controls :src="videoURL" type="video/mp4" size="720" />
            </video>
            <div>
              <el-button plain @click="open2">右上角</el-button>
            </div>
          </vue-plyr>
        </el-main>
        <el-aside width="20%">
          <Drawer class="drawer"></Drawer>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<style>
.drawer {
  padding-top: 20px;
}

.videoWrapper {
  padding-top: 20px;
}
.popup {
  background-color: blue;
  position: absolute;
  z-index: 999999;
  top: 200px;
}


.el-notification {
  position: absolute;
  left: 55%;
  bottom: 10%;
}
</style>

<script>
// @ is an alias to /src
import Drawer from "../components/Drawer.vue";

export default {
  name: "about",
  data: function() {
    return {
      posterURL: "",
      videoURL:
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
      discussions: [],
      attachments: []
    };
  },
  components: {
    Drawer
  },
  mounted() {
    this.getVideoInfo();
  },
  methods: {
    getVideoInfo() {
      console.log("Getting Vid INFO");
      console.log(this.videoURL);
    },

    open2() {
      this.$notify({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right"
      });
    }
  }
};
</script>


