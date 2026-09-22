import type {
  BoilerplateConfig,
  ExtensionSettings
} from '../../../domain/entities/settings'

export interface SettingsRepository {
  getSettings(): ExtensionSettings
  getBoilerplateConfig(): BoilerplateConfig
}
