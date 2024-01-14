'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export const Provider = ({ children }) => {
    return (
        <SessionProvider>
            <NextUIProvider>
                <div>{children}</div>
            </NextUIProvider>
        </SessionProvider>
    )
}
