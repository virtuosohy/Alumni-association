<template>
  <button class="btn" @click="goToMain">返回</button>
  <div class="qr-container">
    <div id="qrcode"></div>
    <div class="word">微信扫码使用</div>
  </div>
</template>

<script setup>
import QRCode from 'qrcodejs2';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(() => {
  // 创建二维码实例
  const qrcode = new QRCode('qrcode', {
    text: 'https://www.baidu.com/',
    width: 200,
    height: 200,
  });
  console.log(qrcode);
});

function goToMain() {
  console.log('aa')
  router.push('/');
}
</script>

<style scoped>
.qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#qrcode {
  border: 1px solid #333;
}
.word{
  font-size: 20px;
  display: flex;
  position: absolute;
 margin-top: 280px;
}
.btn{
  margin-top: 40px;
  margin-left: 500px;
  border-radius: 18px;
  background-color: lightblue;
  padding: 20px 30px;
}
</style>
