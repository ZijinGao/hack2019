<template>
  <div>
    <el-card class="main">
      <el-collapse v-model="activeNames" @change="handleChange">
        <transition-group name="list" tag="p">
          <el-collapse-item
            v-for="item in content.discussions"
            v-bind:key="item.time"
            v-bind:name="item.time+item.question"
            class="list-item"
          >
            <template slot="title">{{item.question}}</template>
            <div>{{item.time}}</div>
          </el-collapse-item>
          <el-collapse-item
            v-for="item in content.attachments"
            v-bind:key="item.time"
            v-bind:name="item.time"
            class="list-item"
          >
            <template slot="title">{{item.question}}</template>
            <div>{{item.solution}}</div>
          </el-collapse-item>
        </transition-group>

        <el-collapse-item name="99">
          <template slot="title">
            Ask a question about the current section.
            <i class="header-icon el-icon-question"></i>
          </template>
          <div style="margin: 20px 0;"></div>
          <el-input type="textarea" autosize placeholder="Question" v-model="newQuestion"></el-input>
          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="Detail"
            v-model="newDetail"
          ></el-input>
          <div style="margin: 20px 0;"></div>
          <el-button @click="postNewQuestion" type="primary">
            Ask Now
            <i class="el-icon-message el-icon--right"></i>
          </el-button>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  mounted() {
    // console.log(this.$props.content);
  },
  props: {
    content: Object,
    vidTime: Number
  },
  data() {
    return {
      activeNames: ["99"],
      question: "",
      detail: "",
      newQuestion: "",
      newDetail: ""
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    postNewQuestion() {
      this.axios.post("http://10.209.11.173:8888/video", {
        time: this.vidTime,
        content: this.newQuestion,
        tar: "",
        vid: "1"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  height: 100%;
}
.list-item {
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
