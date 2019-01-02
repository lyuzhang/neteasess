<template>
  <div class="hpage-wraper">
    <div class="hpage-content" >
      <div class="hpage-nav">
        <div class="hpage-nav-search">
          <a class="logo" href="javascript:;"></a>
          <div class="search"  @click="gotoHpageHotSearch('/HpageHotSearch')">
            <i class="icon"></i>
            <span class="search-text">搜索商品, 共19966款好物</span>
          </div>
          <div class="loginBtn">登录</div>
        </div>
        <tab-nav></tab-nav>
      </div>
    </div>

  </div>
</template>
<script>
  import TabNav from '../../components/TabNav/TabNav.vue'
  export default {
    components:{
      TabNav
    },
    methods:{
      gotoHpageHotSearch(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .hpage-wraper
     width 100%
     height 100%
     .hpage-content
       .hpage-nav

          .hpage-nav-search
             display flex
             padding 0.21333rem 0.4rem
             align-items center
             .logo
               display inline-block
               width 1.84rem
               height 0.53333rem
               background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
               background-repeat no-repeat
               margin-right 0.26667rem
               flex-shrink 2
               cursor pointer
             .search
               display flex
               background-color #ededed
               border-radius 0.10667rem
               font-size 0.373333rem
               box-sizing border-box
               //line-height 0.74667rem
               height 0.74667rem
               flex-grow 1
               justify-content center
               align-items center
               .icon
                 display block
                 background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
                 background-repeat no-repeat
                 width 0.373333rem
                 height 0.373333rem
                 margin-right 0.133333rem
                 box-sizing border-box
                 line-height 0.74667rem
               .search-text
                 color #666666
                 box-sizing border-box
                 font-size 0.37333rem
                 line-height 0.74667rem
             .loginBtn
               width 0.98667rem
               height 0.53333rem
               line-height 0.53333rem
               text-align center
               color #b4282d
               border 1px solid #b4282d
               border-radius 0.10667rem
               margin-left 0.21333rem
               box-sizing border-box
               font-size 0.32rem



</style>
