export type Platform = 'web' | 'mobile'
export type StyleEngine = 'styled-components' | 'tailwind' | 'stylesheet'

export interface BoilerplateConfig {
  readonly styleEngine: StyleEngine | null
  readonly platform: Platform | null
  readonly generateTests: boolean
}
