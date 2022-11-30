const command = {
  name: 'ping',
  description: 'Says pong!',
  execute(client, message, args) {
    return message.channel.send('Pong!');
  }
}

export default command;