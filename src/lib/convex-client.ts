import { ConvexClient } from 'convex/browser'
import { env } from '~/env'

export const convexClient = new ConvexClient(env.VITE_CONVEX_URL)
