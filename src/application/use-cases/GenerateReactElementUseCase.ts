import type { Platform } from '../../domain/entities/settings'
import type { SettingsRepository } from '../interfaces/repositories'

export class GenerateReactElementUseCase {
  constructor(private readonly settingsRepository: SettingsRepository) {}

  public async execute(): Promise<void> {
    const platform = await this.resolvePlatform()
  }

  private async resolvePlatform(): Promise<Platform> {
    const settings = this.settingsRepository.getBoilerplateConfig()
    if (settings.platform) return settings.platform
  }
}
