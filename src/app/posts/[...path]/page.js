import { FullPost } from '@/components/FullPost'
import { notFound } from 'next/navigation'
import { getPostById } from '@/data/posts'
import { initDatabase } from '@/db/init'

export default async function ViewPostPage({ params }) {
  await initDatabase()
  const [id] = params.path
  console.log(`id: ${id}`)
  const post = await getPostById(id)
  if (!post) notFound()

  console.log(post)
  return <FullPost {...post} />
}

export async function generateMetadata({ params }) {
  const [id] = params.path
  const post = await getPostById(id)
  if (!post) notFound()

  return {
    title: `${post.title} | Full-Stack Next.js Blog`,
    description: `Written by ${post.author.username}`
  }
}