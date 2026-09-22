export interface FileSystem {
  exists(path: string): Promise<boolean>
  createDirectory(dirPath: string): Promise<void>
  writeFile(filePath: string, content: string): Promise<void>
}
