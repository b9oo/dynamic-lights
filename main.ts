/**
 * Ultimate Effects
 */
//% color=#AA00FF icon="\uf06e"
namespace effectsPlus {

    //% block="shake camera strength $strength duration $duration ms"
    export function shakeCamera(strength: number, duration: number) {
        scene.cameraShake(strength, duration)
    }

    //% block="sprite $sprite explode"
    export function explode(sprite: Sprite) {
        sprite.startEffect(effects.disintegrate, 500)
    }

    //% block="sprite $sprite fire trail"
    export function fireTrail(sprite: Sprite) {
        sprite.startEffect(effects.fire)
    }

    //% block="damage number $text above $sprite"
    export function damageNumber(text: string, sprite: Sprite) {
        let txt = textsprite.create(text)
        txt.setPosition(sprite.x, sprite.y - 16)

        timer.after(1000, function () {
            txt.destroy()
        })
    }

    //% block="flash screen"
    export function flashScreen() {
        scene.cameraShake(2, 100)
    }

    //% block="hit stop $ms ms"
    export function hitStop(ms: number) {
        pause(ms)
    }
}
