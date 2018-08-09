const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
          message.channel.send('You do not have ``Manage Messages`` permissions \n to use the command: `PREFIX`');
          message.delete();
          return;
      }
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

}

module.exports.help = {
  name: "prefix"
}
