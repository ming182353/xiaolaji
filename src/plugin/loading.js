
import Loading from '@/components/Loading'

export default {
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [options] - 插件安装配置
     */
    install(Vue, options) {
      // 创建"子类"方便挂载  loding组件
      const VueLoading = Vue.extend(Loading)

      let loading = new VueLoading()
      // 手动创建一个未挂载的实例
      loading.$mount()

      // 挂载
      document.querySelector('body').appendChild(loading.$el)
  
      Vue.prototype.$loading = {
          show: () => {
            loading.show()
          },
          hide: () => {
            loading.hide()
          } 
      }
    }
  }