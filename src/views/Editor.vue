<template>
  <div class="about">
    <div>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
      <el-container style="padding-right: 0">
        <el-main class="videoWrapper">
          <vue-plyr ref="plyr">
            <video id="player" poster="poster.png" controls :src="videoURL">
              <source controls :src="videoURL" type="video/mp4" size="720" />
            </video>
          </vue-plyr>
          <el-upload
            class="upload"
            accept="pdf"
            drag
            :action="addr+this.videoTime"
            :on-success="uploadSuccess"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Drag and Drop, or
              <em>Click to Upload</em>
            </div>
          </el-upload>
        </el-main>
        <el-aside width="50%">
          <img :src="getImgUrl('greeting.png')" class="placeholder" v-if="!this.isUploaded" />
          <PDFCard
            v-if="this.isUploaded"
            :page="1"
            :pdfURL="this.pdfURL"
            :videoTime="videoTime"
            class="pdf"
          />
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<style>
.upload {
  padding-top: 20px;
}

.placeholder {
  padding-top: 20px;
  width: 90%;
}

.pdf {
  width: 100%;
  margin: 20px;
  height: 500px;
  overflow-x: hidden;
}

.pdf::-webkit-scrollbar {
  display: none;
}

.drawer {
  padding-top: 20px;
}

.videoWrapper {
  padding-top: 20px;
  padding-right: 0;
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
import PDFCard from "../components/PDFCard.vue";
import { setInterval } from "timers";

export default {
  name: "about",
  data: function() {
    return {
      posterURL: "",
      videoURL: "",
      discussions: [],
      attachments: [],
      isUploaded: false,
      pdfURL: "",
      videoTime: 0,
      addr:
        "http://localhost:8080/upload/pdf?page=" +
        parseInt(Math.random() * 3) +
        "&vid=1&time="
    };
  },
  components: {
    Drawer,
    PDFCard
  },
  mounted() {
    this.getVideoInfo();
    setInterval(() => {
      this.updateVideoTime();
    }, 1000);
  },
  methods: {
    getImgUrl(pic) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`../assets/${pic}`);
    },
    getVideoInfo() {
      console.log("Getting video info.");
      this.axios
        .get("http://localhost:8080/video?vid=1")
        .then(response => {
          console.log(response.data);
          this.videoURL = "http://localhost:8080/" + response.data.v.url;
          console.log(this.videoURL);
        })
        .catch(e => console.log(e));
    },
    updateVideoTime() {
      this.videoTime = this.$refs.plyr.player.currentTime;
      console.log(this.videoTime);
    },
    uploadSuccess(response, file, fileList) {
      this.isUploaded = true;
      this.pdfURL = "http://localhost:8080" + response.path;
      console.log(this.pdfURL);
    }
  }
};
</script>


