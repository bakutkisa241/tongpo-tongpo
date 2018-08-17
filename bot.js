const Discord = require("discord.js");
const superagent = require("superagent");
const weather = require("weather-js");
const economy = require('discord-eco');
const bot = new Discord.Client({disableEveryone: true});
const DEFAULTPREFIX = "b!";
const moment = require("moment");
const momentDurationFormat = require("moment-duration-format");
const fs = require("fs");
const config = require("./config.json");
const figlet = require('figlet');
const Command = require("klasa");
const prefix = require("./config.json");

///DBL API
bot.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot); 


let coins = require("./coins.json");
let xp = require("./xp.json");
let {cooldown} = require("./cooldown.js")
let commandcooldown = cooldown;
let cdseconds = 5;
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


bot.on("ready", async () => {
    console.log(`Logged in as : ${bot.user.tag}`);
    console.log(`${bot.user.username} is ready!`)
                
    function randomStatus() {
        let status = [`on ${bot.guilds.size} guilds.`, `With ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`, "b!help | Bolt", "bot.discord.io/bolt", "24/7 | Vote", "Bolt | MasterBot | Team"]
          let rstatus = Math.floor(Math.random() * status.length);
       bot.user.setActivity(status[rstatus], {type: 'WATCHING', url: "https://www.twitch.tv/brickmaster__"});
    }; setInterval(randomStatus, 30000)
    setInterval(() => {
    dbl.postStats(bot.guilds.size)
  }, 1800000);
});
bot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
	
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	
	if(!prefixes[message.guild.id]){
		prefixes[message.guild.id] = {
			prefixes: config.prefix
			
		};
	}
	let prefix = prefixes[message.guild.id].prefixes;
    
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

   if (!msg.startsWith(prefix)) return;
   if (commandcooldown.has(message.author.id)) {
      return message.channel.send(`Please wait **5 seconds** cooldown...`).then(msg => msg.delete(2000));
      }
      commandcooldown.add(message.author.id);
      setTimeout(() => {
        commandcooldown.delete(message.author.id);
      }, 5000);
      
    try {
      let commandFile = require(`./cmds/${cmd}.js`);
      commandFile.run(bot, message, args);
    } catch (e) {
      console.log(e.message)
    } finally {
      console.log(`${message.author.tag} menggunakan perintah ${prefix}${cmd} | di ${message.guild.name}`);
    }
  });
fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
});

bot.on("message", async autoresponder => {
  
    var PREFIXES = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if (!PREFIXES[autoresponder.guild.id]) {
    PREFIXES[autoresponder.guild.id] = {
      PREFIXES: DEFAULTPREFIX
    };
  }

  var PREFIX = PREFIXES[autoresponder.guild.id].PREFIXES;
  
    if(autoresponder.author.bot) return;
    if(autoresponder.channel.type === "dm") return;
      
        let sender = autoresponder.author;
        if (autoresponder.content.startsWith(prefix)) return;
    
    if (autoresponder.content === `<@!${bot.user.id}>`) {
    autoresponder.react('🏮');
    return autoresponder.channel.send(`Hi ${sender},` + ` use this command \`b!help\`\nMy default prefix is \`b!\`\nSupport Me! Type \`b!invite\``)
    }
    
    if (autoresponder.content === `<@${bot.user.id}>`) {
    autoresponder.react('🏮');
    return autoresponder.channel.send(`Hi ${sender},` + ` use this command \`b!help\`\nMy default prefix is \`b!\`\nSupport Me! Type \`b!invite\``)
    }
        
});

bot.on("guildMemberAdd", member => {
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!autorole[member.guild.id]) { // jika tidak ada autorole yang di set, agar tidak error saat ada yang join
		autorole[member.guild.id] = {
			autorole: config.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (!role) return; // jika autorole 0 maka akan dihentikan dan tidak menyebabkan error
	member.addRole(role);
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
	
	  if(message.author.bot) return;
    if (message.channel.type === 'dm') {
                console.log(`--------------------------------------------------------------------------------------------------------`)
            console.log(message.author.tag + " : " + message.cleanContent);
      Cleverbot.write(message.content, (response) => {
                      console.log("messgae From Kim: " + response.output);
        message.channel.startTyping()
        setTimeout(() => {
          message.channel.send(response.output).catch(console.error)
          message.channel.stopTyping()
        }, Math.random() * (1 - 3) + 1 * 1000)
    
      })
    }  
  if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  }
 }
  
let coinAmt = Math.floor(Math.random() * 50) + 1;
let baseAmt = Math.floor(Math.random() * 50) + 1;
console.log(`🔰 Coin Amt: ${coinAmt} | Base Amt:  ${baseAmt}  |  User:  ${message.author.username}   |  Discord Server name:  ${message.guild.name}`);

if(coinAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
  };
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)
});
//let coinEmbed = new Discord.RichEmbed()
//.setAuthor(message.author.username)
//.setColor("#08ff00")
//.addField(":money_with_wings:", `${coinAmt} coins added to your bank ${message.author.username}!`)
//.setFooter("you can see your coins bank by doing b!coins","https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048")
//.setTimestamp()
//    message.channel.send(coinEmbed).then(msg => {
//        msg.delete(10000)
//    });
}
fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if (err) console.log(err)
  });

