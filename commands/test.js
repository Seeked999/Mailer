const Discord = require('discord.js')
const db = require('quick.db');


module.exports = {
    name: "test",
    description: "message count",

    async run (client, message, args){



        const text = args

        console.log(text)

        message.channel.send(`${text.join(` `)}`)





    }
}