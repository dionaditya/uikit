import RfButton from './RfButton'
import RfTextInput from './RfTextInput'

const components = [
  RfButton,
  RfTextInput,
]

export {
  RfButton,
  RfTextInput
}

export default {
  install: Vue => components.forEach(component => Vue.use(component))
}
