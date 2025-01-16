import { FullPost } from '@/components/FullPost'
import { notFound } from 'next/navigation'
import { getPostById } from '@/data/posts'
import { initDatabase } from '@/db/init'

export default async function ViewPostPage({ params }) {
  await initDatabase()
  const post = await getPostById(params.id)
  if (!post) notFound()

  console.log(post)
  return <FullPost {...post} />
}
