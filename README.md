# Calculadora de Bhaskara
A ideia do projeto é apresentar um aplicativo, desenvolvido em HTML5, que execute uma calculadora automática de equação do segundo grau.
Para execução da aplicação, o usuário precisa dar a entrada dos valores numéricos, que representam os coeficientes A, B e C da equação. Através dos valores enviados, o aplicativo processa uma série de cálculos para exibir o resultado.
## Como o site processa os cálculos? 
Para a realização de algumas funcionalidades do projeto, o site tem parte da aplicação escrita em Javascript.
A função principal que processa os cálculos e valores da equação do segundo grau, é desenvolvida da seguinte maneira:
```js
function calcular(){
  var A = document.getElementById("varA")
  var B = document.getElementById("varB")
  var C = document.getElementById("varC")
  if(A.value == 0 || (B.value == 0 && C.value == 0)){
    resultado.innerHTML = "Não é uma equação do 2° Grau."
  }else{
    var delta = B.value ** 2 - 4 * A.value * C.value
    if(delta < 0){
      resultado.innerHTML = "Não tem raízes no conjunto dos números reais."
    }else if(delta == 0){
      var r1 = - B.value / (2 * A.value)
      resultado.innerHTML = "A equação do 2° Grau tem apenas uma raíz. x' = " + r1
    }else{
      var r1 = (- B.value + Math.sqrt(delta)) / (2 * A.value)
      var r2 = (- B.value - Math.sqrt(delta)) / (2 * A.value)
      resultado.innerHTML = "As raízes da equação são x' = " + r1 + " e x'' = " + r2
    }
  }
}
```
> O primeiro passo para desenvolver o cálculo é ler os valores dos coeficientes e determinar quais são eles. Após isso, a aplicação processa e diz se os valores correspondem a uma equação do segundo grau, de acordo com as próprias regras. 
Seguindo o próximo passo, o aplicativo calcula o delta e através deste valor determina se a equação tem raízes reais, e se é uma equação completa ou incompleta.
## Algumas outras funcionalidades presentes no site
Para a execução de algumas funcionalidades simples no site, foram escritas funções para essas melhorias no aplicativo.

* **Hablilitar/Desabilitar o botão**
```js
function ativarBotao(){
  const varA = document.querySelector('#varA').value
  const varB = document.querySelector('#varB').value
  const varC = document.querySelector('#varC').value
  if (varA && varB && varC){
    document.querySelector('#botao').disabled = false
    return
  }
  document.querySelector('#botao').disabled = true
}
```
> Através do evento ``onkeyup``, que executa a função acima, a aplicação verifica se todos os campos de entrada de valores foram preenchidos. Após a verificação, se todos os campos estiverem preenchidos, a função habilita o botão para a execução do cálculo, caso contrário, continua desabilitado.

* **Enviar valores com o Enter**
```js
document.addEventListener("keypress", function(e){
  if(e.key === 'Enter'){
    var btn = document.querySelector("#botao");
    btn.click();
  }
})
```
> Esse pequeno código, com o método ``addEventListener``, é executado quando o usuário aperta o botão **Enter** do teclado. Essa função ativa o botão **Calcular**, que está presente no site. Em resumo, quando o usuário apertar o **Enter**, o aplicativo realizará o cálculo.
