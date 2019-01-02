<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/Hpage')" :class="{on:isCurrent('/Hpage')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/Sort')" :class="{on:isCurrent('/Sort')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/See')" :class="{on:isCurrent('/See')}">
      <span class="item_icon">
        <i class="iconfont icon-zhaopian"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/Scart')" :class="{on:isCurrent('/Scart')}">
      <span class="item_icon">
        <i class="iconfont icon-che"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/Profile')" :class="{on:isCurrent('/Profile')}">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxing"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 1
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.30667rem
    display flex

    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 0.32rem
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 0.5rem
</style>
