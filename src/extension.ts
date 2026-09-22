import type * as vscode from 'vscode'
import { ExtensionBootstrap } from './bootstrap'

export function activate(context: vscode.ExtensionContext) {
  const bootstrap = new ExtensionBootstrap(context)
  bootstrap.initialize()
}

export function deactivate() {}
