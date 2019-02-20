<template>
  <div class="center login-container">
    <Card class="login-wrap">
      <p slot="title">LOGIN</p>
      <Form class="login-from" :label-width="80">
        <FormItem label="用户名">
          <Input v-model="username" />
        </FormItem>
        <FormItem label="密码">
          <Input v-model="password" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submitLogin">确定</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin(){
      console.log(this.username, this.password);
    }
  }
})
</script>


<style lang="scss" scoped>
  .login-container{
    height: 100vh;
  }
  .login-wrap{
    width: 600px;
    min-height: 400px;
  }
</style>