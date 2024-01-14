'use client'

import { Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'

export default function Home() {
    return (
        <main>
            <Button onClick={() => signIn('google', { callbackUrl: '/test' })}>
                Login with google
            </Button>
        </main>
    )
}
