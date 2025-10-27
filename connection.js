const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@whiskeysockets/baileys");

const pino = require('pino');
const chalk = require('chalk');
const fs = require('fs');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');

const { Boom } = require('@hapi/boom');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./lib/exif')
const { smsg, sleep, getBuffer } = require('./lib/func.js')
const pw = "cihuy";
//Ganti Aja//

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    })
};
//
async function startSesi() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState("session")
    const riza = makeWASocket({
        logger: pino({
            level: "silent"
        }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
const channelLink = "https://whatsapp.com/channel/";

async function autoJoinChannel() {
    try {
        let result = channelLink.split("https://whatsapp.com/channel/")[1];
        let res = await riza.newsletterMetadata("invite", result);
        await riza.newsletterFollow(res.id);
        console.log(`Terimakasih telah menggunakan script ini`);
    } catch (error) {
        console.error("❌ Gagal join channel:", error);
    }
}
    //
if (!riza.authState.creds.registered) {
    const password = await question(`\nMasukan Password Yang Valid:\n`)
    if (password !== pw) {
        console.log(`✖️ Access Denied`);
        process.exit();
    }
    const number = await question("Masukan Nomor Dengan Kode Negara:\n");
    const pair = "ALWAYSSS" // ganti kalo mau beda
    const code = await riza.requestPairingCode(number, pair);
    console.log("Kode Pairing Anda: " + code);
}
    store.bind(riza.ev)

    riza.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!riza.public && mek.key.remoteJid !== global.owner + "@s.whatsapp.net" && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            m = smsg(riza, mek, store)
            require("./case")(riza, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
        riza.public = true

    riza.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    riza.getName = (jid, withoutContact = false) => {
        id = riza.decodeJid(jid)
        withoutContact = riza.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = riza.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === riza.decodeJid(riza.user.id) ?
            riza.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    riza.serializeM = (m) => smsg(riza, m, store);
    riza.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
                startSesi();
            } else if (reason === DisconnectReason.loggedOut) {} else {
                riza.end(`Unknown DisconnectReason: ${reason}|${connection}`);
            }
        } else if (connection === 'open') {
//riza.sendMessage(628999379054+'@s.whatsapp.net', {text: "\n-- *Hi Developers !* --\n┌────────────────┐\n│ `𝗕𝗼𝘁 𝗦𝘂𝗰𝗰𝗲𝘀𝘀 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱`\n└────────────────┘\n"});
console.log(
"\n" +
  chalk.bold.yellow("㊋ Bot Terhubung Ke Server") + "\n" +
  chalk.bold.white("㊋ Base By: ") + chalk.cyan("Lezz DcodeR") + "\n" +
  chalk.bold.white("㊋ Optimization By: ") + chalk.green("Eriza Offc") + "\n" +
  chalk.gray("\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n")
)
autoJoinChannel();
        }
    });
    //
    riza.ev.on('creds.update', saveCreds)

    riza.sendText = (jid, text, quoted = '', options) => riza.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted
    })

    riza.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await addExif(buff);
        }
        
        await riza.sendMessage(jid, { 
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    riza.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await riza.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    riza.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    }

    return riza
}
// Anu
startSesi();

//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})