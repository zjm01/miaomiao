<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 21:42:50
 * @LastEditTime: 2019-10-19 21:50:12
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="cinema-body">
      <Header/>
      <!-- nav导航 -->
      <div class="nav-body">
        <ul class="clearfix">
          <li><span>全城</span><i class="iconfont icon-lower-triangle"></i></li>
          <li><span>品牌</span><i class="iconfont icon-lower-triangle"></i></li>
          <li><span>特色</span><i class="iconfont icon-lower-triangle"></i></li>
        </ul>
      </div>
      <!-- nav导航结束 -->
      <!-- 影院信息列表 -->
       <CiList />
      <!-- 影院信息列表结束 -->
     
      <Footer/>
  </div>
</template>

<script>
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import CiList from '../../components/CiList/index'
export default {
  name:'Cinema',
  components:{
    Header,
    Footer,
    CiList
  },
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
<style  scoped>
.cinema-body{
  width:100%;
   margin-top:50px;
}
.cinema-body .nav-body{
  height:45px;
  width:100%;
}
.cinema-body .nav-body ul{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:1px solid #e6e6e6;
}
.cinema-body .nav-body ul li{
  flex:1;
  text-align: center;
  line-height: 45px;
  font-size:16px;
}
</style>