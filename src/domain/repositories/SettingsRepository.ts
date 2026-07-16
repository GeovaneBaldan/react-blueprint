import type { BoilerplateConfig, ExtensionSettings } from '../entities/settings'

export interface SettingsRepository {
  getSettings(): ExtensionSettings
  getBoilerplateConfig(): BoilerplateConfig
}
