import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: 'Pinging...'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `
          *⸙• 「「⸙」‎🌸🖥️*                 
             
        *ʟᴀᴛᴇɴᴄʏ: ${latency} _ᴍs_*
                 🔐⚠️  
    *🫀🄼 ˻𝐈ʈͥ᥊ ϻaͣŋͫŋ̑ο̑˼²⁴⁶ ᴡᴀ ʙᴏᴛ*` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed', 'pn'] 

export default handler