let xpAdd = Math.floor(Math.random() * 7) + 8;
 console.log(`XP Added:   ${xpAdd}   |  User:   ${message.author.username}`);

if (!xp[message.author.id]) {
    xp[message.author.id] = {
        xp: 0,
        level: 1
    };
}


let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvl = xp[message.author.id].level * 300;
xp[message.author.id].xp = curxp + xpAdd;
if (nxtLvl <= xp[message.author.id].xp) {
    xp[message.author.id].level = curlvl + 1;
//     let lvlup = new Discord.RichEmbed()
//    .setTitle("Level Up!")
//    .setAuthor(`Keep going ${message.author.username}!`)
//    .setColor(0x08ff00)
//    .addField("unlock Level", curlvl + 1)
//    .setFooter("you can see your xp/level/rank by doing b!level","https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048")
//    .setTimestamp()
//    message.channel.send(lvlup).then(msg => {
//        msg.delete(10000)
//    });
}
fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if (err) console.log(err)
  });
});
bot.on("guildMemberRemove", async (member, client, message, args, level) => {  
            const guild = member.guild
            var namam = member.user.username
            var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
              
            var {body: background} = await superagent.get("https://cdn.discordapp.com/attachments/469828599847845890/475697528365645825/679503310_preview_c792c7333c00d3b3f95ef4f2247f99d4201ca162.jpg");
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(856, 376)
              .addImage(avatar, 295, 50, 256, 256, 128)
              .setColor('#ffffff')
              .setTextFont('50px System')
              .setTextAlign('center')
              .setTextFont('32px Arial')
              .addImage(background, 0, 0, 856, 376)
              .addText("Goodbye", 427, 295)
              .addText(`${jadim}#${member.user.discriminator}`, 427, 325)
	      .addText(`Member Count: ${member.guild.memberCount}`, 427, 355)
              .addRoundImage(avatar, 295, 10, 256, 256, 128)
              .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./leaveonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }
    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./leave.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;
            
            channel.send(`**GoodBye** ${member.user.tag} **See You... **`)+channel.send(new Discord.Attachment(await createCanvas()));
    }
});
bot.on("guildMemberAdd", async (member, client, message, args, level) => {  
	    const guild = member.guild;
            var namam = member.user.username
            var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;

            var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/469828599847845890/475690471969259521/back1.jpg`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));


            return new Canvas(856, 376)
              .addImage(avatar, 295, 50, 256, 256, 128)
              .setColor('#FFD600')
              .setTextFont('50px System')
              .setTextAlign('center')
              .setTextFont('32px Arial')
              .addImage(background, 0, 0, 856, 376)
              .addText(`Welcome To ${guild.name}`, 427, 295)
              .addText(`${member.user.tag}`, 427, 325)
	      .addText(`You are the ${member.guild.memberCount} Member!`, 427, 355)
              .addRoundImage(avatar, 295, 10, 256, 256, 128)
              .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }
    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;
  
            channel.send(`Welcome To **${guild.name}**, **${member.user.username}!** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`)+channel.send(new Discord.Attachment(await createCanvas()));
    }
});
bot.on('guildMemberAdd', async member => {
  let guild = member.guild;
  let autonick = JSON.parse(fs.readFileSync("./autonick.json", "utf8"));
  if(!autonick[member.guild.id]) return;
  
   var autonicksetting = JSON.parse(fs.readFileSync("./autonickonoff.json", "utf8"));
    if (!autonicksetting[member.guild.id]) {
     autonicksetting[member.guild.id] = {
      values: 1
      };
    }
  
    var values = autonicksetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
      let newNick = autonick[member.guild.id].nick
      newNick = newNick.replace('{username}', member.user.username)
      member.guild.members.get(`${member.user.id}`).setNickname(newNick)
    }
});

bot.login(process.env.TOKEN);
