<template>
  <div id="app">
    <div id="nav">
      <div id="logo" class="icon">
        <a href="/">
          <img :src="getImgUrl(logo)" alt="logo" height="38px" />
        </a>
      </div>
      <div id="placer"></div>
      <div id="language">
        <img class="icon" @click="langbt" :src="languageSrc()" alt="language" height="20px" />
      </div>
      <div @click="handleDropdown">
        <el-dropdown class="drop" trigger="click">
          <span class="el-dropdown-link">
            <strong>
              <i class="el-icon-user"></i>
            </strong>
            <i
              class="el-icon--right"
              v-bind:class="{'el-icon-arrow-up': this.isDown, 'el-icon-arrow-down ': !this.isDown}"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div id="settings" @click="gotoEditor">
                <i class="el-icon-paperclip"></i>
                <span>Upload</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div id="account" @click="gotoEditor">
                <i class="el-icon-s-custom"></i>
                <span>Account</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/css/app.scss";
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      logo: "logo.png",
      // initial language icon state: pointing downwards
      languageDown: true,
      language: {
        src1: "language.png",
        src2: "language2.png"
      },
      settings: "settings.png",
      account: "account.png",
      isDown: false
    };
  },
  components: {},
  methods: {
    gotoEditor() {
      this.$router.push("/editor");
    },
    handleDropdown() {
      console.log(this.isDown);
      this.isDown = !this.isDown;
    },
    getImgUrl(pic) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`./assets/${pic}`);
    },
    langbt() {
      this.languageDown = !this.languageDown;
    },
    languageSrc() {
      if (this.languageDown === true) {
        return this.getImgUrl(this.language.src1);
      }
      return this.getImgUrl(this.language.src2);
    }
  }
};
</script>