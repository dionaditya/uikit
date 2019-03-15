export default {
  install: (Vue) => {
    Vue.component(
      'RfComboBox',
      () => import(/* webpackChunkName: "RfComboBox" */ './RfComboBox')
    )
  }
}
