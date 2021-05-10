const Discord = require("discord.js");


const { Command } = require('../../commands.js')
module.exports = class UserinfoCommand extends Command {
  constructor(){
    super({
      name: 'userinfo',
      aliases: '',
      priority: 3,
      permLvl: 0
    })
  }
  execute(msg){
          let user = msg.mentions.members.first();
if(!user) return msg.reply('Menciona a aquel sobre el que quieras aprender');
      
        const embed = new Discord.MessageEmbed()
            .setDescription("**Informacion del usuario: " + user.user.username + "**") 
            .setColor("RANDOM")
            .setThumbnail(user.user.displayAvatarURL({dynamic : true})) 
            .addFields(
                {
                    name: "Tag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: 'Avatar link: ',
                    value: `[Pincha Aquí](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Fecha de creación de la cuenta: ',
                    value: user.user.createdAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: 'Fecha de entrada al servidor: ',
                    value: user.joinedAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: 'Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            );

         msg.channel.send(embed);
  }
}