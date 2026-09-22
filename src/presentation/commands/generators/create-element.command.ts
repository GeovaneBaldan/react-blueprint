import * as vscode from 'vscode'
import { BaseCommand } from '../base'
import { EXTENSION_ID } from '../../../constants'
import type { SettingsRepository } from '../../../application/interfaces/settings.repository'

export class CreateElementCommand extends BaseCommand<[vscode.Uri]> {
  public readonly id = `${EXTENSION_ID}.generateComponent`

  constructor(private readonly settingsRepository: SettingsRepository) {
    super()
  }

  protected async run(uri?: vscode.Uri): Promise<void> {
    const targetPath =
      uri?.fsPath ?? vscode.workspace.workspaceFolders?.[0]?.uri.fsPath

    console.log(targetPath)
  }
}
