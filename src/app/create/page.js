import { cookies } from 'next/headers'
import { initDatabase } from '@/db/init'
import { getUserIdByToken } from '@/data/users'
import { createPost } from '@/data/posts'
import { redirect } from 'next/navigation'
import { CreatePost } from '@/components/CreatePost'

export default function CreatePostPage() {
  const token = cookies().get('AUTH_TOKEN')

  async function createPostAction(formData) {
    'use server'
    const userId = getUserIdByToken(token?.value)
    await initDatabase()
    const post = await createPost(userId, {
      title: formData.get('title'),
      contents: formData.get('contents'),
    })
    redirect(`/posts/${post._id}`)
  }

  if (!token?.value) {
    return <strong>You need to be logged in to create posts!</strong>
  }
  return <CreatePost createPostAction={createPostAction} />
}
