<template>
  <div id="app">
    <div id="header">
        <h3>公交线路客流量预测</h3>
    </div>
    <routeChoose  @idTrans="getIdPath"></routeChoose>
    <weatherCheck></weatherCheck>
    <theFlow :flowId="theId"></theFlow>
  </div>
</template>

<script>
import routeChoose from './components/routeChoose.vue'
import weatherCheck from './components/weatherCheck.vue'
import theFlow from './components/theFlow.vue'
export default {
  name: 'App',
  components:{
    routeChoose,
    weatherCheck,
    theFlow 

  },
  data(){
    return {

      // 这是选择线路之后从routeChoose组件里面得到的线路id值
      theId:''
    }
  },
  methods:{
    getIdPath(data){
      this.theId = data;
      // console.log(this.theId);
    }

  }
}
</script>

<style>
  * {
      margin: 0;
      padding: 0;
    }
    #header {
      display: flex;      
      width: 100%;
      height: 50px;
      background-color: aquamarine;
      display: flex;
      align-items: center;
      justify-content: center;
    }

</style>
