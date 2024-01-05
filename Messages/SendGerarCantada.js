const { client } = require("../Client");

module.exports = {
  sendGerarCantada: (messageFrom) => {
    const messages = [
      `Eu não sou a Casas Bahia, mas prometo dedicação total a você.`,
      `Você não é colesterol mais afetou meu coração…`,
      `Eu não sou Casas Bahia, mas prometo dedicação total a você `,
      `Você é um eixo terrestre? Porque meu mundo gira em torno de você!  `,
      `Você não é a Garota de Ipanema, mas é a coisa mais linda e cheia de graça que já vi.`,
      `Sabe o que combina com você? Eu! `,
      `Desculpe, eu não já fiquei com você antes? Não? Vamos dar um jeito nisso.`,
      `Quero te beijar de olhos fechados e coração aberto `,
      `Me chama de previsão do tempo e diz que tá rolando um clima.`,
      `Gata, eu queria ser seu sono   pra te levar pra cama a noite toda`,
      `Crush, um mês atrás eu era apaixonado por você e parece que estamos no mês passado ainda`,
      `Eu perdi o número do meu telefone… Me empresta o seu?`,
      `Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra dessa frase...`,
      `oi bb, te desejo sorte pq felicidade é só comigo`,
      `Você sabe o número da polícia? Infelizmente, vou ter que denunciar você por roubar meu coração`,
      `Valorize sua mãe pois um dia ela vai ser minha sogra bb`,
      `Igual você, nem o Google encontra`,
      `Fica comigo que eu faço esquecer o João. Que João? Viu só, já está esquecendo…`,
      `Gosta de história? Vamos começar a nossa?`,
      `Eu queria ser grego, mas grego eu não posso ser, porque grego tem várias deusas e minha única deusa é você`
    ];
    const random = Math.floor(Math.random() * 18);
    let finalMessage = messages[random];

    client.sendMessage(messageFrom, finalMessage);
  }
}