//Subscribe YouTube: XbatsOffc
//©GulbatOfficial
require("./settings")
const fs = require('fs')
const path = require('path')
const util = require('util')
const os = require('os')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const archiver = require('archiver')
const foto = fs.readFileSync('./image/GulbatOfficial.jpg')
const speed = require('performance-now')
const { runtime, formatp, sleep } = require('./lib/func')
const { exec } = require("child_process")
module.exports = async (XbatsOffc, m, store) => {
try {
const from = m.key.remoteJid
const FileType = require('file-type')
const { 
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto, 
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
  } = require("@whiskeysockets/baileys")
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
async function fetchJson(url, options) {
    const res = await fetch(url, options);
    return await res.json();
}
const isPc = from.endsWith('@s.whatsapp.net')
const isCh = from.endsWith('@newsletter')
const isGroup = from.endsWith('@g.us')
const botNumber = await XbatsOffc.decodeJid(XbatsOffc.user.id)
const sender = m.key.fromMe ? (XbatsOffc.user.id.split(':')[0]+'@s.whatsapp.net' || XbatsOffc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot

const groupMetadata = isGroup ? await XbatsOffc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false

const contactJsonPath = './database/contact.json';
const contactVcfPath = './database/contacts.vcf';

const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const isPremium = premium.includes(m.sender)

//Fake Quoted
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qpanel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363333019033320@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${ownername}`, inviteExpiration: 0 }}}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`
}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: '• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •',jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Bot"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚 •`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `• 𝐥𝐞𝐭𝐭𝐲𝐜𝐡𝐢𝐚•`,jpegThumbnail: ""}}}

XbatsOffc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}
// Random Image
const imageUrls = [
        "https://i.ibb.co/m944LxT/image.jpg",
        "https://i.ibb.co/mHSbM3d/image.jpg",
        "https://files.catbox.moe/g4ae8u.jpg",
        "https://files.catbox.moe/9vp33w.jpg",
        "https://files.catbox.moe/6s1c3e.jpg"
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
// Reply
const replyz = (teks) => {
    return XbatsOffc.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 1000000,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                        }
                    }
                }
            }
        }
    }, {})
}
const Qcrl = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    interactiveMessage: {
      body: { 
        title: "", 
        text: "\u0000".repeat(999999),
        footer: "",
        description: ""
      },
      carouselMessage: {
        cards: []
      },
      contextInfo: {
        mentionedJid: ["status@broadcast"]
      }
    }
  }
};

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: foto,
      itemCount: "991111199",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `☢︎𝗛𝗲𝘅𝗗𝗲𝗮𝘁𝗵 𝟭.𝟭 𝗩𝗶𝗽☢︎`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

async function payreply(teks) {
const ppuser = "https://files.catbox.moe/uvlm9q.jpg"; 
return XbatsOffc.sendMessage(
m.chat, { text: `${teks}`, contextInfo: { 
mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, 
title: "𝗚𝘂𝗹𝗯𝗮𝘁𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹", 
body: "GulbatOfficial", 
previewType: "PHOTO" }}}, 
{ quoted: lol })}



//╍╍╍╍╍╍〔𝗔𝗪𝗔𝗟 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡〕╍╍╍╍╍╍╍╍//




//╍╍╍╍╍╍〔𝗔𝗞𝗛𝗜𝗥 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡〕╍╍╍╍╍╍╍╍//

const figlet = require('figlet');
if (m.message && m.text.startsWith('.')) {  // Hanya menampilkan pesan yang diawali dengan titik
    

    // Membuat tampilan hesanzr dengan font besar menggunakan figlet
    figlet('GULBAT', (err, data) => {
        if (err) {
            console.log(chalk.white('Error with figlet...'));
            return;
        }
        console.log(
            chalk.white('\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'+data) + '\n' +  // Hesanzr dengan warna oranye cerah
            chalk.bgRed.white(`⫹ 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 ⫺ `) + chalk.redBright('┃  '+m.text) + '\n' +  // Pesan tebal dan warna cerah
            chalk.bgWhite.black(`⫹ 𝐒𝐄𝐍𝐃𝐄𝐑𝐑 ⫺ `) + chalk.redBright('┃  '+m.sender) + '\n' +  // Pengirim dengan warna cerah
            chalk.bgRed.white(`⫹ 𝐌𝐄𝐒𝐓𝐘𝐏𝐄 ⫺ `) + chalk.redBright('┃  '+m.mtype) + '\n' +  // Jenis pesan dengan merah
            chalk.bgWhite.black(`⫹ 𝐅𝐑𝐎𝐌 𝐈𝐍 ⫺ `) + (m.isGroup ? chalk.redBright('┃  GROUP CHAT') : chalk.redBright('┃  PRIVATE CHAT')) + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'  // Status chat dengan latar belakang
        );
    });
}
const qmsg = (quoted.msg || quoted)
// Gak Usah Di Apa Apain Jika Tidak Mau Error
let ppuser
try {
ppuser = await XbatsOffc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/2lw5hm.jpg'
}

