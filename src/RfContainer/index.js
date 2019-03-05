export default {
  install: (Vue) => {
    Vue.component(
      'RfContainer',
      () => import(/* webpackChunkName: "RfContainer" */ './RfContainer')
    )
  }
}
