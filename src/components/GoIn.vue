<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const router = useRouter();

function goToMain() {
  console.log('aa')
  router.push('/');
}
// do not use same name with ref
const form = reactive({
  name: '',
  phoneNumber: '',
  wxNumber: '',
  place: '',
  job: '',
  more: '',
})

const onSubmit = () => {
  console.log('submit!')
  localStorage.setItem('formData', JSON.stringify(form));

  const storedData = localStorage.getItem('formData');
  console.log('存储的数据：', JSON.parse(storedData));
  ElMessage.success('表单数据已存储到本地存储');

}
</script>

<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px margin:">
    <el-form-item label="姓名" >
      <el-input v-model="form.name" placeholder="点此输入 姓名"/>
    </el-form-item>
    <el-form-item label="手机号码" >
      <el-input v-model="form.phoneNumber" placeholder="点此输入 手机号码"/>
    </el-form-item>
    <el-form-item label="微信号">
      <el-input v-model="form.wxNumber" placeholder="点此输入 微信号" />
    </el-form-item>
    <el-form-item label="工作单位">
      <el-input v-model="form.place" placeholder="点此输入 工作单位"/>
    </el-form-item>



    <el-form-item label="职务">
      <el-input v-model="form.job" type="textarea" placeholder="点此输入 职务" />
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.more" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="goToMain">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>
