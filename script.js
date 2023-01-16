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

function calcular(){
  const A = document.getElementById("varA")
  const B = document.getElementById("varB")
  const C = document.getElementById("varC")
  if(A.value == 0 || (B.value == 0 && C.value == 0)){
    resultado.innerHTML = "Não é uma equação do 2° Grau."
  }else{
    const delta = B.value ** 2 - 4 * A.value * C.value
    if(delta < 0){
      resultado.innerHTML = "Não tem raízes no conjunto dos números reais."
    }else if(delta == 0){
      const r1 = - B.value / (2 * A.value)
      resultado.innerHTML = "A equação do 2° Grau tem apenas uma raíz. x' = " + r1
    }else{
      const r1 = (- B.value + Math.sqrt(delta)) / (2 * A.value)
      const r2 = (- B.value - Math.sqrt(delta)) / (2 * A.value)
      resultado.innerHTML = "As raízes da equação são x' = " + r1 + " e x'' = " + r2
    }
  }
}
document.addEventListener("keypress", function(e){
  if(e.key === 'Enter'){
    const btn = document.querySelector("#botao");
    btn.click();
  }
})