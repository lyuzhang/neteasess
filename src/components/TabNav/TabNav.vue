<template>
  <div class="tabwrap">
    <div class="tab-list-wrap">
      <div class="tab-list">
        <div class="tab">
          <span class="txt">推荐</span>
        </div>
        <div class="tab">
          <span class="txt">居家</span>
        </div>
        <div class="tab">
          <span class="txt">鞋包配饰</span>
        </div>
        <div class="tab">
          <span class="txt">服装</span>
        </div>
        <div class="tab">
          <span class="txt">电器</span>
        </div>
        <div class="tab">
          <span class="txt">洗护</span>
        </div>
        <div class="tab">
          <span class="txt">饮食</span>
        </div>
        <div class="tab">
          <span class="txt">餐厨</span>
        </div>
        <div class="tab">
          <span class="txt">婴童</span>
        </div>
        <div class="tab">
          <span class="txt">文体</span>
        </div>
        <div class="tab">
          <span class="txt">特色区</span>
        </div>
      </div>
    </div>
    <div class="tabwrap-btn">
      <div class="linear"></div>
      <div class="toggle">
        <div class="icon"></div>
      </div>
    </div>
  </div>

</template>
<script>

  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.tabwrap
  width 100%
  display flex
  .tab-list-wrap
    padding 0 0.4rem
    overflow hidden
    .tab-list
      display flex

      .tab
        flex-shrink 0
        .txt
          display inline-block
          padding 0 0.21333rem
          line-height 0.8rem
          font-size 0.373333rem
          text-align center
          box-sizing border-box
  .tabwrap-btn
    display flex
    justify-content center
    .linear
      width 0.8rem
      height 0.8rem
      background-image linear-gradient(to right ,rgba(255,255,255,0)) 0,#fff 100%
    .toggle
      width 1.3333rem
      height 0.8rem
      text-align center
      background #ffffff
      .icon
        margin-top 0.2rem
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
        background-repeat: no-repeat
        height 0.4rem
        width 0.4rem




</style>
