<template>
    <div class="tab">
        <div class="tab-wrap">
            <router-link to="/home">
              <span class="icon-home"></span>
              <span>首页</span>
            </router-link>
            <router-link to="/look">
              <span class="icon-movie"></span>
              <span>看片</span>
            </router-link>
            <router-link to="/user">
              <span class="icon-user"></span>
              <span>我的</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.tab{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  z-index: 100;
  font-size: 14px;
  background-color: #fff;
  .tab-wrap{
    display: flex;
    height: 100%;
    a{
      flex: 1;
      text-align: center;
      color: #333333;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 18px;
      &.router-link-active{
        color: #13d0fb;
      }
    }
  }
}

</style>