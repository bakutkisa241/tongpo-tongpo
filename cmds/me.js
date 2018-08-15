const Discord = require("discord.js");
let xp = require("../xp.json");
let coins = require("../coins.json");
module.exports.run = async (bot, message, args, msg) => {
                 message.react("✅")


  if(!xp[message.author.id]){
   message.channel.send(`Created New profile for user ${message.author.id}. Please retype ~profile`);    
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
    if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let user = msg.mentions.users.first() || client.users.get (args[0])!
  if(!user) user = msg.author.id
  let coinss = coins[user.id].coins;
  let uicon = user.displayAvatarURL;
  let userxp = xp[user.id].xp;
  let userlvl = xp[user.id].level;
  let nextLvlXp = userlvl * 1000;
  let difference = nextLvlXp - userxp;
  let profileEmbed = new Discord.RichEmbed()
  .setAuthor(`${user}'s Profile`)
  .setDescription(`${user} has not yet set a bio`)
  .setColor("#32d732")
  .setThumbnail(uicon)
  .addField("Global Level", userlvl, true)
  .addField("Total Experience", userxp, true)
  .addField("Total Coins", `${coinss}📀`, true)
  .setFooter(`${difference}XP Till you level up to Level ${userlvl + 1}`, message.author.displayAvatarURL);
  const mess = await message.channel.send(`Loading Profile of user ${message.author.id}`);
  mess.edit(profileEmbed);                    
  }


module.exports.help = {
  name: "profile"
}
