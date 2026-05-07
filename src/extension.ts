import * as vscode from 'vscode'
import { CommandController } from './core/CommandController'

export function activate(context: vscode.ExtensionContext) {
	const commandController = new CommandController(context)
  commandController.registerAll()
}

export function deactivate() {}
