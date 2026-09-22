import type { PLATFORMS, STYLE_ENGINES } from '../constants/boilerplate'

export type Platform = (typeof PLATFORMS)[number]
export type StyleEngine = (typeof STYLE_ENGINES)[number]

export interface BoilerplateConfig {
  readonly platform: Platform | null
  readonly styleEngine: StyleEngine | null
  readonly generateTests: boolean
}

export interface ExtensionSettings {
  readonly boilerplate: BoilerplateConfig
}
