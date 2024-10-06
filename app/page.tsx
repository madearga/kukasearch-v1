import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'

export const maxDuration = 60

export default function Page() {
  const id = generateId()
  return (
    <>
      <SignedIn>
        <AI initialAIState={{ chatId: id, messages: [] }}>
          <Chat id={id} />
        </AI>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
