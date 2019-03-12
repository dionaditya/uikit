export default {
  install: (Vue) => {
    Vue.component(
      'RfCheckbox',
      () => import(/* webpackChunkName: "RfCheckbox" */ './RfCheckbox')
    )
  }
}
