<template>
  <div id="route-choose">
      <p>请选择公交路线</p>
      <select @change="selectedChange()" id="route-select">
          <option v-for="(theid,index) in routeId" :value="theid">{{theid}}</option>
          <!-- <option value="2号线"></option> -->
          <!-- <option value="3号线">3号线</option>
          <option value="4号线">4号线</option> -->
      </select>
  </div>
</template>

<script>
import station from '../assets/station.json'
export default {
  name: 'routeChoose',
  data () {
    return {
      routeId:[
        
      ],
      stations:[

      ]
    }
    
  },
  methods: {
    selectedChange(){
      //获取select选择框选择的值
      var routeSelect = document.getElementById('route-select');
      var routeIndex = routeSelect.selectedIndex;
      var selectedId = routeSelect.options[routeIndex].value;
      // console.log(selectedId);
      // console.log(station[selectedId-1].stations);

      //把这个站点的数组传给stations数据
      this.stations = station[selectedId-1].stations;

    }
  },
  mounted: 
    function() {

      //生成一个1到49整数的数组并传给options选项框
      this.routeId = Array.from(new Array(49 + 1).keys()).slice(1);
      
    },
  
  

  

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #route-choose {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #route-select {
    margin-left: 10px;
    width: 100px;
    height: 30px;

  }

</style>