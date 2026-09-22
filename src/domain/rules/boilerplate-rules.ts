import type {
  Platform,
  StyleEngine,
  BoilerplateConfig
} from '../entities/settings'
import { STYLE_ENGINES } from '../constants/boilerplate'

export class BoilerplateRules {
  static getAvailableStyleEngines(platform?: Platform | null): StyleEngine[] {
    if (platform === 'mobile') {
      return STYLE_ENGINES.filter(engine => engine !== 'tailwind')
    }

    return STYLE_ENGINES.filter(engine => engine !== 'stylesheet')
  }

  static isConfigValid(config: BoilerplateConfig): boolean {
    if (config.platform === 'web' && config.styleEngine === 'stylesheet') {
      return false
    }

    if (config.platform === 'mobile' && config.styleEngine === 'tailwind') {
      return false
    }

    return true
  }
}
