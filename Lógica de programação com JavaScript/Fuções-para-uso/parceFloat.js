function puxanumero(texto){
    return parseFloat(texto.replace(",", "."))
}

function puxanumero(numero, qtCasasDecimais = 2){
    return numero.toFixed(qtCasasDecimais).replace(".", ",")
}