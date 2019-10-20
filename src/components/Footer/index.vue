<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 21:47:05
 * @LastEditTime: 2019-10-18 10:25:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="footer">
      <ul >
          <router-link tag="li" to="/movie">
              <i class="iconfont icon-dianying"></i>
              <p>电影</p>
          </router-link>
          <router-link tag="li" to="/cinema">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
          </router-link>
          <router-link tag="li" to="/mine">
               <i class="iconfont icon-wode"></i>
               <p>我的</p>
          </router-link>
      </ul>

  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.footer{
    width:100%;
    height:50px;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    border-top:2px #ebe8e3 solid;
    background: white;
}
.footer ul{
    display: flex;
    align-items: center;
    text-align: center;
    height:50px;
}
.footer ul li{
    flex: 1; 
}
.footer ul li.router-link-active{ 
    color: #f03d37;
    }
.footer ul i{
    font-size:20px;
}

</style>