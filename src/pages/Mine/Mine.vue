<template>
  <div class="wrapper">
    <Header />
      mine
      <Footer/>
  </div>
</template>

<script>
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
export default {
  name:'Mine',
  components:{
    Header,
    Footer
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
.wrapper{}
</style>