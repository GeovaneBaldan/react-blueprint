import * as vscode from 'vscode'

export abstract class BaseCommand<
  TArgs extends unknown[] = [],
  TReturn = void
> {
  abstract readonly id: string
  protected requireWorkspace: boolean = true

  async execute(...args: TArgs): Promise<TReturn | undefined> {
    try {
      const isInsideWorkspace = !!vscode.workspace.workspaceFolders?.length

      if (this.requireWorkspace && !isInsideWorkspace) {
        vscode.window.showWarningMessage(
          'No workspace folders found. Please open a folder before running this command.'
        )

        return undefined
      }

      return await this.run(...args)
    } catch (error) {
      this.handleError(error)
      return undefined
    }
  }

  protected abstract run(...args: TArgs): Promise<TReturn>

  protected handleError(error: unknown): void {
    const message = error instanceof Error ? error.message : String(error)
    vscode.window.showErrorMessage(`Command '${this.id}' failed: ${message}`)
  }
}
