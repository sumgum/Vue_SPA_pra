<template>
  <!-- <span>記事コード:{{ $route.params.aid }}</span> -->
  <span>記事コード:{{ aid }}</span>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Article',
  props: {
    aid: String
  }
}
</script>
