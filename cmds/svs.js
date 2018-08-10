const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {

let msg = bot.guilds.map(guild => `**${guild.name}** Member ${guild.memberCount}`
let embed = new Discord.RichEmbed()
.setTitle(`i'm in ${bot.guild.size} Guilds!`)
.setDescription(`${msg}`)
.setColor('GREEN')
msg.channel.send(embed);
}
