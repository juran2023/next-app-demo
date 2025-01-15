import 'server-only'
import { User } from '@/db/models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function createUser({ username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ username, password: hashedPassword })
  return await user.save()
}

export async function loginUser({ username, password }) {
  const user = await User.findOne({ username })
  if (!user) {
    throw new Error('invalid username')
  }
  const isCorrectPassword = await bcrypt.compare(password, user.password)
  if (!isCorrectPassword) {
    throw new Error('invalid username')
  }

  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  })
  return token
}

export async function getUserInfoById(userId) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('user not found')
  }
  return { username: user.username }
}
