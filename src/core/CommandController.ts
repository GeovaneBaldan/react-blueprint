import * as vscode from 'vscode'
import { SettingsManager } from '../config/SettingsManager'
import { GenerateComponentCommand } from '../commands/GenerateComponentCommand'
import { EXTENSION_ID } from '../constants'

export class CommandController {
  private context: vscode.ExtensionContext
  private settingsManager: SettingsManager

  constructor(context: vscode.ExtensionContext) {
    this.context = context
    this.settingsManager = new SettingsManager()

    this.watchConfigurationChanges()
  }

  public registerAll(): void {
    const generateComponent = new GenerateComponentCommand(this.settingsManager)
    this.register(`${EXTENSION_ID}.generateComponent`, generateComponent.execute.bind(generateComponent))
  }

  private register(commandId: string, callback: (...args: any[]) => void): void {
    const disposable = vscode.commands.registerCommand(commandId, callback)
    this.context.subscriptions.push(disposable)
  }

  private watchConfigurationChanges(): void {
    const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration(EXTENSION_ID)) this.settingsManager.refresh()
    })

    this.context.subscriptions.push(disposable)
  }
}
