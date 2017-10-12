<template>
    <transition name="slide">
        <div class="detail">
            <h2 class="title"><span class="back icon-back" @click="back"></span><span class="txt">{{detail.title}}</span></h2>
            <div class="video" v-show="detail.image" @click="play(detail)">
                <img :src="detail.image" alt="" />
                <span class="icon icon-pause"></span>
            </div>
        </div>
    </transition>
</template>

<script>
import config from '@/config/index'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
        detail: {}
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
        let id = this.$route.params.id
        this.$http.get(`api/lucky/v1/video/${id}`).then((res)=>{
            this.detail = res.data.video
            this.detail.image = config.domain + this.detail.image
            this.detail.url = config.domain + this.detail.url
        })
    },
    back(){
        this.$router.back()
    },
    play(currentVideo){
        this.setPlayingState(true)
        this.setCurrentVideo(currentVideo)
    },
    ...mapMutations({
        setPlayingState: 'SET_PLAYING_STATE',
        setCurrentVideo: 'SET_CURRENT_VIDEO'
    })
  }
}
</script>

<style scoped lang="less">
@import '~common/less/mixin.less';
.slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
}
.slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
}
.detail{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 200;
    .title{
        text-align: center;
        line-height: 40px;
        color: #333;
        font-size: 16px;
        background-color: #909090;
        color: #fff;
        position: relative;
        .txt{
            display: block;
            width: 60%;
            margin: 0 auto;
            .nowrap();
        }
        .back{
            position: absolute;
            left: 0px;
            top: 0;
            height: 100%;
            width: 20px;
            padding-left: 10px;
        }
    }
    .video{
        position: relative;
        .icon{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%,-50%,0);
            font-size: 60px;
            color: #000;
        }
        img{
            width: 100%;
        }
    }
}
</style>