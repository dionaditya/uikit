export default {
  install: (Vue) => {
    Vue.component(
      'RfPasswordInput',
      () => import(/* webpackChunkName: "RfPasswordInput" */ './RfPasswordInput')
    )
  }
}