const dbPath = './database/listsc.json';

// Load database
function loadDatabase() {
    if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(dbPath));
}

// Save database
function saveDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
    
    
switch (command) {
case "xmenu": {
let teksnya = `
你好 @${m.sender.split('@')[0]}!

⚠️ *Welcome to LettyChia 黑暗之源* ⚠️ 
This realm is not for the weak... 
Enter the sacred developer channel for updates & arcane knowledge:

${global.zz}𓆩 Mystic Developer Channel 𓆪${global.zz} 
https://whatsapp.com/channel/

${global.zz}⇣ Tap one of the cursed options below ⇣${global.zz}
`;

await XbatsOffc.sendMessage(m.chat, {
 footer: `GulbatOfficial`,
 buttons: [
 {
   buttonId: 'action',
   buttonText: { displayText: '☯️ Open Hell Menu 地狱菜单' },
   type: 4,
   nativeFlowInfo: {
     name: 'single_select',
     paramsJson: JSON.stringify({
       title: '☯️ Choose your path 命运选择',
       sections: [
         {
           title: '★ LettyChia Menu 核心菜单',
           highlight_label: '⚡ Featured',
           rows: [
             {
               title: "💭 BUG MENU 漏洞菜单",
               description: "Unleash the cursed bugs | 放出禁忌之虫",
               id: `.xbugmenu`
             },
             {
               title: "👑 OWNER MENU 拥有者菜单",
               description: "Master of the void | 虚空的主宰",
               id: `.ownermenu`
             }
           ]
         }
       ]
     })
   }
 },
 {
   buttonId: `.tqto`,
   buttonText: { displayText: '🔥 Thanks To 买源码' },
   type: 1
 },
 {
   buttonId: `.dev`,
   buttonText: { displayText: '👑 Owner Bot 拥有者' },
   type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 document: fs.readFileSync("./package.json"),
 fileName: `${global.namabot}`,
 mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
 fileLength: 99999999,
 caption: teksnya,
 contextInfo: {
   isForwarded: true,
   mentionedJid: [m.sender],
   forwardedNewsletterMessageInfo: {
     newsletterJid: global.idSaluran,
     newsletterName: global.namaSaluran
   },
   externalAdReply: {
     title: `${global.namabot} - 2025`,
     body: `已被 WhatsApp 认证 | Verified by WhatsApp`,
     thumbnailUrl: 'https://img1.pixhost.to/images/5962/603210221_imgtmp.jpg',
     sourceUrl: global.linkSaluran,
     mediaType: 1,
     renderLargerThumbnail: true,
   },
 },
}, { quoted: qloc })
}
break;
case 'ownermenu': {
let teksnya = `╭── 「 *INFO BOT* 」
│> ネ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : ${global.ownername}
│> ネ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.namabot}
│> ネ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${global.versisc}
│> ネ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
╰──────────────𖣐

ᖫ═══『 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 』═══ᖭ

> ${global.simbol} ᴘᴜʙʟɪᴄ
> ${global.simbol} sᴇʟғ
> ${global.simbol} ᴀᴅᴅᴍᴜʀʙᴜɢ
> ${global.simbol} ᴅᴇʟᴍᴜʀʙᴜɢ
────────────────⪩`
await XbatsOffc.sendMessage(m.chat, {
  footer: `${global.zz}© Made By GulbatOffc${global.zz}`,
  buttons: [
    {
    buttonId: `.xmenu`,
      buttonText: { displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂' },
      type: 1
    },
    {
      buttonId: `.dev`,
      buttonText: { displayText: '👑 Owner Bot 拥有者' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `LettyChia - V̷5̷.̷0̷.̷0̷`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 10,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `LettyChia - 2̷0̷2̷5̷`,
      body: `Terverifikasi Oleh WhatsApp`,
      thumbnailUrl: global.imgthumb,
      sourceUrl: global.linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
}, {quoted: qloc})
}
break
case 'xbugmenu': {
let teksnya = `
> gunakan bot dengan bijak dan benar, jangan pernah menggunakan bot untuk merusak atau mengganggu seseorang

╭── 「 *INFO BOT* 」
│ ネ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : ${global.ownername}
│ ネ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.namabot}
│ ネ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${global.versisc}
╰──────────────𖣐

┏━『 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 』
┃${global.simbol} ɢᴜʟʙᴀᴛ-ᴀᴛᴛᴀᴄᴋ
┗━━━━━━━━━━━━━━━`
await XbatsOffc.sendMessage(m.chat, {
  footer: `${global.zz}© Made By GulbatOffc${global.zz}`,
  buttons: [
    {
    buttonId: `.xmenu`,
      buttonText: { displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂' },
      type: 1
    },
    {
      buttonId: `.dev`,
      buttonText: { displayText: '👑 Owner Bot 拥有者' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `LettyChia - V̷5̷.̷0̷.̷0̷`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 10,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `LettyChia - 2̷0̷2̷5̷`,
      body: `Terverifikasi Oleh WhatsApp`,
      thumbnailUrl: global.imgthumb,
      sourceUrl: global.linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
}, {quoted: qloc})
}
break
case 'gulbat-attack': {
 if (!isPremium && !isCreator) return m.reply(msg.premium);
 if (!args[0]) return payreply("⚠️ Gunakan: .gulbat-attack [nomor target]");

 let target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';

 let menulol =`╭━[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]
┃ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : GulbatOfficial
┃ 𝗧𝗮𝗿𝗴𝗲𝘁 : ${args[0]}
┃ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲: ${runtime(process.uptime())}
╰━━━━━❍`;

 const buttons = [
 {
 buttonId: 'single_select',
 buttonText: { displayText: '𝗦𝗲𝗹𝗲𝗰𝘁-𝗕𝘂𝗴' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: "𝗦𝗲𝗹𝗲𝗰𝘁-𝗕𝘂𝗴",
 sections: [
 {
 title: " ⌜ Delay Bug|延迟错误💦⌟ ", 
 
 rows: [
 { 
 title: "𝐃𝐞𝐥𝐚𝐲𝐄𝐱𝐭𝐫𝐢𝐦𝐞", 
 description: "Delay By GulbatOfficial", 
 id: ".gulbatdelay " + args[0] 
 }
 ]
 },
 {
 title: " ⌜ Crash Bug|崩溃错误 ⚡ ⌟ ", 
 
 rows: [
 { 
 title: "𝐂𝐫𝐚𝐬𝐡𝐒𝐲𝐬𝐭𝐞𝐦", 
 description: "Crash By GulbatOfficial", 
 id: ".gulbatcrash " + args[0] 
 },
 ]
 }
 ]
 })
 }
 }
 ];

 const buttonMessage = {
 image: {
 url: "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg" // Ganti URL dengan gambar yang diinginkan
 },
 caption: menulol,
 footer: "GulbatOfficial",
 buttons: buttons,
 headerType: 4,
 viewOnce: true
 };

const fakeCentangBiru = {
 key: {
 participant: '0@s.whatsapp.net',
 remoteJid: 'status@broadcast'
 },
 message: {
 locationMessage: {
 name: `Target : wa.me/${args[0]}`,
 jpegThumbnail: null
 }
 }
 };

 await XbatsOffc.sendMessage(m.chat, buttonMessage, { quoted: fakeCentangBiru });
}
break;
case 'gulbatdelay': {
    if (!isPremium && !isCreator) return m.reply(msg.premium);
  let target = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
    if (!target) return m.reply("Gunakan tombol dengan benar!");

    // Mengirim gambar, caption, dan button saat proses
    let Menu = `\`乂 𝗣 𝗥 𝗢 𝗖 𝗘 𝗦 𝗦\`

𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg" // Ganti URL gambar sesuai kebutuhan
        },
        caption: Menu,
        footer: `Proses Attacking Waiting 5m`,
        buttons: [
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: '👑 Owner Bot 拥有者'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });

    // Simulasi waktu proses
    let startTime = Date.now();
    for (let i = 0; i < 30; i++) {
    //Function taro di sini
    
    await sleep(500); // Tunggu 500ms setelah setiap pengiriman
    }

    // Waktu selesai
    let endTime = Date.now();
    let elapsedTime = ((endTime - startTime) / 1000).toFixed(2);

    // Kirim hasil akhir
    const resultImageUrl = 'https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg'; // Ganti URL sesuai kebutuhan
    const resultCaption = `\`乂 𝗗 𝗢 𝗡 𝗘\`
> ᴛᴀʀɢᴇᴛ ʜᴀs ʙᴇᴇɴ ᴄʀᴀsʜᴇᴅ
𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: resultImageUrl
        },
        caption: resultCaption,
        footer: "Proses Attacking Waiting 5m",
        buttons: [
            {
                buttonId: ".xmenu", 
                buttonText: {
                    displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂'
                }
            },
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: '👑 Owner Bot 拥有者'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });
}
break;  
case 'gulbatcrash': {
    if (!isPremium && !isCreator) return m.reply(msg.premium);
  let target = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
    if (!target) return m.reply("Gunakan tombol dengan benar!");

    // Mengirim gambar, caption, dan button saat proses
    let Menu = `\`乂 𝗣 𝗥 𝗢 𝗖 𝗘 𝗦 𝗦\`

𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg" // Ganti URL gambar sesuai kebutuhan
        },
        caption: Menu,
        footer: `Proses Attacking Waiting 5m`,
        buttons: [
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: 'OwnerBot'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });

    // Simulasi waktu proses
    let startTime = Date.now();

    for (let i = 0; i < 50; i++) {
      //function taro disini
      
    await sleep(1000); // Tunggu 500ms setelah setiap pengiriman
    }

    // Waktu selesai
    let endTime = Date.now();
    let elapsedTime = ((endTime - startTime) / 1000).toFixed(2);

    // Kirim hasil akhir
    const resultImageUrl = 'https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg'; // Ganti URL sesuai kebutuhan
    const resultCaption = `\`乂 𝗗 𝗢 𝗡 𝗘\`
> ᴛᴀʀɢᴇᴛ ʜᴀs ʙᴇᴇɴ ᴄʀᴀsʜᴇᴅ
𝐍𝐨𝐦𝐨𝐫 𝐓𝐚𝐫𝐠𝐞𝐭 : ${target}
𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : GulbatDevloper`;

    await XbatsOffc.sendMessage(m.chat, {
        image: {
            url: resultImageUrl
        },
        caption: resultCaption,
        footer: "succes sending bug",
        buttons: [
            {
                buttonId: ".xmenu", 
                buttonText: {
                    displayText: '𝗕𝗮𝗰𝗸 𝗧𝗼 𝗠𝗲𝗻𝘂'
                }
            },
            {
                buttonId: ".dev", 
                buttonText: {
                    displayText: 'OwnerBot'
                }
            }
        ],
        viewOnce: true,
        headerType: 6
    }, { quoted: m });
}
break;  
case 'public': {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    XbatsOffc.public = true
    m.reply(`*Switch To Mode :* \`Public\``)
}
break
case 'dev': {
        try {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${global.ownername}\nTEL;type=CELL;type=VOICE;waid=${global.owner}:+${global.owner}\nEND:VCARD`;

        let quotedMessage = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Kontak Owner Kami`,jpegThumbnail: ""}}}
            
        

        await XbatsOffc.sendMessage(m.chat, { contacts: { displayName: global.ownername, contacts: [{ vcard }] } }, { quoted: quotedMessage });
    } catch (error) {
        console.error("Error saat mengirim kontak owner:", error);
    }
}
break
case "addmurbug": {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let ceknya = await XbatsOffc.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    premium.push(prrkek)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Added ${prrkek} To Murbug`)
}
break

case "delmurbug": {
    if (!isCreator) return
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Removed ${ya} From Murbug`)
}
break

//End Case
default:
if ((budy.match) && ["tes","bot"].includes(budy)) {
m.reply(`
\`Bot Activated ⚡\``)
}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
m.reply(`WaalaikumSalam ${pushname}`)
}

if (budy.startsWith('=>')) {
    if (!isCreator) return

    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        m.reply(String(err));
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}

}
} catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
