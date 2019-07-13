<template>
  <div id="app">
    <div id="nav">
      <div id="logo" class="icon">
        <a href="App.vue">
          <img :src="getImgUrl(logo)" alt="logo" height="50px" />
        </a>
      </div>
      <div id="placer"></div>
      <div id="language">
        <img class="icon" @click="langbt" :src="languageSrc()" alt="language" height="20px" />
      </div>
      <div id="settings">
        <img class="icon" :src="getImgUrl(settings)" alt="s" height="20px" />
      </div>
      <div id="account">
        <img class="icon" :src="getImgUrl(account)" alt="a" height="20px" />
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/css/app.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

export default {
  name: "app",
  data() {
    return {
      logo: "download.png",
      // initial language icon state: pointing downwards
      languageDown: true,
      language: {
        src1: "language.png",
        src2: "language2.png"
      },
      settings: "settings.png",
      account: "account.png"
    };
  },
  components: {
  },
  methods: {
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