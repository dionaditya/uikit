export default {
  install: (Vue) => {
    Vue.component(
      'RfButton',
      () => import(/* webpackChunkName: "RfButton" */ './RfButton')
    )
  }
}
