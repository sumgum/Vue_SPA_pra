<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/article/108">記事：No.108</router-link> |
      <router-link to="/nest/108">ネストサンプル</router-link> |
      <router-link to="/book">Book</router-link>
    </div>
    <div>
      <input type="button" value="-" v-on:click="minus" />
      {{count}}
      <input type="button" value="+" v-on:click="plus" />
    </div>
    <router-view/>
    <hr/>
    <router-view name="sub" />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  // mapState を使用
  computed: {
    // 現在のカウントを取得
    // count() {
    //   return this.$store.state.count
    // }
    ...mapState(['count']),
  },
  methods: {
    minus() {
      this.$store.commit('minus');
    },
    plus() {
      this.$store.commit('plus');
    }
  }
}
</script>
