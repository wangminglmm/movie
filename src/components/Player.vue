<template>
    <div class="player" v-show="isPlaying">
        <video :src="currentVideo.url" ref="video" autoplay width="100%" controls @pause="paused" @play="played" @canplay="played" ></video>
    </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
  data () {
    return {
        canplay: false
    }
  },
  computed: {
    
    ...mapGetters([
        'currentVideo',
        'isPlaying'
    ])
  },
  methods: {
    paused(){
        this.setPlayingState(false)
    },
    ...mapMutations({
        setPlayingState: 'SET_PLAYING_STATE'
    }),
    played(){
        this.canplay = true;
        this.$refs.video.play()
    }
  },
  watch: {
    isPlaying(newVal,oldVal){
        if(newVal){

            // this.$refs.video.play()
        }
    }
  }
}
</script>

<style scoped lang="less">
.player{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: #fff;
}
</style>