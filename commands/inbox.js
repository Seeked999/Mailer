const Discord = require('discord.js')
const db = require('quick.db');



module.exports = {
    name: "inbox",
    description: "message count",

    async run (client, message, args){

        const me = db.get(`account_${message.author.id}`)

        console.log(me)

        const emails = db.fetch(`inbox_${me}.emails`)

        const inbox = emails.join("\n") || `Your inbox is clean`

        const embed = new Discord.MessageEmbed()
        .setTitle(`Emails for ${me}`)
        .setDescription(inbox)

        message.channel.send(embed)


    }
}