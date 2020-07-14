<template>
  <div>
    <form v-on:submit.prevent="onclick">
      <label for="isbn">ISBN: </label>
      <input type="text" id="isbn" v-model="isbn"><br />
      <label for="isbn">書名: </label>
      <input type="text" id="title" v-model="title"><br />
      <label for="isbn">価格: </label>
      <input type="number" id="price" v-model="price"><br />
      <input type="submit" value="登録">
    </form>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      isbn: '',
      title: '',
      price: 0,
    }
  },
  name: 'Payload',
  // gettterは算出プロパティに登録しておく
  methods: {
    onclick() {
      this.$store.commit('addBook', {
        book: {
          isbn: this.isbn, title: this.title, price: this.price
        }
      })
    }
  }
}
</script>
