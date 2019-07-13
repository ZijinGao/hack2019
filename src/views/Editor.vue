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
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="uploadSuccess"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </el-main>
        <el-aside width="50%">
            <PDFCard v-if="this.isUploaded" :page=1 class="pdf" />
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<style>
.upload {
    padding-top: 20px;
}

.pdf {
    width:100%;
    margin:20px;
    height: 500px;
    overflow-x:hidden;
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

export default {
  name: "about",
  data: function() {
    return {
      posterURL: "",
      videoURL:
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
      discussions: [],
      attachments: [],
      isUploaded: false
    };
  },
  components: {
    Drawer,
    PDFCard
  },
  mounted() {
    this.getVideoInfo();
  },
  methods: {
    getVideoInfo() {
      console.log("Getting Vid INFO");
      console.log(this.videoURL);
    },

    uploadSuccess(response, file, fileList){
        this.isUploaded = true;
        console.log(this.isUploaded)
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


