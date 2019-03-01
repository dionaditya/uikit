export default {
  install: (Vue) => {
    Vue.component(
      'RfNav',
      () => import(/* webpackChunkName: "RfNav" */ './RfNav')
    )
  }
}
