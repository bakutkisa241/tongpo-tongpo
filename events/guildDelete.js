
module.exports = {
    run: async (bot, guild) => {
        const channel = bot.channels.get("476708541944692749");
        const log = [
            '➖ **__Left guild!__**',
            `**__Name:__** ${guild.name} (${guild.id})`,
            `**__Owner:__** ${guild.owner.user.tag} (${guild.owner.user.id})`,
            `**__Members:__** ${guild.memberCount}`
        ].join('\n');
        channel.send(log);
    }
}