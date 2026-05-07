import * as vscode from 'vscode'
import { EXTENSION_ID } from '../constants'
import { ExtensionConfig } from '../types'

export class SettingsManager {
  private config: ExtensionConfig

  constructor() {
    this.config = this.loadSettings()
  }

  public refresh(): void {
    this.config = this.loadSettings()
  }

  private loadSettings(): ExtensionConfig {
    const wsConfig = vscode.workspace.getConfiguration(EXTENSION_ID)

    return {
      useTypeScript: wsConfig.get('useTypeScript') ?? true,
      includeTestFile: wsConfig.get('includeTestFile') ?? false,
      stylingLibrary: wsConfig.get('stylingLibrary') ?? 'tailwind-css',
    }
  }

  public getSettings(): ExtensionConfig {
    return this.config
  }
}
