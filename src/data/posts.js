import 'server-only'
import { Post } from '@/components/Post'

export async function createPost(userId, { title, contents }) {
  const post = new Post({ author: userId, title, contents })
  return await post.save()
}

export async function listAllPosts() {
  return await Post.find({})
    .sort({ createdAt: 'descending' })
    .populate('author', 'username')
    .lean()
}
