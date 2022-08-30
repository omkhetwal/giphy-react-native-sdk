import { NativeModules } from 'react-native'

export interface INativeGiphyVideoManager {
  muteAll(): void
  pauseAll(): void
}

export const NativeGiphyVideoManager: INativeGiphyVideoManager = NativeModules.GiphyReactNativeVideoManager
