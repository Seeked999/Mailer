const Discord = require('discord.js')
const db = require('quick.db');
const icon = require('./default-icon.json')


module.exports = {
    name: "emails",
    description: "message count",

    async run (client, message, args){

        const array = db.fetch(`my_${message.author.id}.accounts`)

        const photo = db.fetch(`photo_account`) || icon.icon

        console.log(array.join('-'));

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s emails`)
        .setDescription(array.join(`\n`))
        .setThumbnail(photo)

        message.channel.send(embed)


    }
}