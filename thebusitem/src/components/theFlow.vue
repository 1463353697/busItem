<template>
    <div class="flowblock">
        <div class="station-info">已选择公交线路：{{flowId}}</div>
        <div class="flow-info">
            <div class="choose-month">
                <select id="month-select" @change="monthChoose">
                    <option value="1">1月份</option>
                    <option value="2">2月份</option>
                    <option value="3">3月份</option>
                    <option value="4">4月份</option>
                    <option value="5">5月份</option>
                </select>
            </div>
            <div class="flow-charts">

            </div>
        </div>
    </div>
    
</template>
<script>
// 引入客流量数据
import flowData from '../assets/flowData.json'

export default {
    props:['flowId'],
    name:'theFlow',
    data(){
        return{
            

        }
    },
    
    mounted:
    function(){
        // console.log(this.flowId);
        // console.log("lll");

    },
    methods:{
        monthChoose(){
            var monthSelect = document.getElementById('month-select');
            var monthIndex = monthSelect.selectedIndex;
            var theMonth = monthSelect.options[monthIndex].value;
            
            var theMonthFlow = []
            //这里在对月份数据进行筛选，但遇到了两个大问题:substring方法无法识别，
            //还有从父组件中得到的月份数据无法在这里得到
            flowData.forEach(function(item){
                var thedate = item.date;
                // if(thedate.substring(5,6) == this.flowId){
                //     theMonthFlow.push(item);
                // }
            })

        }
    }
    
    
}
</script>
<style scoped>
    .flowblock {
        width: 100%;
        height: 300px;
        background-color: yellow;
    }
</style>