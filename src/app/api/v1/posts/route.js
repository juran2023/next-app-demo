import { initDatabase } from '@/db/init'
import { listAllPosts } from '@/data/posts'

/* export const dynamic = 'force-dynamic' */

export async function GET() {
  await initDatabase()
  const posts = await listAllPosts()
  return Response.json({ posts, currentTime: Date.now() })
}
