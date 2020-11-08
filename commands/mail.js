const Discord = require('discord.js')
const db = require('quick.db');


module.exports = {
    name: "mail",
    description: "message count",

    async run (client, message, args){

        const exists = db.fetch(`existed-accounts`)

        const user = args[0]

        if(!user.endsWith('@mail.com')) return message.channel.send(`Couldn't find the email \`${user}\``)

        const subject = args[1] || "No subject"

        if(!user.includes(exists)) return message.channel.send(`Couldn't find the email \`${user}\``)

        const old = args

        const niw = old.join(" ")

        const me = db.get(`account_${message.author.id}`)

        db.push(`inbox_${user}.emails`, `**Message sent by**: \`${user}\` **Subject**: \`${subject}\` **Message:** \`${niw}\``)

        db.push(`sent_${me}.msg`, `**Message sent to**: \`${user}\` **Subject**: \`${subject}\` **Message:** \`${niw}\``)

        message.channel.send(`Email has been sent`)


    }
}