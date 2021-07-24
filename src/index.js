const messages = [
    'Nunca pares de aprender',
    'Tú puedes',
    'Sigue intentandolo',
    'Esfuerzate',
    'Valdra la pena',
    'Sin miedo al exito',
    'Go, go, go',
    'Success',
    'Se que tú puedes',
    'Ganbare'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }