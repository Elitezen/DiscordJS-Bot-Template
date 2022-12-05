# spawn-discord-bot

`spawn-discord-bot` is an NPX package for spawning a Discord bot. Comes with all the required files, along with handlers for the various Discord API components. Each command type contains an example file to help you get started.

The template's source code comes from [this repository](https://github.com/Elitezen/DiscordJS-Bot-Template)

The end result will be a directory as such:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/83f8e6ezcsknzsnf7ryn.png)

## Getting Started

Open up your command line and navigate to the directory you wish to create your bot in.

Run the following command to begin:

```ssh
npx spawn-discord-bot
```

You may be asked to download the package first. Enter **Y** to do so.

Next, you will be asked to name your bot's folder. Insert a folder name, or hit enter to apply the default (my-discord-bot).


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2oz3quy89e1vqj77hk11.png)

You now need to pick the language of your Discord bot. Use the arrow keys and ENTER to pick. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rx79zrj3685s3lixbnfe.png)

Your bot template will then download, it will only take a few seconds.

## Configuring Your Bot

Next you will need to setup your bot's credentials and example commands.

Follow the steps provided by the command line to begin

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0gwwu11l9yc5m1kkxhx2.png)

`npm i` will install the required dependencies for the template.

`npm run configure` will start the configure script which is what you will use to set your client's **token, id, and guild id**. Make sure you have these on hand and ready.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uwb2rpdscm6si3qjnkdv.png)

*Make note of the pasting hint*

## Registering Commands

Before we can turn on the bot, we must register the example commands. If you do not wish to use example commands, delete the example files and move on to the final step.

Run the following command to register:

```ssh
npm run commands
```

Commands will register globally by default. Use the `local` option to only register locally:

```ssh
npm run commands local
```

## Logging In

Lastly, to turn your bot on:

```ssh
npm start
```

`YOUR_BOT_NAME has logged in!` will appear in the terminal.

And that is it! You now have a fully set Discord.JS client ready to go