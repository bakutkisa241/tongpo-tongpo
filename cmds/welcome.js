const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!welcome set #channel\`
- \`b!welcome on\`
- \`b!welcome off\`
- \`b!welcome img [URL]\`
`)
              .setFooter("welcome", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
  {
              if (option.match("sc")) {
            var nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./backgroundj.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var inputmessage = args.slice(1).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./backgroundj.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            
                            if (option.match("image")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./backgroundj.json", "utf8"))
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var inputmessage = args.slice(1).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./backgroundj.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome event has been **on**.`)
                .setTimestamp()
                .setFooter("welcome Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
              if (option.match("enable")) {
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome event has been **on**.`)
                .setTimestamp()
                .setFooter("welcome Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome has been **off**.`)
                .setTimestamp()
                .setFooter("welcome Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
              if (option.match("disable")) {
            if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307');
            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome has been **off**.`)
                .setTimestamp()
                .setFooter("welcome Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("previous")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**WELCOME:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**WELCOME:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

exports.help = {
    name: "welcomeimg"
}
