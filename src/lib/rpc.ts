import { hc } from 'hono/client'
import type { AppType } from '~/app/api/[[...route]].server'
import { env } from '~/env'

export const client = hc<AppType>(env.VITE_APP_URL)
