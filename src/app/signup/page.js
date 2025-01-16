import { redirect } from 'next/navigation'
import { createUser } from '@/data/users'
import { initDatabase } from '@/db/init'

import { Signup } from '@/components/Signup'

export default function SignupPage() {
  return <Signup signupAction={signupAction} />
}

async function signupAction(prevState, formData) {
  'use server'
  try {
    await initDatabase()
    await createUser({
      username: formData.get('username'),
      password: formData.get('password'),
    })
  } catch (err) {
    return { error: err.message }
  }
  redirect('/login')
}
