// import { google } from 'googleapis'

// // authenticates the service account to be used in this context
// const auth = new google.auth.GoogleAuth({
//     keyFilename: 'credentials.json',
//     scopes: [
//         'https://www.googleapis.com/auth/drive',
//         'https://www.googleapis.com/auth/drive.file',
//         'https://www.googleapis.com/auth/spreadsheets',
//     ],
// })

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
