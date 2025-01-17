import { PostList } from '@/components/PostList'
import { initDatabase } from '@/db/init'
import { listAllPosts } from '@/data/posts'

export default async function HomePage() {
  await initDatabase()
  const posts = await listAllPosts()
  console.log(`posts.length: ${posts.length}`)
  return <PostList posts={posts} />
}
