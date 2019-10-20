<!--
 * @Description: In User Settings Editaxios.get()
 * @Author: your name
 * @Date: 2019-10-11 22:14:02
 * @LastEditTime: 2019-10-20 14:30:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="cont">
    <ul>
      <!-- <li v-for="i in 4" :key="i">
        <div class="left">
          <img src="../../assets/images/movie_1.jpg"/>
        </div>
        <div class="center">
          <p class="title">无名之辈</p>
          <p><span>观众评</span><span class="score">9.2</span></p>
          <p>主演:陈建斌、任素汐、潘斌龙</p>
          <p>今天55家影院放映66509场</p>
        </div>
        <div class="right">
          <div class="buy-tic">购票</div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/images/movie_2.jpg"/>
        </div>
        <div class="center">
          <p>无名之辈</p>
          <p><span>观众评</span><span class="score">9.2</span></p>
          <p>主演:陈建斌、任素汐、潘斌龙</p>
          <p>今天55家影院放映66509场</p>
        </div>
        <div class="right">
          <div class="buy-tic">购票</div>
        </div>
      </li> -->
     <li v-for="item in comingList" :key="item.id">
        <div class="left">
          <img :src="item.img | setWH('128.180')"/>
        </div>
        <div class="center">
          <p>{{ item.nm }} <img v-if="item.version" src="../../assets/images/maxs.png" alt=""></p>
          <p><span class="person">{{ item.wish }}</span> 人想看</p>
          <p>主演: {{ item.star }}</p>
          <p>{{ item.rt }}上映</p>
        </div>
        <div class="right">
          <div class="buy-tic">预售</div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/images/movie_2.jpg"/>
        </div>
        <div class="center">
          <p>无名之辈</p>
          <p><span>观众评</span><span class="score">9.2</span></p>
          <p>主演:陈建斌、任素汐、潘斌龙</p>
          <p>今天55家影院放映66509场</p>
        </div>
        <div class="right">
          <div class="buy-tic">预售</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name:'ComingSoon',
  components:{},
  props:{},
  data(){
    return {
      comingList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    axios.get('/api/movieComingList?cityId=10').then(res=>{
      var msg = res.data.msg;
      if(msg === 'ok'){
        this.comingList = res.data.data.comingList;

      }
    })
    let scroll = new BScroll('.cont',{
    scrollY: true,
    click: true
})
  }
}
</script>
<style scoped>
.cont{
  width:100%;
  top:95px;
  overflow:hidden;
  /* height:600px; */
  position: absolute;
    bottom: 0;
    left: 0;
    right:0;
}
.cont ul{
  width:100%;
  margin:0 12px;
}
.cont ul li{
  position: relative;
  width:100%;
  margin-top:12px;
  display: flex;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom:10px;
}
.left{
  width:64px;
  height:90px;
  margin-right:10px;
}
.left img{
  width:100%;
}
.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.center  p{
  color:#666;
  font-size:13px;
}
.cont .center .title{
  font-size:17px;
  color:#000;
  line-height: 24px; 
  width:150px; 
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow:ellipsis;
}
.cont .center .score{
  font-weight: 700; 
  color: #faaf00; 
  font-size: 15px;
}
.right{
  position: absolute;
  right:8%;
  top:50%;
}
.right div{
  transform: translateY(-15px);
  text-align: center;
  width:47px; 
  height:27px;
  line-height:28px;
   background-color: #3c9fe6; 
   color: #fff; 
   border-radius: 4px; 
   font-size: 12px; 
   cursor: pointer;
}
</style>