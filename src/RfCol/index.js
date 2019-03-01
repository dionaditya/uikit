export default {
  install: (Vue) => {
    Vue.component(
      'RfCol',
      () => import(/* webpackChunkName: "RfCol" */ './RfCol')
    )
  }
}
