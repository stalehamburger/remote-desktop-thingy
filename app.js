/* code to connect with websocket server */
const socket = new WebSocket('ws://localhost:5000')
/* code to get screen display */
navigator.mediaDevices.getDisplayMedia({video: true, audio: true})
.then(stream => {
    // inject stream object as a source for video element //
    document.getElementById('vid').srcObject = stream
    document.getElementById('vid').play
    // inject stream object as a source for video element //
})
.catch(e => console.log(e))
/* The below function send the mouse coordinates to the server */
function pointer(e) {
    let posX = document.getElementById('vid').offsetLeft
    let posY = document.getElementById('vid').offsetTop
    let X = e.pageX - posX
    let Y = e.pageY - posY
    let pointer = X.toString() + ',' + Y.toString()
    console.log(pointer)
    socket.send(pointer)
}