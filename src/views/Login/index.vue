<template>
  <div class="page">
    <div class="login-box" v-if="type == 'user'" >
        <input type="text" key="username-input" v-model="userName" placeholder="请输入用户名或邮箱" />
        <input type="password" v-model="passWord" placeholder="请输入登录密码" />
        <div class="btn-group">
            <button class="btn red" @click="loginDo('user')">登录</button>
            <button class="btn" @click="type='phone'">短信验证码登录</button>
        </div>
    </div>
    <div class="login-box" v-if="type == 'phone'" >
        <input type="text" key="userphone-input" v-model="userPhone" placeholder="请输入手机号" />
        <p>
            <input type="number" v-model.number="code" placeholder="校验码" />
            <a href="javascript:;">点击获取验证码</a>
        
        </p>
            <div class="btn-group">
                <button class="btn red" @click="loginDo('phone')">登录</button>
                <button class="btn" @click="type='user'" >账号密码登录</button>
            </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'zoom',
  data () {
    return {
      type: 'user',
      userName: '',
      userPhone: '',
      passWord: '',
      code: ''
    }
  },
  methods: {
    loginDo (type) {
      let loginData = {}
      if (type === 'user') {
        loginData['userName'] = this.userName
        loginData['passWord'] = this.passWord
      } else {
        loginData['userPhone'] = this.userPhone
        loginData['code'] = this.code
      }
      window.localStorage.setItem('userInfo', JSON.stringify(loginData))
      let path = window.localStorage.getItem('toPath')
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    padding: 0.2rem;
    .login-box{
        .btn-group{
            margin-top: 0.5rem;
            .btn{
                width: 100%;
                display: block;
                height: 0.4rem;
                border-radius: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                border: 1px solid #ff4d64;
                background: transparent;
                color: #ff4d64;
                margin: 0.1rem 0;
                &.red{
                    background: #ff4d64;
                    color: #fff;
                }
            }
        }
        input{
            display: block;
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.12rem;
            border: 0;
            border-bottom: 1px solid #ff4d64;
            margin-top: 0.1rem;
        }
        p{
            display: -webkit-box;
            margin-top: 0.1rem;
            border-bottom: 1px solid #ff4d64;
            input{
                -webkit-box-flex: 1;
                margin-top: 0;
                border: 0;
            }
            a{
                font-size: 0.12rem;
                line-height: 0.4rem;
                display: block;
                color: #ff4d64;
            }
        }
    }
}
</style>
