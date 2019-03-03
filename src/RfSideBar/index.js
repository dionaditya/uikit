export default {
  install: (Vue) => {
    Vue.component(
      'RfSideBar',
      () => import(/* webpackChunkName: "RfSideBar" */ './RfSideBar')
    )
  }
}
