import * as vscode from 'vscode'
import { EXTENSION_ID } from './constants'
import type { BaseCommand } from './presentation/commands/base'
import { VsCodeSettingsRepository } from './infrastructure/vscode/settings.repository'
import { CreateElementCommand } from './presentation/commands/generators/create-element.command'

export class ExtensionBootstrap {
  constructor(private readonly context: vscode.ExtensionContext) {}

  public initialize(): void {
    const settingsRepository = new VsCodeSettingsRepository(EXTENSION_ID)

    const configListener = vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration(EXTENSION_ID)) settingsRepository.refresh()
    })

    this.context.subscriptions.push(configListener)

    const createComponentCommand = new CreateElementCommand(settingsRepository)

    this.registerCommands([createComponentCommand])
  }

  private registerCommands(commands: BaseCommand<any>[]): void {
    for (const command of commands) {
      const disposable = vscode.commands.registerCommand(
        command.id,
        (...args) => command.execute(...args)
      )

      this.context.subscriptions.push(disposable)
    }
  }
}
