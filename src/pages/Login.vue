<template>
  <div class="center login-container">
    <Card class="login-wrap">
      <p slot="title">LOGIN</p>
      <div class="center wrap">
        <Form class="login-from" :label-width="80" style="width:80%;">
          <FormItem label="用户名:">
            <Input v-model="username" />
          </FormItem>
          <FormItem label="密码:">
            <Input type="password" v-model="password" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="submitLogin">确定</Button>
          </FormItem>
        </Form>
      </div>
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
      const {username, password} = this
      const params = {username, password}
      this.axios.post('/user/login', params)
        .then(res => {
          console.log(res)
        })
    }
  }
})
</script>


<style lang="less" scoped>
  .login-container{
    height: 100vh;
  }
  .login-wrap{
    width: 600px;
  }
</style>