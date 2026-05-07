export interface ExtensionConfig {
  useTypeScript: boolean
  includeTestFile: boolean
  stylingLibrary: StylingLibrary
}

type StylingLibrary = 'styled-components' | 'tailwind-css' | 'native-style-sheets'
