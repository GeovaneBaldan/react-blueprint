import * as path from 'path'
import * as fs from 'fs/promises'
import type { FileSystem } from '../../application/interfaces/services'

export class NodeFileSystem implements FileSystem {
  public async writeFile(filePath: string, content: string): Promise<void> {
    const directory = path.dirname(filePath)
    await this.createDirectory(directory)
    await fs.writeFile(filePath, content, 'utf-8')
  }

  public async exists(path: string): Promise<boolean> {
    try {
      await fs.access(path)
      return true
    } catch {
      return false
    }
  }

  public async createDirectory(dirPath: string): Promise<void> {
    await fs.mkdir(dirPath, { recursive: true })
  }
}
