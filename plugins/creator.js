let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Fahil;;;\nFN:Fahil\nORG:Fahil\nTITLE:\nitem1.TEL;waid=6287833306677:+62 878-3330-6677\n\nitem2.URL:https://desty.page/fahil\nitem3.EMAIL;type=INTERNET:mfatahillah099@gmail.com\nitem4.ADR:;;Indonesia\nEND:VCARD`

await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/xianzhe_xx/',
    mediaType: 2, 
    description: sig,
    title: "Created by Xianzhe ID",
    body: wm,
    thumbnail: fs.readFileSync('./media/xianzhe1.jpg'),
    sourceUrl: sig
     }}
  })
    catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner nomor)/i
export default handler
