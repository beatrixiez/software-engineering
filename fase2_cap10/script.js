let nomeCompleto = prompt("Digite seu nome completo:")
let separador = nomeCompleto.indexOf(" ")
let primeiroNome = nomeCompleto.substring(0, separador)
alert(`${primeiroNome}, obrigado por acessar nosso site!`)