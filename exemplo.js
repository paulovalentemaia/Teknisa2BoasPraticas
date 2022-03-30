var playerAtaque=async(personagem,inimigo)=>{
if(getMouseBotaoPressionado()){
var movimento=getMovimento(personagem.movement);
if(!isCorrendo(movimento)){
var acao=getAcao(personagem.action);
if(!isBloqueando(acao)){
personagem.status.dano=personagem.offense*personagem.level;
personagem.status.defesa=personagem.defense*personagem.level;
personagem.status.critico=personagem.critChance;
inimigo.status.dano=inimigo.offense*inimigo.level;
inimigo.status.defesa=inimigo.defense*inimigo.level;
inimigo.status.critico=inimigo.critChance;
var dano =await ataque(personagem,inimigo);
console.log('Personagem ' +personagem.name+ ' causou ' +dano+ ' de dano ao inimigo '+inimigo.name);
}else{
console.log('Não pode atacar enquanto está bloqueando!');
}
}else{
console.log('Não pode atacar enquanto está correndo!');
}
}
}