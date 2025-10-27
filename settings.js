const fs = require('fs')
const chalk = require('chalk')

//Settings
global.owner = "6285741132587"
global.ownername = "AL"
global.namabot = "♨️︎"
global.versisc = "5.0"
global.simbol = "ネ"
global.zz = "`"
global.linkgc = "https://chat.whatsapp.com/"
global.idGc = "0@g.us"
global.linkSaluran = "https://whatsapp.com/channel/"
global.idSaluran = "0@newsletter"
global.namaSaluran = "©"

// >~~~~~~~~ Setting Message ~~~~~~~~~< //
global.msg = {
wait: "Memproses . . .", 
owner: "Fitur ini khusus untuk owner!", 
premium: "Fitur ini khusus murbug!", 
group: "Fitur ini untuk dalam grup!", 
admin: "Fitur ini untuk admin grup!", 
botadmin: "Fitur ini hanya untuk bot menjadi admin"
}
//Thumbnail
global.imgthumb = "https://img1.pixhost.to/images/6151/605839325_imgtmp.jpg"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})