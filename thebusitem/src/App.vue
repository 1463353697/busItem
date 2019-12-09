<template>
  <div id="app">
    <div id="header">
        <h3>公交线路客流量预测</h3>
    </div>
    <routeChoose></routeChoose>
  </div>
</template>

<script>
import routeChoose from './components/routeChoose.vue'
export default {
  name: 'App',
  components:{
    routeChoose

  }
}
</script>

<style>
  * {
      margin: 0;
      padding: 0;
    }
    body {
      margin: 3% 10% 0% 10%;
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
