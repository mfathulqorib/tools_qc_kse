import { credentials } from '@/utils/clientSecret'
import { google } from 'googleapis'

// authenticates the service account to be used in this context

// const auth = new google.auth.GoogleAuth({
//     keyFilename: credentials,
//     scopes: [
//         'https://www.googleapis.com/auth/drive',
//         'https://www.googleapis.com/auth/drive.file',
//         'https://www.googleapis.com/auth/spreadsheets',
//     ],
// })

const { client_secret, client_id, redirect_uris } = credentials
const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
)

oauth2Client.setCredentials({})

export const drive = google.drive({ version: 'v3', auth: oauth2Client })

// export async function getData() {
//     // allows you to use drive API methods e.g. listing files, creating files.
//     const drive = google.drive({ version: 'v3', auth })
//     try {
//         const res = await drive.files.list()
//         const files = res.data.files

//         console.log(files)

//         return files
//     } catch (error) {
//         console.error('Error fetching files:', error.message)
//         return null
//     }
// }
