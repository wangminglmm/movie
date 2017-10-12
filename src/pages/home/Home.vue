<template>
    <div class="home">
        <div class="top">{{title}}</div>
        <div class="home-content">
            <div class="banner">
                <h2 class="title">今日推片</h2>
                <mt-swipe :auto="4000" ref="slider">
                  <mt-swipe-item v-for="(item,index) in bannerList">
                      <img :src="item.image" @load="calcImgHeight" alt="" ref="img" />
                  </mt-swipe-item>
                </mt-swipe>
            </div>
            
            <div class="list">
                <h2 class="list-title">精选视频</h2>
                <div class="list-content">
                    <div class="list-item" v-for="(item,index) in videolist">
                        <a href="javascript:;" @click="selectItem(item.id)"><img :src="item.image"></a>
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/config/index'
export default {
  data () {
    return {
        title: '影视',
        bannerList: [],
        videolist:[]
    }
  },
  mounted(){
    this.getData();
    this.getBannerList();
    window.onresize = ()=>{
        if(this.height){
            let height = window.innerWidth * this.ratio
            this.$refs.slider.$el.style.height = height + 'px'
        }
    }
  },
  methods: {
    getData(){
        this.$http.get('api/lucky/v1/videolist').then((res)=>{
            var data = res.data
            this.videolist = this.addDomain(data.videolist);
        })
    },
    getBannerList(){
        this.$http.get('api/lucky/v1/links').then((res)=>{
            var data = res.data.links
            this.bannerList = this.addDomain(data)
        })
    },
    addDomain(list){
        list.forEach((item)=>{
            item.image = config.domain + item.image
        })
        return list
    },
    calcImgHeight(){
        this.$nextTick(()=>{
            setTimeout(()=>{
                let height = this.$refs.img[0].clientHeight
                console.log(height)
                this.$refs.slider.$el.style.height = height + 'px'
                this.height = height
                let width = window.innerWidth
                this.ratio = height / width
            },100)
        })
    },
    selectItem(id){
        this.$router.push({path:`/detail/${id}`})
    }
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/mixin.less';
.home{
    .top{
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        background-color: #fff;
        z-index:3;
        .border-1px-b(#ccc)
    }
    .home-content{
        position: absolute;
        top: 40px;
        bottom: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        .banner{
            .title{
                font-size: 14px;
                color: #333;
                font-weight: bold;
                line-height:32px;
            }
            img{
                width: 100%;
                border-radius: 5px;
            }
        }
    }
    .list{
        padding-bottom: 40px;
        .list-title{
            font-size: 14px;
            color: #333;
            font-weight: bold;
            line-height:32px;
        }
        .list-content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .list-item{
                width: 48%;
                margin-bottom: 10px;
                p{
                    font-size: 12px;
                    color: #333;
                    .nowrap();
                }
            }
        }
    }
}
</style>