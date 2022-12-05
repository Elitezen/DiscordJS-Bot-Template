#!/usr/bin/env node

let token, clientId, guildId;

async function start() {
  const inquirer = await import('inquirer')
  const fs = await import('node:fs');
  await getToken(inquirer.default);
  await getClientId(inquirer.default);
  await getGuildId(inquirer.default);
  await createEnv(fs.writeFile);
}

async function getToken(inquirer) {
  console.log("\nFor pasting, If CTRL+V is not working: try right clicking in input fields.\n")
  const answers = await inquirer.prompt({
    name: 'token',
    type: 'input',
    message: "Enter your client's token"
  });

  token = answers.token;
}

async function getClientId(inquirer) {
  const answers = await inquirer.prompt({
    name: 'clientId',
    type: 'input',
    message: "Enter your client's id"
  });

  clientId = answers.clientId;
}

async function getGuildId(inquirer) {
  const answers = await inquirer.prompt({
    name: 'guildId',
    type: 'input',
    message: "Enter your guild id"
  });

  guildId = answers.guildId;
}

async function createEnv(writeFile) {
  writeFile('.env', `CLIENT_TOKEN=${token}\nCLIENT_ID=${clientId}\nCLIENT_GUILD_ID=${guildId}`, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    
    console.log(`\n✓ Success
      npm run commands
      npm start
    `);
    process.exit(0);
  });
}

start();