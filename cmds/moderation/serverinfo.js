const Discord = require("discord.js");


const { Command } = require('../../commands.js')
module.exports = class ServerinfoCommand extends Command {
  constructor(){
    super({
      name: 'serverinfo',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
     var server = msg.guild;


const embed = new Discord.MessageEmbed()
.setDescription("**Información del servidor**")
.setThumbnail(server.iconURL())
.setAuthor(server.name, server.iconURL())
.addField('**ID**', server.id, true)
.addField('**Fecha de creación:**',`${server.joinedAt}`)
.addField("**Región:**", msg.guild.region)
.addField("**Propietario/a:**",`${server.owner.user}`)
.addField('**Miembros**', server.memberCount, true)
.addField("**Bots:**",`${msg.guild.members.cache.filter(m => m.user.bot).size}`)
.addField('**Boosts:**',msg.guild.premiumSubscriptionCount.toString())
.addField('**Nivel de verificación:**',`${server.verificationLevel}`)
.addField('**Roles:**', server.roles.cache.size,true)
.setColor("RANDOM")
msg.channel.send(embed);
  }
}