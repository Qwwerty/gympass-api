import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',

  setup: async () => {
    console.log('🚀 ~ file: prisma-test-environment.ts:7 ~ setup: ~ setup:')
    return {
      teardown() {
        console.log(
          '🚀 ~ file: prisma-test-environment.ts:9 ~ setup: ~ teardown:',
        )
      },
    }
  },

  transformMode: 'ssr',
}
