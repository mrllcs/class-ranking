//Calculadora de Partidas Ranqueadas

let nomejogador = "Lucas";

function classificar(vitorias, derrotas) {
  var soma = vitorias + derrotas;
  var ranking;

  switch (true) {
    case soma < 10:
      ranking = "Ferro";
      break;

    case soma >= 10 && soma < 20:
      ranking = "Bronze";
      break;

    case soma >= 20 && soma < 50:
      ranking = "Prata";
      break;

    case soma >= 50 && soma < 80:
      ranking = "Ouro";
      break;

    case soma >= 80 && soma < 90:
      ranking = "Diamante";
      break;

    case soma >= 90 && soma < 100:
      ranking = "Lendário";
      break;

    case soma >= 100:
      ranking = "Imortal";
      break;
  }

  return { soma, ranking };
}

let classificacao = classificar(56, 8);

console.log("O jogador " + nomejogador + " está no ranking " + classificacao.ranking);