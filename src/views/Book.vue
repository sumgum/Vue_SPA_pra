<template>
  <div>
    <p>書籍は全部で{{booksCount}}冊あります</p>
    <ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
      <li>{{b.title}} ({{b.price}}円 <br />ISBN: {{b.isbn}})</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Book',
  computed: mapGetters(['booksCount', 'getBooksByPrice'])
}
</script>
