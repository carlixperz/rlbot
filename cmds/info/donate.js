const Discord = require("discord.js");

const { Command } = require('../../commands.js')
module.exports = class DonateCommand extends Command {
  constructor(){
    super({
      name: 'donate',
      aliases: 'givemoneytothedevelopertocurehispoverty',
      priority: 1,
      permLvl: 0
    })
  }
  execute(msg){
    const embed = new Discord.MessageEmbed()
    .setDescription('**¿Quieres apoyarnos?**')
    .addField('**Gracias por tu decisión**', 'Soy un bot pequeño en desarrollo. Gracias a gente como tú, puedo crecer y llegar a más usuarios.')
    .addField('**Invitación:**', 'https://discordapp.com/oauth2/authorize?client_id=637421092264476675&scope=bot&permissions=8')
    .addField('**¿Donaciones?**', 'No acepto donaciones. Este bot lo hago porque quiero y pongo el tiempo que tengo en terminarlo. Necesito apoyo con palabras, no con monedas.');
    msg.channel.send(embed)
  }
}