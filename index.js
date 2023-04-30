const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576


const player = new Player()

function animate() {
    window.requestAnimationFrame(animate) // create animation loop
    c.fillStyle= 'white'
    c.fillRect(0, 0, canvas.width, canvas.height) //redraw background to "clear" the canvas

    player.draw()
    player.update()
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'w':
            player.velocity.y = -10
            break
    }
})