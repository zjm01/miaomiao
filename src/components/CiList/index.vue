<!--
 * @Description: In User Settings Edit  
 * @Author: your name
 * @Date: 2019-10-19 21:50:28
 * @LastEditTime: 2019-10-20 21:04:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="list-body">
    <ul>
        <li v-for="item in cinemaList" :key="item.id">
            <div class="title">
                 <span>{{ item.nm }}</span>
                 <span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
            </div>
            <div class="address">
                  <span>{{ item.addr }}</span>
                  <span>{{ item.distance }}</span>
                </div>
                <div class="card" >
                  <div v-for="(num,key) in item.tag" :key="key" v-if="num===1" :class=" key | classCard "> {{key | formatCard }}</div>
                </div>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components:{},
  props:{},
  data(){
    return {
        cinemaList:[]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  filters:{
      formatCard(key){
           var card = [
                { key : 'allowRefund' , value : '改签' },
                { key : 'endorse' , value : '退' },
                { key : 'sell' , value : '折扣卡' },
                { key : 'snack' , value : '小吃'}
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key===key){
                    return card[i].value;
                }
            }
            return '';
      },
      classCard(key){
           var card = [
                { key : 'allowRefund' , value : 'bl' },
                { key : 'endorse' , value : 'bl' },
                { key : 'sell' , value : 'or' },
                { key : 'snack' , value : 'or'}
            ];
             for(var i=0;i<card.length;i++){
                if(card[i].key===key){
                    return card[i].value;
                }
            }
            return '';
      }


  },
  created(){},
  mounted(){
      axios.get('/api/cinemaList?cityId=10').then(res=>{
          var msg = res.data.msg;
          if(msg==='ok'){
              this.cinemaList = res.data.data.cinemas;
          }
      })
      
  }
}
</script>
<style scoped>
.list-body{
    width:100%;
    flex:1;
    overflow:auto;
}
.list-body ul{
    padding: 20px;
}
.list-body li{ 
     border-bottom:1px solid #e6e6e6; 
     margin-bottom: 20px;
}
.list-body div{
    margin-bottom:20px;
}
.list-body .title{
    font-size:16px;
}
.list-body .q{
    font-size: 18px; 
    color:#f03d37;
}
.list-body .price{
    font-size:18px;
}
.list-body .address{
    font-size:13px;
    color:#666;

}
.list-body .address span:nth-of-type(2){ 
    float:right; 
}
.card{
    display: flex;
}
.card div{
    padding: 0 3px; 
    height: 15px; 
    line-height: 15px; 
    border-radius: 2px; 
    color: #f90; 
    border: 1px solid #f90; 
    font-size: 13px; 
    margin-right: 5px;
}
.card div.or{
     color: #f90; 
     border: 1px solid #f90;
}
.card div.bl{
     color: #589daf; 
     border: 1px solid #589daf;
}
</style>