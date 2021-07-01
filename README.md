<div align="center">
  <img src="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png" width="128" height="128"/>
  
  # WaClone API
  
  An API made for the purpose of cloning Whatsapp groups.
  
  <p align="center">
    <a href="https://davizmelo.github.io/waclone-api/">📖 Documentation</a> •
    <a href="#websockets">🗄️ WebSockets</a> •
    <a href="#commands">🤖 Commands</a>
  </p>
  
<details>
  <summary><strong>Click here to see the demonstration</strong></summary>
  
  ![](https://media.giphy.com/media/x5hnpLJ5pFUO4lH59V/giphy.gif)
</details>

</div>

## ⚙️ Features

<details>
  <summary> Click here to see the features </summary>
  
  ### 👪 Groups

  * Clone whatsapp groups
  * Stop cloning groups
  * List all your whatsapp groups
  * List whatsapp groups you have admin

  ### 👤 Users

  * Define users authorized to use the bot
  * List users authorized to use the bot
  * Define the master user
  * Show master user

  And many others in the <a href="https://davizmelo.github.io/waclone-api/">documentation</a>
</details>
<a name="websockets"></a>

## 🗄️ WebSockets

| Feature                          | Path       | Event        | Response |
| -------------------------------- | ----------  | ----------- | ----------- |   
| <strong>Log off Whatsapp</strong>   | front:logout | on | None
| <strong>Send the QRCode</strong>   | qrcode | emit | Base64 Encoded Image
| <strong>Send the user Phone</strong>   | wa:signin | emit | User Phone Number

<a name="commands"></a>

## 🤖 Commands
All commands are in PT-BR

| Command                          | Description 
| -------------------------------- | ----------  
| <strong>+comandos</strong>   | Returns a list of all commands.
| <strong>+ativar</strong>   | Starts cloning of groups.
| <strong>+desativar</strong>  | Stop cloning of groups.
| <strong>+listarautorizados</strong>   | Returns a list of all phones authorized to use the bot.
| <strong>+grupoanfitriao</strong>   | Sets the group where the message was sent as the host group.
| <strong>+grupolog</strong>   | Sets the group where the message was sent as logs group.
| <strong>+grupoalvo (groupLink) </strong> | Defines the target group.
| <strong>+delay (seconds) </strong> | Defines the delay between each action.
| <strong>+modolink (on / off) </strong> | Defines whether the bot will send the group link or add the target group participants.
| <strong>+modolog (on / off) </strong> | Defines whether the bot will send error logs to a specific group..
| <strong>+mensagemlink (message) </strong> | Defines the message that will be sent along with sending links if link mode is enabled.
| <strong>+adicionarpermissao (phone) </strong> | Adds a phone to the list of phones authorized to use the bot.
| <strong>+removerpermissao (phone) </strong> | Removes a phone from the list of phones authorized to use the bot.


You can read more about parameters in the <a href="https://davizmelo.github.io/waclone-api/">documentation</a>.

## 🌎 Techs

<ul>
  <li>Typescript</li>
  <li>NodeJS</li>
  <li>Express</li>
  <li>Socket.IO</li>
  <li>Jest</li>
  <li>Tsyringe</li>
  <li>Swagger UI / OpenAPI</li>
</ul>

## 💻 Installation

```bash
git clone git@github.com:DaviZMelo/waclone-api.git
cd waclone-api
npm install | yarn
yarn | npm run dev:server
```

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 📄 License
[MIT](https://choosealicense.com/licenses/mit/)
