<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 22:13:08
 * @LastEditTime: 2019-10-20 14:22:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="cont" ref="cont">
    <ul class="wraper">
      <li v-for="item in movieList" :key="item.id">
        <div class="pic_show"><img :src="item.img | setWH('128.180')"></div>
        <div class="info_list">
           <h2>{{ item.nm }} <img src="../../assets/images/maxs.png" v-if="item.version"/></h2>
                       <p>观众评  <span class="grade">{{ item.sc }}</span></p>
                        <p>主演:{{ item.star }}</p>
                        <p>{{ item.showInfo}}</p>
        </div>
         <div class="btn_mall">
                        购票
                    </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name:'NowPlaying',
  components:{},
  props:{},
  data(){
    return {
      movieList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
    getNowList(){
      axios.get('/api/movieOnInfoList?id=10').then(res=>{
        var msg = res.data.msg;
        if(msg === 'ok'){
          this.movieList = res.data.data.movieList;
        }
      })

    }
  },
  created(){},
  mounted(){
    this.getNowList()
   let scroll = new BScroll('.cont',{
    scrollY: true
})
  }
}
</script>
<style scoped>
.cont{
  flex:1;
  top:95px;
  overflow:hidden;
  /* height:600px; */
  position: absolute;
    bottom: 0;
    left: 0;
    right:0;
}
.cont ul{
  margin:0 12px; 
  /* overflow: scroll; */
}
.cont ul li{
   margin-top:12px; 
   display: flex; 
   align-items:center; 
   border-bottom: 1px #e6e6e6 solid; 
   padding-bottom: 10px;
}
.pic_show{
  width:64px; 
  height: 90px;
}
.pic_show img{
  width:100%;
}
.info_list{
   margin-left: 10px; 
   flex:1; 
   position: relative;
}
.info_list h2{
font-size: 17px; 
line-height: 24px; 
width:150px; 
overflow: hidden; 
white-space: nowrap; 
text-overflow:ellipsis;
}
.info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.info_list p{font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.btn_mall { width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
</style>