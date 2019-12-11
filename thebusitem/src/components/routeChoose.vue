<template>
  <div class="routeBlock">
    <div id="route-choose">
      <p>请选择公交路线</p>
      <!-- 进行选择的时候触发selectedChange()事件 -->
      <select @change="selectedChange()" id="route-select">
        <!-- 可以把这个线路值通过传给父组件然后再传给线路客流量预测组件，筛选对应线路的数据 -->
          <option v-for="(theid,index) in routeId" :value="theid">{{theid}}号线路</option>
      </select>

    </div>


      <!-- <ul>
        <li v-for="stationsinfo in stations">{{stationsinfo.经度}}</li>
        
      </ul> -->
      <!-- 公交线路信息已成功获取到，需要借助百度地图显示线路信息 -->
    <div id="stations-info"> 
       <baidu-map class="station-map" :center="{lng: 120.127785, lat: 30.282635}" :zoom="13" :scroll-wheel-zoom="true" @ready="mapHandler">
        <bm-polyline :path="polylinePath" stroke-color="blue" stroke-style="dashed" :stroke-opacity="0.5" :stroke-weight="8" :editing="true" ></bm-polyline>
      </baidu-map>
      
    </div>
  </div>
</template>

<script>

// 引入站点数据
import station from '../assets/station.json'
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})

export default {
  name: 'routeChoose',
  data () {
    return {
      routeId:[
        
      ],
     
      polylinePath:[
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ],

      //这是要传给父组件那个在这个组件中选择的公交线路的id
      thePathId:''
      
    }
    
  },
  methods: {

    //用于选择下拉列表（即线路）的事件
    selectedChange(){
      //获取select选择框选择的值
      var routeSelect = document.getElementById('route-select');
      var routeIndex = routeSelect.selectedIndex;
      var selectedId = routeSelect.options[routeIndex].value;

      this.thePathId = selectedId;

      // 把这个值传给父组件
      this.$emit('idTrans',this.thePathId);
      // console.log(this.thePathId)
      
      // console.log(station[selectedId-1].stations);

      //把这个站点的数据数组存到thestation变量里面
      var thestation = station[selectedId-1].stations;

      //重构此对象，使他符合百度地图的语法规则
      var checkStationInfo = [];
      thestation.forEach(function(item){
        checkStationInfo.push({lng:item.经度,lat:item.纬度});

      });
      // console.log(checkStationInfo);
      // 传值
      this.polylinePath = checkStationInfo;

    },
    updatePolylinePath(e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    },

    // 用于改变地图样式的函数
    mapHandler({ BMap, map }){
      let mapStyle={style:"light"}
      map.setMapStyle(mapStyle);
// console.log(BMap, map);

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
.routeBlock {
  width: 80%;
  margin-left: 10%;
}
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
  #stations-info {
    background-color: pink;
    width: 100%;
    height: 700px;
  }
  .station-map {
    width: 100%;
    height: 700px;
   
  }

</style>