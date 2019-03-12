export default {
  install: (Vue) => {
    Vue.component(
      'RfButtonPrimary',
      () => import(/* webpackChunkName: "RfButtonPrimary" */ './RfButtonPrimary')
    )
  }
}
