<div align="center">
  <img src="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png" width="128" height="128"/>
  
  # WaClone API
  
  An API/Bot made for the purpose of cloning Whatsapp groups.
  
  <p align="center">
    <a href="https://davizmelo.github.io/waclone-api/">📖 Documentation</a> •
    <a href="#websockets">🗄️ WebSockets</a> •
    <a href="#commands">🤖 Commands</a> 
  </p>

</div>

<!--- ![](https://media.giphy.com/media/CucbZRxxp59mG6Exgw/giphy.gif) -->

## ⚙️ Features

<details>
  <summary> Click here to see the features </summary>
  
  ### 👨‍👩‍👦 Groups

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

<a name="websockets"></a>
## 🗄️ WebSockets

| Feature                          | Path       | Event        | Response |
| -------------------------------- | ----------  | ----------- | ----------- |   
| <strong>Log off Whatsapp</strong>   | front:logout | on | None
| <strong>Send the QRCode</strong>   | qrcode | emit | Base64 Encoded Image
| <strong>Send the user Phone</strong>   | wa:signin | emit | User Phone Number

## 💻 Installation

```
git clone git@github.com:DaviZMelo/waclone-api.git
cd waclone-api
npm install | yarn
yarn | npm run dev:server
```


## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 📃 License
[MIT](https://choosealicense.com/licenses/mit/)
