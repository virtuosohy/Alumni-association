<template>
  <div class="container">
    <h1>原民主乡中心校初 85 级学生毕业 40 周年师生恳谈会</h1>
    <p>报名数: 0/1000</p>
    <div class="info-box">
      <div class="table">
        <div class="title">报名费用</div>
        <div class="money-info">0.5元</div>
      </div>

      <div class="table">
        <div class="title">活动时间</div>
        <div class="time-info">2025-01-30 14:00-</div>
        <div class="time-info">2025-01-30 22:00</div>
      </div>


    </div>

    <div class="place">
      <div class="title">地点</div>
      <div class="place-info">炖香园(安岳店)</div>
    </div>
    <div class="word">
      <div class="main">原民主乡中心校初85级学生毕业40周年师生恳谈会</div>
      <div class="main">亲爱的原民主乡中心校初 85 级全体同学:</div>
      <div class="main">您们好！</div>
      <div class="main">时光荏苒，岁月如梭。一转眼，我们走出母校的大门已有 40 年之久了，如果不去刻意计算，谁又会想到，居然已经这么久了。一别四十载，同窗好友身居何方？工作事业是否依然繁忙？</div>
    </div>
    <div class="bottom-panel">

      <button class="button" @click="goToList">名单</button>
      <button class="button" @click="goToShare">分享</button>
      <button class="button" @click="goToIn">报名</button>

    </div>


  </div>


</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
function goToList() {
  router.push('/list');
}

function goToShare() {
  router.push('/Share');
}
function goToIn() {
  router.push('/In');
}
axios.post('https://zs.cqupt.edu.cn/hxapi/token',{
  params:{
    grant_type:"password",
    username:"HLS001",
    password:"078f1061-b036-46a8-b389-07b687ea1888"
}
})
    .then(response => {
      console.log(response);
    })
.catch(error => {
  console.log(error);
});
</script>

<style scoped>


.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  height: 2000px
}

.info-box {
  display: flex;
  justify-content: space-between;
  max-width: 640px;
  margin: 0 auto;
  padding: 20px;
}

.table {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f7f6;
  border-radius: 10px;
}
.place{
  width: 520px;
  height: 100px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f7f6;
  border-radius: 10px;
}

.time-info {
  font-size: 16px;
  font-weight:700;
  color: #576460;
  margin-top: 10px;
}
.place-info {
  font-size: 16px;
  font-weight:700;
  color: #576460;
  margin-top: 10px;
}
.money-info {
  font-size: 16px;
  font-weight:700;
  color: #d79481;
  margin-top: 10px;
}

.title::after {
  content: "";
  display: block;
  border-bottom: 1px solid gray;
  margin: 10px 0;
}

.title {
  font-size: 18px;
  font-weight:700;
  color: #576460;
}

.table:not(:first-child) {
  margin-left: 40px;
}
.word{
  display: flex;
  flex-direction: column;
}
.main {
  font-size: 16px;
  font-weight:700;
  color: #576460;
  line-height:1.5;
}
.main:nth-child(1) {
  margin-bottom: 15px;
}
.bottom-panel {
  position: fixed;
  bottom: 10px;
  left: 600px;
  width: 640px;
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.button:nth-child(1),
.button:nth-child(2) {
  flex: 1;
  color: black;
  background-color: #fff;
}


.button:nth-child(3) {
  flex: 2;
  color: white;
  background-color: #517e8f;
  border-radius: 18px
}


</style>
