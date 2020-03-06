import { Platform } from '../libs/index'

export default Platform.select({
  web: () => require('localforage'),
  default: () => require('react-native').AsyncStorage,
})()