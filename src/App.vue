<template>
  <div id="app">
    <hvr-curl-top-left/>
  </div>
</template>

<script>
  import hvrCurlTopLeft from './components/hvr-curl-top-left';

export default {
  name: 'App',
  components: {
      'hvr-curl-top-left': hvrCurlTopLeft
  }
}
</script>

<style>
  @import "./styles/index.css";
  @import "./styles/global.css";
</style>
