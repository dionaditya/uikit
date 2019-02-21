export default {
  install: (Vue) => {
    Vue.component(
      'RfTextInput',
      () => import(/* webpackChunkName: "RfTextInput" */ './RfTextInput')
    )
  }
}
