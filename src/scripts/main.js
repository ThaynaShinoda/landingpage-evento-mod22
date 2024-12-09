AOS.init();

//Data do evento
const eventDate = new Date ("Sep 7, 2025 18:00:00")

//Time Stamp
const timeStampEvent = eventDate.getTime()

//Contador de tempo
const timer = setInterval(function() {
    const now = new Date()
    const timeStampNow = now.getTime()

    const timeStampTimer = timeStampEvent - timeStampNow
    
    const diasMs = (1000*60*60*24)
    const horasMs = (1000*60*60)
    const minMs = (1000*60)

    const dias = Math.floor(timeStampTimer / diasMs)
    const horas = Math.floor((timeStampTimer % diasMs)/horasMs)
    const minutos = Math.floor((timeStampTimer % horasMs) / minMs)
    const segundos = Math.floor((timeStampTimer % minMs)/1000)

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if (timeStampTimer < 0){
        clearInterval(timer)
        document.getElementById('contador').innerHTML = '07/09/2025 às 18 horas'
    }
}, 1000)