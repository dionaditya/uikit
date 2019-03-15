import RfButton from './RfButton'
import RfButtonPrimary from './RfButtonPrimary'
import RfTextInput from './RfTextInput'
import RfPasswordInput from './RfPasswordInput'
import RfCheckbox from './RfCheckbox'
import RfContainer from './RfContainer'
import RfRow from './RfRow'
import RfCol from './RfCol'
import RfNav from './RfNav'
import RfNavBar from './RfNavBar'
import RfSideBar from './RfSideBar'
import RfRadio from './RfRadio'

import './styles/custom.scss'

const components = [
  RfButton,
  RfButtonPrimary,
  RfTextInput,
  RfPasswordInput,
  RfCheckbox,
  RfContainer,
  RfRow,
  RfCol,
  RfNav,
  RfNavBar,
  RfSideBar,
  RfRadio,
]

export {
  RfButton,
  RfButtonPrimary,
  RfTextInput,
  RfContainer,
  RfRow,
  RfCol,
  RfNav,
  RfNavBar,
  RfSideBar,
  RfRadio,
}

export default {
  install: Vue => components.forEach(component => Vue.use(component))
}
