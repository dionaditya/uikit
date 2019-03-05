import RfButton from './RfButton'
import RfTextInput from './RfTextInput'
import RfContainer from './RfContainer'
import RfRow from './RfRow'
import RfCol from './RfCol'
import RfNav from './RfNav'
import RfNavBar from './RfNavBar'
import RfSideBar from './RfSideBar'

import './styles/custom.scss'

const components = [
  RfButton,
  RfTextInput,
  RfContainer,
  RfRow,
  RfCol,
  RfNav,
  RfNavBar,
  RfSideBar,
]

export {
  RfButton,
  RfTextInput,
  RfContainer,
  RfRow,
  RfCol,
  RfNav,
  RfNavBar,
  RfSideBar,
}

export default {
  install: Vue => components.forEach(component => Vue.use(component))
}
