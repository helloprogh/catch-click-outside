import directive from './src/clickOutside'

const plugin = {
  install(Vue) {
    Vue.directive('click-outside', directive)
  },
  directive,
}

export default plugin