const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./bot.js',{
  totalShards: 1,
  token: process.env.TOKEN
});
shard.spawn();
shard.on('launch', pecahan => {
  console.log(`Launching Shard ${pecahan.id} [ ${pecahan.id + 1} of ${shard.totalShards} ]`);
});

process.on('unhandledRejection', e => console.error(e))
.on('uncaughtException', e => console.error(e));