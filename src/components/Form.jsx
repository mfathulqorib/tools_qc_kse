'use client'
import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

export const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID
    const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL
    const GOOGLE_SERVICE_PRIVATE_KEY =
        process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY

    // console.log(SPREADSHEET_ID)

    const serviceAccountAuth = new JWT({
        email: GOOGLE_CLIENT_EMAIL,
        key: GOOGLE_SERVICE_PRIVATE_KEY,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)

    // Append Function
    const appendSpreadsheet = async (row) => {
        try {
            // loads document properties and worksheets
            await doc.loadInfo()

            // const sheet = doc.sheetsById[SHEET_ID]
            const sheet = doc.sheetsByIndex[1]
            console.log('title', sheet.title)
            console.log('row count', sheet.rowCount)
            await sheet.addRow(row)
        } catch (e) {
            console.error('Error: ', e)
        }
    }

    const submitForm = (e) => {
        const form = {
            name,
            email,
            phone,
            message,
        }

        e.preventDefault()

        if (
            form.name !== '' &&
            form.email !== '' &&
            form.phone !== '' &&
            form.message !== ''
        ) {
            // Data add for append
            const newRow = {
                Name: form.name,
                Email: form.email,
                Phone: form.phone,
                Message: form.message,
            }
            appendSpreadsheet(newRow)
            // console.log('new row', newRow)
            // console.log(newRow)

            // setMessage('')
            // setPhone('')
            // setName('')
            // setEmail('')
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const form = {
    //         name,
    //         email,
    //         phone,
    //         message,
    //     }

    //     const response = await fetch('api/v1/database', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(form),
    //     })
    //     const content = await response.json()
    //     console.log(content)
    //     alert(content.data.tableRange)

    //     setMessage('')
    //     setPhone('')
    //     setName('')
    //     setEmail('')

    //     console.log(form)
    // }

    return (
        <main className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-5xl py-16">
                <form className="space-y-4 py-4" onSubmit={submitForm}>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="sm:text-md block w-64 rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="sm:text-md block w-64 rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="phonne" className="sr-only">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="sm:text-md block w-64 rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>
                        <textarea
                            type="text"
                            name="message"
                            id="message"
                            className="sm:text-md block w-64 rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="flex w-64 items-center justify-center rounded-md bg-indigo-500 px-2 py-3 text-sm text-white shadow-md "
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}
