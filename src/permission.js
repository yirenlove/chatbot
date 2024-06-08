import router from '@/router/index.js'
import { adminRequest } from '@/utils/request.js'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user.js'


const whiteList = ['/login', '/register','/test']


router.beforeEach(async (to, from, next) => {
  const store = useUserStore()

  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    try {
      await adminRequest.post('/auth')
      next()
    } catch (e) {
      store.token = ''
      ElMessage.error('登录过期，请重新登录')
      next('/login')
    }
  }
})
