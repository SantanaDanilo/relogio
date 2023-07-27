function formataHora(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}

function atulizaRelogio() {
    const relogio = new Date()
    const hora = relogio.getHours()
    const minuto = relogio.getMinutes()
    const segundo = relogio.getSeconds()

    document.querySelector('#hora').textContent = formataHora(hora)
    document.querySelector('#minuto').textContent = formataHora(minuto)
    document.querySelector('#segundo').textContent = formataHora(segundo)
}

setInterval(atulizaRelogio, 1000)
