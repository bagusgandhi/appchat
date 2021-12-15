const socket = io()
const chat = document.querySelector('.chat-form')
const input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window')

const renderMessage = message => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message
    chatWindow.appendChild(div)
}

chat.addEventListener('submit', event => {
    event.preventDefault()
    socket.emit('chat', input.value)
    input.value = ''
})



socket.on('chat', message => {
    // console.log('from server : ', message)
    renderMessage(message)
})

