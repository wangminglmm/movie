<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
    <player></player>
  </div>
</template>

<script>
import 'common/less/base.css'
import 'common/less/icons.less'
import Tab from 'components/Tab'
import Player from 'components/Player'
export default {
  components: {
    Tab,
    Player
  }
}
</script>

<style>

</style>
