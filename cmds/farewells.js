const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!farewells set #channel\`
- \`b!farewells on\`
- \`b!farewells off\`
`)
              .setFooter("Farewell", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
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
              .setDescription(`Farewells set to\n\n${inputmessage}`)
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
              .setDescription(`Farewells set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var inputmessage = args.slice(0).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./leave.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Farewells set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`Farewells event has been **on**.`)
                .setTimestamp()
                .setFooter("Farewells Enable", bot.user.displayAvatarURL)
                
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
                .setDescription(`Farewells event has been **on**.`)
                .setTimestamp()
                .setFooter("Farewells Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`**Sorry, But You Need \`MANAGE CHANNELS\` Permissions To Use This Command!**`);
            var welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`Farewells has been **off**.`)
                .setTimestamp()
                .setFooter("Farewells Disable", bot.user.displayAvatarURL)
                
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
                .setDescription(`Farewells has been **off**.`)
                .setTimestamp()
                .setFooter("Farewells Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("previous")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**Farewell:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**Farewell:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

exports.help = {
    name: "welcomeimg"
}
