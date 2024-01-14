// import { google } from 'googleapis'
// import { NextResponse as res } from 'next/server'

// export async function POST(req) {
//     const { name, email, phone, message } = await req.json()

//     try {
//         const auth = new google.auth.googleAuth({
//             credential: {
//                 client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
//                 private_key:
//                     process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY?.replace(
//                         /\\n/g,
//                         '\n'
//                     ),
//             },
//             scopes: [
//                 'https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/drive.file',
//                 'https://www.googleapis.com/auth/spreadsheets',
//             ],
//         })

//         const sheets = google.sheets({
//             auth,
//             version: 'v4',
//         })

//         const response = await sheets.spreadsheets.values.append({
//             spreadsheetId: process.env.GOOGLE_SHEET_ID,
//             range: 'A1:D1',
//             valueInputOption: 'USER_ENTERED',
//             requestBody: {
//                 values: [[name, email, phone, message]],
//             },
//         })

//         return res.json({ data: response.data }, { status: 200 })
//     } catch (error) {
//         console.log(error)
//     }
// }
