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
                    <option value="6">6月份</option>
                    <option value="7">7月份</option>
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

            //获得选择的月份的值
            var theMonth = monthSelect.options[monthIndex].value;
            
            
            var theid = this.flowId;
            console.log(theid);

            //暂时先看id筛选出数据
            var theIdFlow = [];

            var theFinalFlow = [];

            
            // 这里在对月份数据进行筛选，但遇到了问题:substring方法无法识别，
            //为了不耽误进度先这样：先取出符合已选择id线路的数据，然后再根据选择的月份根据每月的天数筛选
            for(var i =0,len = flowData.length;i<len;i++){
                if(flowData[i].id == theid){
                    theIdFlow.push(flowData[i]);
                    
                }
            }
            console.log(theIdFlow);

            //根据月份再筛选数据
            if(theMonth == 1){
                for(var i = 0;i<31;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            if(theMonth == 2){
                for(var i = 31;i<59;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            if(theMonth == 3){
                for(var i = 59;i<90;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            if(theMonth == 4){
                for(var i = 90;i<120;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            if(theMonth == 5){
                for(var i = 120;i<151;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            if(theMonth == 6){
                for(var i = 151;i<181;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            if(theMonth == 7){
                for(var i = 181;i<212;i++){
                    theFinalFlow.push(theIdFlow[i]);
                }
            }
            console.log(theFinalFlow);





            
            // flowData.forEach(function(item){
            //     var thedate = item.date;   
            //     // console.log(thedate);
            //     var thestring = thedate.substring(5,6);
            //     if(thestring == theMonth && item.id == theid ){
            //         theMonthFlow.push(item);
            //     }
            // });
            // var test1 = "abc";
            // var test2 = test1.substring(1,2);
            // console.log(test2);
            // var thedatadate = [];

            // for(var i=0;i<flowData.length;i++){
            //      thedatadate.push(flowData[i].date);
                
            // }
            // // console.log(thedatadate);
            // // var testMonth = thedatadate[2].substring(5,6);
            // // console.log(testMonth);
            // var checkedIndex = [];
            // for(var i = 0,len=thedatadate.length;i<len;i++){
            //     var arraydate = thedatadate[3];
            //     var testMonth = arraydate.substring(5,6);
            //     if(testMonth == theMonth ){
            //         checkedIndex.push(i);
            //     }
            // }


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