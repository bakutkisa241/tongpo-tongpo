const Discord = require("discord.js");
const xp = require("../xp.json");
const coins = require("../coins.json");
let user = message.members.mentions.first() || message.atuhor.id;
module.exports.run = async (bot, message, args) => {
                 message.react("✅")


  if(!xp[user.id]){
   message.channel.send(`Created New profile for user ${message.author.id}. Please retype ~profile`);    
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
    if(!coins[user.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let coinss = coins[message.author.id].coins;
  let uicon = message.author.displayAvatarURL;
  let userxp = xp[user.id].xp;
  let userlvl = xp[user.id].level;
  let nextLvlXp = userlvl * 1000;
  let difference = nextLvlXp - userxp;
  let profileEmbed = new Discord.RichEmbed()
  .setAuthor(`${user.tag}'s Profile`)
  .setDescription(`${user.tag} has not yet set a bio`)
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
