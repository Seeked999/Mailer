const Discord = require('discord.js')
const db = require('quick.db');


module.exports = {
    name: "sent",
    description: "message count",

    async run (client, message, args){

 
        const me = db.get(`account_${message.author.id}`)

        const msgs = db.get(`sent_${me}.msg`)

        const embed = new Discord.MessageEmbed()
        .setTitle(`Sent messages by ${me}`)
        .setDescription(msgs.join(`\n`))

        message.channel.send(embed)

    }
}