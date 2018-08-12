
module.exports = {
    run: async (bot, guild) => {
        const channel = bot.channels.get("478022245378162694");
        const log = [
            '➕ **__Joined guild!__**',
            `**__Name:__** ${guild.name} (${guild.id})`,
            `**__Owner:__** ${guild.owner.user.tag} (${guild.owner.user.id})`,
            `**__Members:__** ${guild.memberCount}`
        ].join('\n');
        channel.send(log);
    }
}
