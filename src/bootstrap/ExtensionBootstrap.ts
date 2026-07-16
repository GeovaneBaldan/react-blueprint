import * as vscode from 'vscode'

import { EXTENSION_ID } from '../constants'
import { VsCodeSettingsRepository } from '../infrastructure/vscode'

import type { BaseCommand } from '../presentation/commands/base'

export class ExtensionBootstrap {
  private readonly disposables: vscode.Disposable[] = []

  constructor(private readonly context: vscode.ExtensionContext) {}

  public initialize(): void {
    const settingsRepository = new VsCodeSettingsRepository(EXTENSION_ID)

    const configListener = vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration(EXTENSION_ID)) settingsRepository.refresh()
    })

    this.disposables.push(configListener)
  }

  private registerCommands(commands: BaseCommand<any>[]): void {
    for (const command of commands) {
      const disposable = vscode.commands.registerCommand(
        command.id,
        (...args) => command.execute(...args)
      )

      this.disposables.push(disposable)
    }
  }

  public dispose(): void {
    while (this.disposables.length) {
      const item = this.disposables.pop()
      if (item) item.dispose()
    }
  }
}
