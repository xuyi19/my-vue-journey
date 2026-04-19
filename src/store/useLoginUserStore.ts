import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCurrentUser } from '@/api/user.ts'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    username: '未登录',
  })
  //远程获取用户信息
  async function fetchLoginUser() {
    try {
      const res = await getCurrentUser()
      if (res.data.code === 0 && res.data.data) {
        loginUser.value = res.data.data
        return
      }
    } catch (error) {
      // 接口调用失败
    }

    //  模拟登录：3秒后自动登录为小黑子
    // await new Promise(resolve => setTimeout(resolve, 3000))
    // loginUser.value = { username: '小黑子', id: 1 }
  }
  //单独设置信息
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, fetchLoginUser, setLoginUser }
})

