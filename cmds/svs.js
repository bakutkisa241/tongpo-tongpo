const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

let msg = bot.guilds.map(guild => `**${guild.name}** Member ${guild.memberCount}`
let embed = new Discord.RichEmbed()
.setTitle(`i'm in ${bot.guild.size} Guilds!`)
.setDescription(`${msg}`)
.setColor('GREEN')
message.channel.send(embed);
}
