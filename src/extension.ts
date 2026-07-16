import type * as vscode from 'vscode'
import { ExtensionBootstrap } from './bootstrap'

let bootstrap: ExtensionBootstrap | undefined

export function activate(context: vscode.ExtensionContext) {
  bootstrap = new ExtensionBootstrap(context)
  bootstrap.initialize()
}

export function deactivate() {
  if (bootstrap) {
    bootstrap.dispose()
    bootstrap = undefined
  }
}
