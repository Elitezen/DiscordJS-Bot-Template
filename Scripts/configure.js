#!/usr/bin/env node

import inquirer from "inquirer";
import { writeFile } from "node:fs";

let token, clientId, guildId;

async function start() {
  await getToken();
  await getClientId();
  await getGuildId();
  await createEnv();
}

async function getToken() {
  const answers = await inquirer.prompt({
    name: 'token',
    type: 'input',
    message: "Enter your client's token"
  });

  token = answers.token;
}

async function getClientId() {
  const answers = await inquirer.prompt({
    name: 'clientId',
    type: 'input',
    message: "Enter your client's id"
  });

  clientId = answers.clientId;
}

async function getGuildId() {
  const answers = await inquirer.prompt({
    name: 'guildId',
    type: 'input',
    message: "Enter your guild id"
  });

  guildId = answers.guildId;
}

async function createEnv() {
  writeFile('.env', `CLIENT_TOKEN=${token}\nCLIENT_ID=${clientId}\nCLIENT_GUILD_ID=${guildId}`, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    
    console.log(`
      Success
      npm run commands
      npm start
    `);
    process.exit(0);
  });
}

start();