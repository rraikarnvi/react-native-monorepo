import { Platform as _Platform } from 'react-native'

import {
  PlataformSelectSpecificsEnhanced,
  PlatformName,
  PlatformRealOS,
  PlatformSelectOptions,
} from './index.shared'



// https://stackoverflow.com/a/4819886/2228575
function supportsTouchInput() {
  if ('ontouchstart' in window) {
    return true
  }

  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')

  const mq = (q: string) => window.matchMedia(q).matches
  return mq(query)
}

function getOSName(): PlatformRealOS | undefined {
  const userAgent =
    typeof navigator === 'undefined' || typeof window === 'undefined'
      ? ''
      : navigator.userAgent || navigator.vendor || (window as any).opera || ''

  if (/android/i.test(userAgent)) return 'android'

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream)
    return 'ios'

  const platform =
    typeof navigator === 'undefined'
      ? ''
      : `${navigator.platform || ''}`.toLowerCase().trim()

  if (platform.startsWith('mac')) return 'macos'
  if (platform.startsWith('win')) return 'windows'
  if (platform.startsWith('linux')) return 'linux'

  return undefined
}

const realOS = getOSName() || 'web'

export const Platform = {
  realOS,
  ..._Platform,
  isStandalone: (window.navigator as any).standalone,
  OS: _Platform.OS as PlatformName,
  selectUsingRealOS<T>(
    specifics: PlataformSelectSpecificsEnhanced<T>,
    { fallbackToWeb = true }: PlatformSelectOptions = {},
  ) {
    const result =
      Platform.realOS in specifics
        ? specifics[realOS]
        : fallbackToWeb && 'web' in specifics
        ? specifics.web
        : specifics.default

    return result
  },
  supportsTouch: supportsTouchInput(),
}