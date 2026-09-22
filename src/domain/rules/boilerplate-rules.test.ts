import * as assert from 'assert'
import { BoilerplateRules } from './boilerplate-rules'
import type { BoilerplateConfig } from '../entities/settings'

suite('Domain: BoilerplateRules Test Suite', () => {
  suite('getAvailableStyleEngines', () => {
    test('Should return styled-components and stylesheet for mobile (removing tailwind)', () => {
      const engines = BoilerplateRules.getAvailableStyleEngines('mobile')
      assert.deepStrictEqual(engines, ['styled-components', 'stylesheet'])
    })

    test('Should return styled-components and tailwind for web (removing stylesheet)', () => {
      const engines = BoilerplateRules.getAvailableStyleEngines('web')
      assert.deepStrictEqual(engines, ['styled-components', 'tailwind'])
    })

    test('Should apply web rules (remove stylesheet) when platform is null or undefined', () => {
      const enginesNull = BoilerplateRules.getAvailableStyleEngines(null)
      const enginesUndefined = BoilerplateRules.getAvailableStyleEngines()

      assert.deepStrictEqual(enginesNull, ['styled-components', 'tailwind'])
      assert.deepStrictEqual(enginesUndefined, [
        'styled-components',
        'tailwind'
      ])
    })
  })

  suite('isConfigValid', () => {
    test('Should invalidate config if platform is web and styleEngine is stylesheet', () => {
      const config: BoilerplateConfig = {
        platform: 'web',
        styleEngine: 'stylesheet',
        generateTests: true
      }

      assert.strictEqual(BoilerplateRules.isConfigValid(config), false)
    })

    test('Should invalidate config if platform is mobile and styleEngine is tailwind', () => {
      const config: BoilerplateConfig = {
        platform: 'mobile',
        styleEngine: 'tailwind',
        generateTests: true
      }

      assert.strictEqual(BoilerplateRules.isConfigValid(config), false)
    })

    test('Should validate correct configurations for web', () => {
      const configTailwind: BoilerplateConfig = {
        platform: 'web',
        styleEngine: 'tailwind',
        generateTests: true
      }

      const configStyled: BoilerplateConfig = {
        platform: 'web',
        styleEngine: 'styled-components',
        generateTests: false
      }

      assert.strictEqual(BoilerplateRules.isConfigValid(configTailwind), true)
      assert.strictEqual(BoilerplateRules.isConfigValid(configStyled), true)
    })

    test('Should validate correct configurations for mobile', () => {
      const configStylesheet: BoilerplateConfig = {
        platform: 'mobile',
        styleEngine: 'stylesheet',
        generateTests: true
      }

      const configStyled: BoilerplateConfig = {
        platform: 'mobile',
        styleEngine: 'styled-components',
        generateTests: false
      }

      assert.strictEqual(BoilerplateRules.isConfigValid(configStylesheet), true)
      assert.strictEqual(BoilerplateRules.isConfigValid(configStyled), true)
    })
  })
})
