export default {
  install: (Vue) => {
    Vue.component(
      'RfNavBar',
      () => import(/* webpackChunkName: "RfNavBar" */ './RfNavBar')
    )
  }
}
