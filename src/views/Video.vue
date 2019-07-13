<template>
  <div class="about">
    <div>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
      <el-container>
        <el-main>
          <vue-plyr ref="plyr">
            <video poster="poster.png" :src="videoURL">
              <source :src="videoURL" type="video/mp4" size="720" />
            </video>
          </vue-plyr>
        </el-main>
        <el-aside width="20%">
          <Drawer :content="currentDrawer" :vidTime="vidTime"></Drawer>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<style>
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
import { setTimeout } from "timers";

export default {
  name: "about",
  data: function() {
    return {
      posterURL: "",
      videoURL: "",
      discussions: [],
      attachments: [],
      currentDrawer: { discussions: [], attachments: [] },
      vidTime: 0
    };
  },
  components: {
    Drawer
  },
  computed: {},
  mounted() {
    this.getVideoInfo();
    setInterval(() => {
      this.updateDrawer();
    }, 1000);
  },
  methods: {
    updateDrawer() {
      console.log("Updating Drawer");
      let sec = this.$refs.plyr.player.currentTime;
      this.vidTime = sec;
      let threshold = 5;
      this.currentDrawer.discussions = this.discussions
        .filter(e => {
          return e.time < sec + 5 && e.time > sec - 5;
        })
        .sort((a, b) => {
          return a.time - b.time;
        });
      console.log(sec);
    },
    getVideoInfo() {
      console.log("Getting video info.");
      this.axios
        .get("http://10.209.11.173:8888/video?vid=1")
        .then(response => {
          console.log(response.data);
          this.videoURL = "http://10.209.11.173:8888/" + response.data.v.url;
          console.log(this.videoURL);

          this.discussions = response.data.comments;
        })
        .catch(e => console.log(e));
    }
  }
};
</script>


