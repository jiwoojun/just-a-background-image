namespace SpriteKind {
    export const Pointer = SpriteKind.create()
}
function Splash (text: string) {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        . . . . . . . 2 2 2 2 2 2 2 2 2 
        `)
    if (true) {
    	
    } else {
    	
    }
}
scene.setBackgroundImage(img`
    222222222222222222222222255555
    222222222222222222555555555555
    222222222222222222555555555555
    222222222222222222222222225555
    222222222222222222222225555555
    222222222222222222222555555555
    222222222222222222222255555555
    222222222222222222222255555555
    222222222222222222222255555555
    222222222222222222222255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    666666666666666666662255555555
    `)
let Arrow = sprites.create(img`
    ..11............
    .111............
    111111..........
    .111..1.........
    ..11...1........
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    ........1.......
    `, SpriteKind.Pointer)
Arrow.setPosition(48, 24)
Arrow.say("This is a background image.")
