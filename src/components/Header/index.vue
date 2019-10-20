<template>
  <div class="header">
     <span>喵喵影院</span>
  </div>
</template>

<script>
export default {
    name:'Header',
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
.header{
    position: fixed;
    width:100%;
    height:50px;
    top:0;
    right:0;
    left:0;
    color: #fff;
    background: #e54847; 
    border-bottom: 1px solid #e54847;
    display: flex;
}
span{
   line-height: 50px;
   text-align: center;
   font-size:18px;
   flex:1;
}
</style>