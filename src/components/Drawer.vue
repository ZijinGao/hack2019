<template>
  <div class="side" v-bind:class="{expand: isDisplaying}">
    <el-card class="main" >
      <el-collapse v-model="activeNames" @change="handleChange">
        <transition-group name="list" tag="p">
           <el-collapse-item
            v-for="item in content.attachments"
            v-bind:key="item.time"
            v-bind:name="item.ori"

            class="list-item"
          >
            <template slot="title"> <strong style="color:#599EF8"><i class="el-icon-edit"></i> {{item.ori}} </strong> </template>
            <PDFCard :page="parseInt(item.page)" :pdfURL="'http://localhost:8080'+item.path"  class="pdf" />
            
          </el-collapse-item>
          <el-collapse-item
            v-for="item in content.discussions"
            v-bind:key="item.time"
            v-bind:name="item.time+item.question"
            class="list-item"
          >
            <template slot="title">{{item.question}}</template>
            <div>{{item.comments[0]}}</div>
          </el-collapse-item>
         
        </transition-group>

        <el-collapse-item name="99">
          <template slot="title">
            <p>Ask a question about the current section
            <i class="header-icon el-icon-question"></i></p>
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
import PDFCard from "../components/PDFCard.vue";

export default {
  name: "Drawer",
  mounted() {
    // console.log(this.$props.content);
  },
  components:{PDFCard},
  props: {
    content: Object,
    vidTime: Number
  },
  data() {
    return {
      activeNames: [],
      newQuestion: "",
      newDetail: "",
      isDisplaying: false
    };
  },
  methods: {
    handleChange(val) {
      if (val[0]) {
        if (val[0].split('.')[1] === 'pdf') {
          this.isDisplaying = true;
        }
      } else {
        if (this.isDisplaying) this.isDisplaying = false;
      }
    },
    postNewQuestion() {
      this.axios
        .post("http://localhost:8080/video", {
          time: this.vidTime,
          content: this.newQuestion,
          tar: "",
          vid: "1"
        })
        .then(response => {
          this.newQuestion = "";
          this.newDetail = "";
        });
      2;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.expand {
  width: 70%;
  animation-name: expandWidget;
  animation-duration: .7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}
.side {
  width: 25%;
  // animation-name: shrinkWidget;
  // animation-duration: 2s;
  // animation-fill-mode: forwards;
  // animation-timing-function: ease-out;
}

@keyframes expandWidget {
  from {width: 25%;}
  to {width: 75%;}
}

@keyframes shrinkWidget {
  from {width: 75%;}
  to {width: 25%;}
}



</style>
