import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'react-blueprint.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World from React Blueprint!')
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
