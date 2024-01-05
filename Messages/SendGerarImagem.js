const { client } = require("../Client");
const { MessageMedia } = require("whatsapp-web.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  SendGerarImagem: (messageFrom) => {
    const filePath = path.join(__dirname, "..", "Imgs", "BluePenMorto.jpg");
    const image = fs.readFileSync(filePath, 'base64');

    const media = new MessageMedia("image/jpg", image);

    client.sendMessage(messageFrom,  media,{ caption: 'BluePen Morreu!!!!!!!!!!!!!!!!!!!!!!!!!!'});
  } 
};