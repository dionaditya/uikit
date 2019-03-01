import RfButton from './RfButton'
import RfTextInput from './RfTextInput'
import RfContainer from './RfContainer'
import RfRow from './RfRow'
import RfCol from './RfCol'
import RfNav from './RfNav'
import RfNavBar from './RfNavBar'

import './styles/custom.scss'

const components = [
  RfButton,
  RfTextInput,
  RfContainer,
  RfRow,
  RfCol,
  RfNav,
  RfNavBar,
]

export {
  RfButton,
  RfTextInput,
  RfContainer,
  RfRow,
  RfCol,
  RfNav,
  RfNavBar,
}

export default {
  install: Vue => components.forEach(component => Vue.use(component))
}
