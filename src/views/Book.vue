<template>
  <div>
    <p>書籍は全部で{{booksCount}}冊あります</p>
    <ul v-for="b of getBooksByPrice(50000)" v-bind:key="b.isbn">
      <li>{{b.title}} ({{b.price}}円 <br />ISBN: {{b.isbn}})</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Book',
  // gettterは算出プロパティに登録しておく
  computed: mapGetters(['booksCount', 'getBooksByPrice'])
}
</script>
