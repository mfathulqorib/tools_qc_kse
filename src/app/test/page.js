'use client'

import { Form } from '@/components/Form'
import { Button } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'

export default function page() {
    const { data: session } = useSession()

    return (
        <div>
            <p>{session?.user.name || 'tidak ada data'}</p>
            <Button onClick={() => signOut()}>sign out</Button>
            <Form />
        </div>
    )
}
