<template>
  <div class="bg">
    <div class="bg-content">
      <div class="bg-content-top">
        <div class="bg-search">
          <i class="bg-icon"></i>
          <input class="bg-input" type="text" placeholder="便携式高清投影仪 直降600元限时限量抢">
        </div>
        <div class="bg-top-btn" @click="gotoHpage('/Hpage')">取消</div>
      </div>
      <div class="bg-content-middle">
        <div class="content-header">
          <h3>热门搜索</h3>
        </div>
        <div class="content-list">
          <a class="item" href="javascript:;">爆款 行李箱</a>
          <a class="item" href="javascript:;">美好盒子</a>
          <a class="item" href="javascript:;">保暖内衣</a>
          <a class="item" href="javascript:;">直降1399</a>
          <a class="item" href="javascript:;">热销排行榜</a>
          <a class="item" href="javascript:;">拖鞋9点9元起</a>
          <a class="item" href="javascript:;">围巾5折起</a>
          <a class="item" href="javascript:;">收纳</a>
          <a class="item" href="javascript:;">男鞋</a>
          <a class="item" href="javascript:;">65折起</a>
          <a class="item" href="javascript:;">丁磊推荐</a>
          <a class="item" href="javascript:;">零食买4免1</a>
          <a class="item" href="javascript:;">羽绒服5折起</a>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    methods: {
      gotoHpage(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.bg
  height 100%
  background-color #F4F4F4
  .bg-content
    background-color #ffffff
    .bg-content-top
      display flex
      justify-content center
      align-items center
      padding 0 0.4rem
      background-color #ffffff
      //width 10rem
      margin auto
      height 1.17333rem

      .bg-search
        display flex
        align-items center
        background-color #f4f4f4
        height 0.74667rem
        border-radius 4px
        flex-grow 1
        padding 0 0.26667rem
        .bg-icon
          margin-right 0.21333rem
          display block
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          background-repeat no-repeat
          height 0.37333rem
          width 0.37333rem
        .bg-input
          line-height 0.53333rem
          font-size 0.373333rem
          color rgba(0,0,0,0)
          padding-left 0.02667rem
          display block
          flex-grow 1
          background-color #f4f4f4


      .bg-top-btn
        margin-left 0.4rem
        font-size 0.373333rem
        box-sizing border-box


    .bg-content-middle
      margin-bottom 0.26667rem
      padding 0 0.4rem 0.4rem
      box-sizing border-box
      .content-header
        height 1.2rem
        line-height 1.2rem
        font-size 0.37333rem
        color #999999
        h3
         font-weight 400


      .content-list
        clearFix()

        .item
          float left
          display block
          padding 0 0.2rem
          margin-right 0.42667rem
          margin-bottom 0.42667rem
          line-height 0.61333rem
          border 1px solid #999999
          border-radius 4px
          font-size 24px
          color #333333







</style>
