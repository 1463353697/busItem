<template>
  <div id="app">
    <div id="header" >
        <h3>公交线路客流量预测</h3>
       <a id="logina" @click="loginClick1()" >请登录</a>
       <div id="loginBlock">
          <div class="name">用户名：<input></div>
          <div class="psw">密码： <input></div>
          
           
            <button @click="loginClick2()" id="loginBtn" type="submit">登录</button>
         
       </div>
    </div>

    <!-- 公交线路选择和展示组件，会把已选择公交线路的值传给这个父组件 -->
    <routeChoose  @idTrans="getIdPath"></routeChoose>
    <!-- <weatherCheck></weatherCheck> -->

    <!-- 这个父组件又把从routeChoose组件中的到的线路id值即theId传给theFlow子组件 -->
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

    //这里是用来从routeChoose组件中得到线路id值的方法
    getIdPath(data){
      this.theId = data;
      // console.log(this.theId);
    },
    loginClick1(){
      var loginBlock = document.getElementById("loginBlock");
      loginBlock.style.display = "block";
    },
    loginClick2(){
      var loginBlock = document.getElementById("loginBlock");
      var logina = document.getElementById("logina");
      loginBlock.style.display = "none";
      logina.innerHTML="xx公交公司";
      alert("登录成功");

    }


  }
}
</script>

<style>
  body{
      margin: 0;
      padding: 0;
      width: 80%;
      margin-left: 10%;

    }
    #header {
      display: flex;      
      width: 100%;
      height: 50px;
      background-color: #97B5D7;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    #header a {
     position: relative;
     left: 40%;
     cursor:pointer;
    }
    #loginBlock {
      padding: 20px;
      position:absolute;
      left:500px;
      top: 200px;
      border: solid #4F97D9 2px;
      border-radius: 5px;
      background-color: azure;
      width: 250px;
      height: 150px;
      z-index: 1;
      display: none;
    }
    #loginBlock input{
      height: 25px;
      border-radius: 5px;
      border: solid #97B5D7 1px;
      outline: none;
      margin-top: 10px;
    }
    #loginBlock .psw{
      margin-left: 10px;
    }
    #loginBlock button{
      margin-top: 20px;
      margin-left: 100px;
      padding: 5px 10px;
      
    }

</style>
