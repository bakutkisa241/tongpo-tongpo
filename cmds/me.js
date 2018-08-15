const Discord = require("discord.js");
let xp = require("../xp.json");
let coins = require("../coins.json");
module.exports.run = async (bot, message, args, msg) => {
                 message.react("✅")
      let arg = ""
    if (args.slice(0).join(" ") == "") {
      arg = message.author.id
    }
    if (args.slice(0).join(" ") != "") {
      if (arg = message.mentions.users.first() == undefined) {
        return message.reply("Please provide the name of an actual user")
      }
      arg = message.mentions.users.first().id
    }
    let user = "<@" + arg + ">"


  if(!xp[user]){
   message.channel.send(`Created New profile for user ${message.author.id}. Please retype ~profile`);    
   xp[user] = {
     xp: 0,
     level: 1
  };
}
    if(!coins[user]){
    coins[user] = {
      coins: 0
    };
  }
  

  let coinss = coins[user].coins;
  let uicon = user.displayAvatarURL;
  let userxp = xp[user].xp;
  let userlvl = xp[user].level;
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
