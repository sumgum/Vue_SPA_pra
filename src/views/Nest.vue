<template>
<div>
  <!-- <span>記事コード:{{ $route.params.aid }}</span> -->
  <div>記事コード:{{ aid }}</div>
    <span><router-link v-bind:to="'/nest/' + aid + '/pages/1'">
    Page: 1</router-link></span> |
    <span><router-link v-bind:to="'/nest/' + aid + '/pages/2'">
    Page: 2</router-link></span> |
  <hr />
  <router-view />
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Nest',
  props: {
    aid: String
  }
}
</script>
