import * as vscode from 'vscode'

export class FileManager {
  async fileExists(uri: vscode.Uri): Promise<boolean> {
    try {
      const stat = await vscode.workspace.fs.stat(uri)
      return stat.type === vscode.FileType.File
    } catch  {
        return false
    }
  }

  async directoryExists(uri: vscode.Uri): Promise<boolean> {
    try {
      const stat = await vscode.workspace.fs.stat(uri)
      return stat.type === vscode.FileType.Directory
    } catch  {
        return false
    }
  }

  async createDirectory(uri: vscode.Uri): Promise<void> {
    const exists = await this.directoryExists(uri)
    if (!exists) await vscode.workspace.fs.createDirectory(uri)
  }

  async createFile(uri: vscode.Uri, content: string): Promise<void> {
    const contentData = new TextEncoder().encode(content)
    await vscode.workspace.fs.writeFile(uri, contentData)
  }
}
