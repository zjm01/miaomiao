<!--
 * @Description: In User Settings Edit
 * @Author:cherry
 * @Date: 2019-10-10 22:01:24
 * @LastEditTime: 2019-10-20 14:07:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="city-body">
    <div class="city-list">
       <!-- 热门城市 -->
       <div class="city-hot">
         <h2>热门城市</h2>
          <ul class="clearfix" >
             <li v-for="(item,index) in hotList" :key="index">{{item.nm }}</li>
          </ul>
       </div>
       <!-- 热门城市结束 -->
        <!-- 城市列表 -->
       <div class="city-sort" ref="citySort">
          <div v-for="(item,index) in cityList" :key="index">
                            <h2>{{item.index}}</h2>
                            <ul>
                                <li v-for="city in item.list" :key="city.id" >{{city.nm}}</li>
                            </ul>
                        </div>	
       </div>
    </div>
    <div class="city-index">
            <ul>
                <li v-for="(i,index) in cityList" :key="i.index" @touchstart="handleToIndex(index)">{{i.index}}</li>
            </ul>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components:{},
  props:{},
  data(){
    return {
      cityList:[],//分类城市
      hotList:[],//热门城市
    }
  },
  watch:{},
  computed:{},
  methods:{
    //格式化获取到的成熟数据
    formatCity(cities){
      var cityList=[];  //分类城市
      var hotList = []; //热门城市
       for(var i=0;i<cities.length;i++){
                if(cities[i].isHot === 1){
                    hotList.push( cities[i] );
                }
            }
      for(var i=0;i<cities.length;i++){
        var firstLetter = cities[i].py.substring(0,1).toUpperCase();//取出每一项中py(是城市拼音)中的首字母，并转换成大写；
        if(toCom(firstLetter)){//判断cityList中是否存在此字母开头的index
        //不存在
           cityList.push({ index : firstLetter , list : [ { nm : cities[i].nm , id : cities[i].id } ] });

        }else{
          // 存在
          for(var j=0;j<cityList.length;j++){
            if(cityList[j].index === firstLetter){
              cityList[j].list.push( { nm : cities[i].nm , id : cities[i].id } )
            }
          }
          
        }
      }
      cityList.sort((n1,n2)=>{
                if( n1.index > n2.index ){
                    return 1;
                }
                else if(n1.index < n2.index){
                    return -1;
                }
                else{
                    return 0;
                }
            });
              function toCom(firstLetter){//判断是否存在此项index
    for(var i=0;i<cityList.length;i++){
      if(cityList[i].index===firstLetter){//存在index
        return false;
      }
    }
      return true;
    }
            return {
              hotList,
              cityList
            }

    },
    //点击右侧的字母跳转到指定的城市分类
    handleToIndex(index){
      var h2=this.$refs.citySort.getElementsByTagName('h2');
      this.$refs.citySort.parentNode.scrollTop = h2[index].offsetTop;
    }
  
  },
  created(){},
  mounted(){
    axios.get('/api/cityList').then(res=>{
      var msg = res.data.msg;
      if(msg === 'ok'){
       var cities = res.data.data.cities;
        // 改造数据，现在按到的数据没有按字母分类
        // [{index:'A,list:[{nm:'阿拉善',id:123}]}]
        var { cityList , hotList } = this.formatCity(cities);
        this.hotList=hotList;
        this.cityList=cityList
      }
    }
    )
  }
}
</script>
<style  scoped>
.city-body{
  width:100%;
  margin-top:90px;
  display: flex;
  position: absolute;
  top:0;
  bottom:0;
}
.city-body .city-list{
  flex:1;
  overflow: auto;
  background: #FFF5F0;
}
.city-body .city-list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city-body .city-hot{ 
  margin-top: 20px;
  }
  .city-body .city-hot h2{
    padding-left:15px;
    background:#F0F0F0; 
    font-size:14px;
    line-height:30px;
    font-weight:normal;
  }
  .city-body .city-hot ul li{
    float:left;
    background: #fff; 
    width: 29%; 
    height: 33px; 
    line-height:33px;
    text-align:center;
    margin-top: 15px; 
    margin-left: 3%; 
    padding: 0 4px; 
    border: 1px solid #e6e6e6; 
    border-radius: 3px;
    box-sizing: border-box;
  }
  .city-body .city-sort{
    flex:1;
    
  }
   .city-body .city-sort div{
     margin-top:20px;
   }
   .city-body .city-sort h2{
     padding-left: 15px; 
     line-height: 30px; 
     font-size: 14px; 
     background:#F0F0F0; 
     font-weight: normal;
   }
    .city-body .city-sort ul{
      padding-left: 10px; 
      margin-top: 10px;
    }
    .city-body .city-sort ul li{
      font-size:14px;
      line-height: 30px;
    }
    .city-body .city-index{ font-size:16px;width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>