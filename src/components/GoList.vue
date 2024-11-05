<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const count = ref(0)
const load = () => {
  count.value += 2
}
function goToMain() {
  console.log('aa')
  router.push('/');
}
</script>

<template>
  <button class="btn" @click="goToMain">返回</button>
  <div class="word">报名人员</div>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">
      <div>
        aaa

      </div>
    </li>
  </ul>
</template>

<style scoped>
.infinite-list {
  height: 900px;
  width: 800px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.btn{
  margin-top: 0px;
  margin-left: 400px;
  border-radius: 18px;
  background-color: lightblue;
  padding: 20px 30px;
}
.word{
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 880px;
  font-size: 30px;
}
</style>
