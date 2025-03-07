import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'VITE_',

  client: {
    VITE_CONVEX_URL: z.string().url(),
    VITE_APP_URL: z.string().url(),
  },
  /**
   * Makes sure you explicitly access **all** environment variables
   * from `server` and `client` in your `runtimeEnv`.
   */
  runtimeEnvStrict: {
    VITE_CONVEX_URL: import.meta.env.VITE_CONVEX_URL,
    VITE_APP_URL: import.meta.env.VITE_APP_URL,
  },
})
