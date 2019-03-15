export default {
  install: (Vue) => {
    Vue.component(
      'RfRadio',
      () => import(/* webpackChunkName: "RfRadio" */ './RfRadio')
    )
  }
}
