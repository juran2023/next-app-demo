import { PostList } from '@/components/PostList'
import { initDatabase } from '@/db/init'
import { listAllPosts } from '@/data/posts'

export default async function HomePage() {
  await initDatabase()
  const posts = await listAllPosts()
  console.log(`posts.length: ${posts.length}`)
  console.log(`${new Date()}: listAllPosts:`, posts)
  return <PostList posts={posts} />
}
