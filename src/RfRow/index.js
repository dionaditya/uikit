export default {
  install: (Vue) => {
    Vue.component(
      'RfRow',
      () => import(/* webpackChunkName: "RfRow" */ './RfRow')
    )
  }
}
