import * as vscode from 'vscode'

import type {
  BoilerplateConfig,
  ExtensionSettings
} from '../../domain/entities/settings'
import type { SettingsRepository } from '../../domain/repositories'
import type { Platform, StyleEngine } from '../../domain/entities/settings'

export class VsCodeSettingsRepository implements SettingsRepository {
  private cache: ExtensionSettings | null = null

  constructor(private readonly extensionId: string) {}

  getSettings(): ExtensionSettings {
    if (!this.cache) this.refresh()
    return this.cache!
  }

  getBoilerplateConfig(): BoilerplateConfig {
    return this.getSettings().boilerplate
  }

  refresh(): void {
    const config = vscode.workspace.getConfiguration(this.extensionId)

    this.cache = {
      boilerplate: {
        platform: config.get<Platform>('boilerplate.platform') ?? null,
        styleEngine: config.get<StyleEngine>('boilerplate.styleEngine') ?? null,
        generateTests: config.get<boolean>('boilerplate.generateTests', true)
      }
    }
  }
}
