const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!leave set #channel\`
- \`b!leave on\`
- \`b!leave off\`
`)
              .setFooter("Leave", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Sorry, you don't have permissions to do this!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./leave.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`leave Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
  {
              if (option.match("sc")) {
            var nick = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./leave.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`leave Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Sorry, you don't have permissions to do this!");
            var inputmessage = args.slice(0).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./welcome.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`leave Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Sorry, you don't have permissions to do this!");
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`leave event has been **on**.`)
                .setTimestamp()
                .setFooter("leave Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
              if (option.match("enable")) {
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`leave event has been **on**.`)
                .setTimestamp()
                .setFooter("leave Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Sorry, you don't have permissions to do this!");
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`leave has been **off**.`)
                .setTimestamp()
                .setFooter("leave Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
              if (option.match("disable")) {
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`leave has been **off**.`)
                .setTimestamp()
                .setFooter("leave Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("previous")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**leave:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**leave:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

exports.help = {
    name: "welcomeimg"
}
