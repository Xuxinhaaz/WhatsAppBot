const { client } = require("./Client");
const { sendGerarCantada } = require("./Messages/SendGerarCantada");
const { SendGerarImagem } = require("./Messages/SendGerarImagem");

const groupIdRemote = "120363162109464701@g.us";

client.on("ready", () => {
  console.log("Bot rodando!");
});

client.on("message", (message) => {
  console.log(message.from);
  if (message.from === groupIdRemote) 
    main(message);
});

function main(message) {
  console.log("Mensagem Vinda do Grupo de Amigos");

  const { body } = message;

  if(body == "/menu") {
    sendMenu(message.from);
  }
  if(body == "/gerarDesculpa"){
    sendGerarDesculpa(message.from);
  } 
  if(body == "/cantada"){
    sendGerarCantada(message.from);
  }
  if(body == "/gerarImagem"){
    SendGerarImagem(message.from);
  }
}

  const sendMenu = (messageFrom) => {
    const menu = `BOT Complementamente Malandro!\n
    Comandos disponíveis:\n
    /gerarDesculpa -> Gera uma desculpa aleatoria\n
    /cantada -> Gera uma cantada enfadonha\n
    /gerarImagem -> Gera uma imagem aleatoria\n`;
  
    client.sendMessage(messageFrom, menu);
  };

  const sendGerarDesculpa = (messageFrom) => {
    let finalMessage= '';
    const naoVouPoderIr = `Nao vou poder ir porque `;
    const messages = [
      `contratei uma família de milicianos por engano porque minha coleção de sneakers sofreu uma combustão espontânea no topo do monte Everest.`,
      `recebi R$ 21,1 mil de um policial na minha franquia de chocolates porque meu kit de costura sumiu na boca de um jacaré na Floresta Amazônica.`,
      `vou ter que cancelar o nosso almoço porque meu coach de dieta teve uma diarreia pesada no meio da Times Square.`,
      `meu personal trainer sofreu uma combustão espontânea em uma área isolada do Uzbequistão.`,
      `condecorei um miliciano porque meu gato teve uma experiência fora do corpo na orla de Copacabana.`,
      `um primo meu de segundo grau teve uma experiência fora do corpo na antiga União Soviética. `,
      `minha coleção de sneakers sumiu na boca de um jacaré no Elevador Lacerda, em Salvador.`,
      `meu gato sofreu um sequestro-relâmpago no meio da avenida Paulista.`,
      `porque meu celular se locomoveu por teletransporte e foi parar na Barra da Tijuca.`,
      `pedi para pagarem um boleto de R$ 16,5 mil para mim porque o mosquito que eu crio em cativeiro foi alvo de uma abdução alienígena no topo do monte Everest.`,
      `meu professor de natação teve uma diarreia pesada nos Lençóis Maranhenses.`,
      `minha bombinha de asma sumiu na boca de um jacaré no meio da Times Square.`,
      `meu professor de natação teve uma diarreia pesada numa área virgem da Mata Atlântica.`,
      `meu jabuti de estimação sofreu uma combustão espontânea no meio da Times Square.`
    ];

    const random = Math.floor(Math.random() * 14);

    finalMessage = naoVouPoderIr + messages[random];
    
    client.sendMessage(messageFrom, finalMessage);
  };

