import * as vscode from 'vscode'

export abstract class BaseCommand<TArgs extends unknown[] = []> {
  abstract readonly id: string

  async execute(...args: TArgs): Promise<void> {
    try {
      if (!vscode.workspace.workspaceFolders) {
        vscode.window.showWarningMessage(
          'No workspace folders found. Please open a folder before running this command.'
        )

        return
      }

      await this.run(...args)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      vscode.window.showErrorMessage(
        `An error occurred while running the command: ${message}`
      )
    }
  }

  protected abstract run(...args: TArgs): Promise<void>
}
