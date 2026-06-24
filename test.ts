namespace dynamicLightsTest {

    let player: Sprite = null

    // Runs automatically when test project loads
    game.onUpdate(function () {

        if (!player) {
            // Create test sprite
            player = sprites.create(img`
                . . . . . . . . . . . . . .
                . . . 2 2 2 2 2 . . . . . .
                . . 2 2 2 2 2 2 2 . . . . .
                . . 2 2 1 1 1 2 2 . . . . .
                . . 2 2 1 1 1 2 2 . . . . .
                . . 2 2 2 2 2 2 2 . . . . .
                . . . 2 2 2 2 2 . . . . . .
                . . . . . . . . . . . . . .
            `, SpriteKind.Player)

            player.setPosition(80, 60)

            controller.moveSprite(player)

            // 🟡 TEST: If your extension has a lighting function, call it here
            // Replace this with your real API name
            if ((dynamicLights as any).enableLight) {
                (dynamicLights as any).enableLight(player, 80)
            }

            // Debug message
            game.splash("Dynamic Lights Test Loaded")
        }
    })

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        // Test toggle or update light if available
        if ((dynamicLights as any).toggleLight) {
            (dynamicLights as any).toggleLight(player)
        }

        console.log("A pressed - test event fired")
    })
}
