export interface UserInterface {
  showInfoMessage(message: string): Promise<void>
  showErrorMessage(message: string): Promise<void>
  showInputBox(options?: InputBoxOptions): Promise<string>
  showQuickPick(items: string[], options?: QuickPickOptions): Promise<string>
}

export interface InputBoxOptions {
  value?: string
  prompt?: string
  placeholder?: string
  validateInput?: (
    value: string
  ) => string | undefined | Promise<string | undefined>
}

export interface QuickPickOptions {
  title?: string
  placeholder?: string
}
