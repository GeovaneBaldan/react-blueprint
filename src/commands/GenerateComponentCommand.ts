import * as vscode from 'vscode'
import { SettingsManager } from '../config/SettingsManager'

export class GenerateComponentCommand {
  constructor(private settingsManager: SettingsManager) {}

  public async execute(uri: vscode.Uri) {
    const settings = this.settingsManager.getSettings()

    const componentName = await vscode.window.showInputBox({
      prompt: 'Nome do Componente'
    })

    if (!componentName) return

    // const engine = new TemplateEngine(settings)
    // const code = engine.generateComponent(componentName)

    // Lógica para salvar arquivo...
    vscode.window.showInformationMessage(`Componente ${settings.stylingLibrary} gerado com sucesso!`)
  }
}
