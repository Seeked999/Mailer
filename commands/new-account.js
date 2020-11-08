const Discord = require('discord.js')
const db = require('quick.db');


module.exports = {
    name: "make",
    description: "message count",

    async run (client, message, args){

        const acc = db.fetch(`has-email_${message.author.id}`)

        //defining stuff

        const claimed = db.fetch(`claimed`)

        const account = args[0]

        //code

        if(!account) return

        if(account.includes(claimed)) return message.channel.send(`Sorry, someone already has this username`)

        if(!account.endsWith("@mail.com")) return message.channel.send(`Must end with @mail.com`)

        if(account.endsWith("@gmail.com")) return message.channel.send(`Must end with @mail.com`)

        //database shit

        db.set(`account_${message.author.id}`, account)

        db.push(`claimed`, `${account}`)

        db.push(`my_${message.author.id}.accounts`, `${account}`)

        db.push(`existed-accounts`, `${account}`)

        db.set(`has-email_${message.author.id}`, true)

        db.set(`${account}${message.author.id}`, message.author.id)

        //sending an msg

        message.channel.send(`New account was made: \`${account}\``)
    }
}