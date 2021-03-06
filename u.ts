namespace SpriteKind {
    export const battle_button = SpriteKind.create()
    export const stand_button = SpriteKind.create()
    export const crossbow_arrow = SpriteKind.create()
    export const cardinal_bob = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Cardinal_Bob.setImage(img`
        ....................
        ....................
        .........f..........
        ........f2f.........
        ........f2f.........
        .......f222f........
        ......fe222ef.......
        ......ffeeeff.......
        .....fbbfffbbf......
        ....fcbbbbbbbcf.....
        ....ffcccccccff.....
        ...fe2fffffff2ef....
        ..fbfe2222222efbf...
        ..fcbfffffffffbcf...
        ...fcbbbbbbbbbcf....
        ....fcccbbbcccf.....
        .....fffcccfff......
        ........fff.........
        ....................
        ....................
        `)
    controller.moveSprite(Cardinal_Bob)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stand_button, function (sprite, otherSprite) {
    cursor.setPosition(35, 200)
    not_killing_the_war_chicken_ending = not_killing_the_war_chicken_ending + 1
    if (not_killing_the_war_chicken_ending == 1) {
        game.showLongText("You stand your ground and do not attack.", DialogLayout.Bottom)
        game.showLongText("The war chicken looks at you confused and then strikes.", DialogLayout.Bottom)
        the_war_chicken.setVelocity(-50, 0)
        pause(2000)
        the_war_chicken.setPosition(134, 190)
        the_war_chicken.setVelocity(0, 0)
        info.changeLifeBy(-1)
    }
    if (not_killing_the_war_chicken_ending == 2) {
        game.showLongText("You stand your ground and do not attack.", DialogLayout.Bottom)
        game.showLongText("The war chicken looks at you confused and then strikes.", DialogLayout.Bottom)
        the_war_chicken.setVelocity(-50, 0)
        pause(2000)
        the_war_chicken.setPosition(134, 190)
        the_war_chicken.setVelocity(0, 0)
        info.changeLifeBy(-1)
    }
    if (not_killing_the_war_chicken_ending == 3) {
        game.showLongText("You stand your ground and do not attack.", DialogLayout.Bottom)
        game.showLongText("The war chicken is filled with rage \"I-I don't understand... whY WON'T YOU FIGHT ME?\"", DialogLayout.Bottom)
        game.showLongText("You whisper back, \"It is not the way of the lord.\"", DialogLayout.Bottom)
        scene.cameraShake(8, 1000)
        the_war_chicken.startEffect(effects.ashes)
        pause(1000)
        effects.clearParticles(the_war_chicken)
        game.showLongText("The war chicken stands there in defeat for there is no use in waging war against peace.You collect the war chicken and continue on your way", DialogLayout.Bottom)
        cardinal_bob_crossbow.destroy()
        the_war_chicken.destroy()
        battle_button.destroy()
        stand_button.destroy()
        cursor.destroy()
        tiles.setTilemap(tiles.createTilemap(hex`28001500020202020202020202020202020202030302020202020202020203020202020202020202020202020204010101010101010101010101010101010102010101010101010101010101010101010101010202020101020302020202020202020201010202020101010101010102020202020202010102010102020101010101010101020101010101010101010201010202020101020101020101010101020101020202020201010202020202010102020203020202010101010201010201010202020201010203030202010101010101010101020101010101010101020202010102010102010103050601010102010102020202020203020101020202020202010102020201010101020101020101020708010101020101020201010101010101010101010101020101010102020101020201010201010202020201010201010202020202010102020202020202020202030202020101010102010102010101010102010102010102020101010101010101010101010101010101010202020101020101020101020202020202020101020202010103020302020202020202010102020202010101010201010101010101010101010101010202010101010101010102010101010101010101020101020202020202020202020203020202010102020202010102020202020202020202020101020301010101010101010101010101010102010101020201010101010102010101010101010101010102010101010101010101010101010101020101010202020202020202020202010102020203020202020201010202020202020202020101010201010102020101010101010101010101010101010101010201010101010102010101010201010102010101020202030101020202020202020202010102020202020202020302020202010102010101020101010302010101010101010103010101010101010101020101010101010101020101020101010201010102020203020202020101020202020202020202020202020101020201010101010101010102010101020201010101010101010101010101010101010101010101010102010101010101010101020101010202020202020202020202020202020203020202020202020202020202020202020202020202020202`, img`
            2222222222222222222222222222222222222222
            2..................2...................2
            22..22222222222..222.......2222222..2..2
            2........2.........2..222..2..2.....2..2
            2222..22222..2222222....2..2..2222..2222
            2.........2........222..2..2..2.....2..2
            2222222..222222..222....2..2..2.....2..2
            2.............2....22..22..2..2222..2..2
            2222..22222222222222....2..2.....2..2..2
            2..................222..2..2..2222222..2
            22..2222222222..2222....2..............2
            2........2.........2..222222222222222..2
            222..22222222222..22...............2...2
            2......2...........2...............2...2
            2222222222..222222222..222222222...2...2
            2..................2......2....2...2...2
            222..222222222..2222222222222..2...2...2
            2........2.........2........2..2...2...2
            2222222..2222222222222..22.........2...2
            2........................2.........2...2
            2222222222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29], TileScale.Sixteen))
        game.showLongText("3- The Famine Chicken", DialogLayout.Bottom)
        game.showLongText("The third chicken! Yay! You can tell that the chicken somewhere in this maze using your magic Jesus powers. Traverse the maze to find the chicken before you starve to death. Increase the time you have until your death by eating the food you find in the maze. I'm pretty sure it's safe.", DialogLayout.Bottom)
        Cardinal_Bob = sprites.create(img`
            ....................
            ....................
            .........f..........
            ........f2f.........
            ........f2f.........
            .......f222f........
            ......fe222ef.f.....
            ......ffeeeff.......
            .....fbbfffddf......
            ....fcbbbbfdddf.....
            ....ffcccccfdff.....
            ...fe2fffffff2ef....
            ..fcfe2222222efbf...
            ..fcbfffffffffbcf...
            ...fcbbbbbbbbbcf....
            ....fcccbbbcccf.....
            .....fffcccfff......
            ........fff.........
            ....................
            ....................
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(Cardinal_Bob, myTiles.tile25)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.battle_button, function (sprite, otherSprite) {
    crossbow_arrow = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .........................................55.......
        .........................................55.......
        .........................555555555555555555555....
        .........................444444444444444455444....
        .........................................55.......
        .........................................44.......
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.crossbow_arrow)
    crossbow_arrow.setPosition(35, 200)
    crossbow_arrow.setVelocity(50, 0)
    cursor.setPosition(35, 200)
    killing_the_war_chicken_ending = killing_the_war_chicken_ending + 1
    if (killing_the_war_chicken_ending == 3) {
        pause(2000)
        the_war_chicken.destroy()
        pause(1000)
        game.showLongText("Well...", DialogLayout.Bottom)
        game.showLongText("Kinda hard to collect the war chicken in  you kill it... oh well you consider it a win and move on.", DialogLayout.Bottom)
        cardinal_bob_crossbow.destroy()
        stand_button.destroy()
        battle_button.destroy()
        cursor.destroy()
        tiles.setTilemap(tiles.createTilemap(hex`28001500020202020202020202020202020202030302020202020202020203020202020202020202020202020204010101010101010101010101010101010102010101010101010101010101010101010101010202020101020302020202020202020201010202020101010101010102020202020202010102010102020101010101010101020101010101010101010201010202020101020101020101010101020101020202020201010202020202010102020203020202010101010201010201010202020201010203030202010101010101010101020101010101010101020202010102010102010103050601010102010102020202020203020101020202020202010102020201010101020101020101020708010101020101020201010101010101010101010101020101010102020101020201010201010202020201010201010202020202010102020202020202020202030202020101010102010102010101010102010102010102020101010101010101010101010101010101010202020101020101020101020202020202020101020202010103020302020202020202010102020202010101010201010101010101010101010101010202010101010101010102010101010101010101020101020202020202020202020203020202010102020202010102020202020202020202020101020301010101010101010101010101010102010101020201010101010102010101010101010101010102010101010101010101010101010101020101010202020202020202020202010102020203020202020201010202020202020202020101010201010102020101010101010101010101010101010101010201010101010102010101010201010102010101020202030101020202020202020202010102020202020202020302020202010102010101020101010302010101010101010103010101010101010101020101010101010101020101020101010201010102020203020202020101020202020202020202020202020101020201010101010101010102010101020201010101010101010101010101010101010101010101010102010101010101010101020101010202020202020202020202020202020203020202020202020202020202020202020202020202020202`, img`
            2222222222222222222222222222222222222222
            2..................2...................2
            22..22222222222..222.......2222222..2..2
            2........2.........2..222..2..2.....2..2
            2222..22222..2222222....2..2..2222..2222
            2.........2........222..2..2..2.....2..2
            2222222..222222..222....2..2..2.....2..2
            2.............2....22..22..2..2222..2..2
            2222..22222222222222....2..2.....2..2..2
            2..................222..2..2..2222222..2
            22..2222222222..2222....2..............2
            2........2.........2..222222222222222..2
            222..22222222222..22...............2...2
            2......2...........2...............2...2
            2222222222..222222222..222222222...2...2
            2..................2......2....2...2...2
            222..222222222..2222222222222..2...2...2
            2........2.........2........2..2...2...2
            2222222..2222222222222..22.........2...2
            2........................2.........2...2
            2222222222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29], TileScale.Sixteen))
        game.showLongText("3- The Famine Chicken", DialogLayout.Bottom)
        game.showLongText("The third chicken! Yay! You can tell that the chicken somewhere in this maze using your magic Jesus powers. Traverse the maze to find the chicken before you starve to death. Increase the time you have until your death by eating the food you find in the maze. I'm pretty sure it's safe.", DialogLayout.Bottom)
        Cardinal_Bob = sprites.create(img`
            ....................
            ....................
            .........f..........
            ........f2f.........
            ........f2f.........
            .......f222f........
            ......fe222ef.f.....
            ......ffeeeff.......
            .....fbbfffddf......
            ....fcbbbbfdddf.....
            ....ffcccccfdff.....
            ...fe2fffffff2ef....
            ..fcfe2222222efbf...
            ..fcbfffffffffbcf...
            ...fcbbbbbbbbbcf....
            ....fcccbbbcccf.....
            .....fffcccfff......
            ........fff.........
            ....................
            ....................
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(Cardinal_Bob, myTiles.tile25)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile25, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`28001500020202020202020202020202020202030302020202020202020203020202020202020202020202020204010101010101010101010101010101010102010101010101010101010101010101010101010202020101020302020202020202020201010202020101010101010102020202020202010102010102020101010101010101020101010101010101010201010202020101020101020101010101020101020202020201010202020202010102020203020202010101010201010201010202020201010203030202010101010101010101020101010101010101020202010102010102010103050601010102010102020202020203020101020202020202010102020201010101020101020101020708010101020101020201010101010101010101010101020101010102020101020201010201010202020201010201010202020202010102020202020202020202030202020101010102010102010101010102010102010102020101010101010101010101010101010101010202020101020101020101020202020202020101020202010103020302020202020202010102020202010101010201010101010101010101010101010202010101010101010102010101010101010101020101020202020202020202020203020202010102020202010102020202020202020202020101020301010101010101010101010101010102010101020201010101010102010101010101010101010102010101010101010101010101010101020101010202020202020202020202010102020203020202020201010202020202020202020101010201010102020101010101010101010101010101010101010201010101010102010101010201010102010101020202030101020202020202020202010102020202020202020302020202010102010101020101010302010101010101010103010101010101010101020101010101010101020101020101010201010102020203020202020101020202020202020202020202020101020201010101010101010102010101020201010101010101010101010101010101010101010101010102010101010101010101020101010202020202020202020202020202020203020202020202020202020202020202020202020202020202`, img`
        2222222222222222222222222222222222222222
        2..................2...................2
        22..22222222222..222.......2222222..2..2
        2........2.........2..222..2..2.....2..2
        2222..22222..2222222....2..2..2222..2222
        2.........2........222..2..2..2.....2..2
        2222222..222222..222....2..2..2.....2..2
        2.............2....22..22..2..2222..2..2
        2222..22222222222222....2..2.....2..2..2
        2..................222..2..2..2222222..2
        22..2222222222..2222....2..............2
        2........2.........2..222222222222222..2
        222..22222222222..22...............2...2
        2......2...........2...............2...2
        2222222222..222222222..222222222...2...2
        2..................2......2....2...2...2
        222..222222222..2222222222222..2...2...2
        2........2.........2........2..2...2...2
        2222222..2222222222222..22.........2...2
        2........................2.........2...2
        2222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29], TileScale.Sixteen))
    tiles.placeOnTile(Cardinal_Bob, tiles.getTileLocation(1, 1))
    scene.cameraFollowSprite(Cardinal_Bob)
    info.startCountdown(60)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile29, function (sprite, location) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Cardinal_Bob.setImage(img`
        ....................
        ....................
        .........f..........
        ........f2f.........
        ........f2f.........
        .......f222f........
        ....f.fe222ef.......
        ......ffeeeff.......
        .....fddfffbbf......
        ....fdddfbbbbcf.....
        ....ffdfcccccff.....
        ...fe2fffffff2ef....
        ..fbfe2222222efcf...
        ..fcbfffffffffbcf...
        ...fcbbbbbbbbbcf....
        ....fcccbbbcccf.....
        .....fffcccfff......
        ........fff.........
        ....................
        ....................
        `)
    controller.moveSprite(Cardinal_Bob)
})
info.onCountdownEnd(function () {
    if (timer_variable == 1) {
        the_conquest_chicken.destroy()
        Cardinal_Bob.destroy()
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffeee2222eeeffffffffffffffffffffffffffffffffe222222222eeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffff
            fffffffeee2222222222eeefffffffffffffffffffffffffffffe222222222222eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee2effffff
            ffffffe2222222222222222efffffffffffffffffffffffffffee22224444422222effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeff
            ffffffe2222224444222222effffffffffffffffffffffffffe22244444444442222eeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe2eeeffffffeefff
            fffffee22244444444442222efffffffffffffffffffffffffe22244444444444222222effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffff
            ffffe2224444444444444222efffffffffffffffffffffffffe222444ffff44444442222efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffe22244444ffff44442222effffffffffffffffffffffffe222444ffcff4444444422efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffee222444ffccccf44442222efffffffffffffffffffffffe22244444ffcfff4444422efffffffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffe222444ffcccccccf4442222efffffffffffffffffffffffe222444444ffcccff44422efffffffffffffffeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffe222444ffffcccccf44442222eefffffffffffffffffffffe2222244444fcccccf44222eeeefffffffffffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffe2224444444fcccccf444222222effffffffffffffffffffe2222224444fcccccf444222222effffffffffeeeeeeeffffffeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffe2222444444fcccccf444422222eeefffffffffffffffffffee22222444fcccccf4442222222eefeeeeeeee222eeeeeeeeeeeeeefffffffffffffffffffffffffffeeeeeffffffffffffffffffffff
            feee222444444fcccccf444444222222eefffffffffffffffffffe2222444fcccccf44442222222eeeeeeeeee222222eeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeffffffffffffffffffffff
            e222222444444ffcccccf4444444222222efffffffffffffffffe22222444fccccff444444222222eeeeeeeee222222eeeeeee2222eeeeeeeeeeeffffffffffffffeeeeeeeffffffffffffffffffffff
            e2224444444444fcccccfff444442222222eefffffffffffffeee22224444fcccff444444444444222222222222222222222222222eeeeeeeeeeeffffffffffffffeeee2eeefffffffffffffffffffff
            e2224444444444ffcccccccff444444222222effffffffffee2222224444fcccff444444444444444222222222222222222222222222eeeeeeeeeffffffffffffffeee22eeefffffffffffffffffffff
            224444444444444fcccccccccfff444422222eeffffffffe222224444444fcfff444444444444444444422442222222222222222222222222eeefffffffffffffffeee2eeeefffffffffffffffffffff
            2244ff444444444ffcccccccccff4444442222efffffffe222222444444ffff44444444444444444444444444444444222222222222222222eeeeeffffffffeeeeeee22eeeffffffffffffffffffffff
            22444fff44444444fffcccccccccf4444442222eefffffe222244444fffff4444444444444444444444444444444444444222222222222222eeeeeeefffeeeeeeeeee22eeeffffffffffffffffffffff
            22444fccfff4444ffffffccccccccff4444222222eeefe22224444ffccf44444444444444444444444444444444444444442222222222222222eeeeeeeeeeeeeeeeee22eeeffffffffffffffffffffff
            22444fcccccffff888888fffffffcccf444422222222e222244444fccf44444444444444444444444444444444444444444222222222222222222eeeeeeeee222222222eeeffffffffffffffffffffff
            222444ffcccccccccccccc88888ffcccf44444222222222224444ffff444444444444444444444444444444444444444444222222222222222222222eee222222222222eeeffffffffffffffffffffff
            2224444ffcfffffffffccccccccccffcc4444444222222224444ffcf444444444444444444444444444444444444444444244222222444442222222222222222222222222eeeefffffffffffffffffff
            22244444fff44444444ffccccccccccffff4444444222224444ffcf4444444444444444444444444444444444444444444224444444444442222222222222222222222222eeeefffffffffffffffffff
            22224444444444444444fffccccccccccfff444444444244444fcff4444444444444444444444444444444444444444444444444444444222222222222222222222222222eeeffffffffffffffffffff
            e222244444444444444444fffcccccccccf8ff444444444444fccf44444444444444444444444444444444444444444444444444444444222222222222222222222222eeeeeeffffffffffffffffffff
            e222244444442222244444444fffffcccccfffffff4444444ffccf4444444444444444444444444444444444444444444444444444444444222222222222222222222eeeefffffffffffffffffffffff
            fe2222444f44422222244444444444ffcccccccfcff44444fccccf4444444444444444444444444444444444444444444444444444444444422222222222222222222eeeefffffffffffffffffffffff
            ffe222444f444222224444444444444fffccccccfcfff44ffccccf444444444444444fffff44444444444444444444444444444444444444444222222222222222222eeeffffffffffffffffffffffff
            ffe222444f44444444444444444444444fcccccccfccf44fcccccf44444444444444fcccccfff444444444444444444444444444444444444444222222222222222eeeffffffffffffffffffffffffff
            ffe222444fff4444444444444444444444fcccccccccffffcccccf44444444444ffffcccccccff44444444444444444444444444444444444444222222222222222eeeffffffffffffffffffffffffff
            ffe2224444ff4444444ffffff444444444fcccccccccccffcccccf4444444444fcff4fffcccccff4444444444444444444444444444444444444444222222222222eeeffffffffffffffffffffffffff
            ffe22224444ffffffffcccccffff444444fccccccccccccccccccf44444444ffcf44444fffffffff444444444444444444444444444444444444444222222222222eeeffffffffffffffffffffffffff
            ffee2224444fccccccccccccccccfff444fccccccccccccccccccff4444444fcf4444444f7f4444fffffff44444444f444444444444444444444444222222222222eeeffffffffffffffffffffffffff
            fffe22224444ffccccccccccccccccfff4fcccccccccccccccccccf444444fcf444444ff4f1ff44f4ffffffffffffff444444444444444444444442222222222222eeeffffffffffffffffffffffffff
            ffffe22224444ffffffffffffffffffcfffccccccccccccccccccccf4444fcf444444f22f7f11f4444444ffffcccfff4444444444444444444444222222222222222eeefffffffffffffffffffffffff
            fffe222224444444444444444444444fcfcccccccccccccccccccccf444fcf4444444f222f221f4444444444fffff444444444444444444444442222222222222222eeeeffffffffffffffffffffffff
            fffe2224444444444444444444444444fcccccccccccccccccccccccf4ffcf4444444f2222221f44444444444444444444444444444444444442222222222222222eeeefffffffffffefffffffffffff
            feee22244444244444444444444444444fccccccccccccccccccccccfffccf44444444f22221f444444444444444444442222222222224444222222222222222222eeeefffffffffeeeeffffffffffff
            e22244444444442222444444444444444fcccccccccccccccccccccccfccf4444444444fffff444444444444444444442222222222222244222222222222222222eeeeffffffeeeeeeeeeeffffffffee
            e222444f444444442222444444444ffffffcccccccccccccccccccccccccfff444444444444444444444444444444422222222222222222422222222222222222eeeefffffeeeeeeeeeeeeeffffffeee
            e222444fff44444444444444444fffffffffcccccccccccccccccccccccc88fffffffff4444444444444f4444444422222222222222222222222222222222222eeeeefffffeeeeeee22eeeeeffeeeeee
            222444ffcffff4444444444fffffcccccccffccccccccccccccccccccccccccccccccccf44444444444f44444444222222222222222222222222222222222222eeeeffffffeee2222222eeeeeeeeeeee
            222444ffccccff44444444fccfccccccccccccccccccccccccccccccccccccccccccccccf444444444ff4444442222222222222222222222222222222222222eeeefffffffeee22222222eeeeeeee222
            2224444fffcccffffffffffcf4ffffcccccccccccccccccccccccccccccccccccccccccccfffff44ffff4444422222222222222222222222222222222222222eeeffffffffeee22222222222eee22222
            e2224444fffffccccccccccff4444ffffffcccccccccccccccccccccccccccccccccccccc88c88ffff444444222222222222222222222222222222222222222eeefffffffeee22222222222222222222
            e22244444444fffffffccccf44444444444ffccccccccccccccccccccccccccccccfffffffffff44444444442222222222222222222222222222222222222eeeffffffffeeee22222222222222222222
            e22224444444444444fffff4444444444444ffccccccccccccccccccccccccccffff44444444444444444442222222222222222222222222222222222222eeeefeeeeeeeeeee22222222222222222222
            fe22224444444444444444444444444444444ffcccccccccccccccccccccccfff4444444444444444444444222222222222222222222222222222222222eeeeefeeeeeeeeee222222222222222222222
            fe22222222224444444444444422222224444ffccccccccccccccccccccccff44444444444444444444444222222222222222222222222222eeeeeeeeeeeeeefeeeeeeeee22222222222222222222222
            ffe22222222222222244444222222222224444ffcccccccccccccccccccfff444444444444444444444442222222222222222222222222eeeeeeeeeeeeeeeef222222222222222222222222222222222
            ffe222222222222222222222222222222224444fcccccccccccccccccc88f44444444444444444444222222222222222222222222222eeeeeeeeeeeeeeeeff2222222222222222222222222222222222
            fffeeeeeeeee22222222222222eeeee222244444fcccccccccccccccc8ff44444444444444444444222222222222222222222222222eeeeeefffffffffff222222222222222222222222222222222222
            ffffffffffffeeeeee2222222efffffe22224444fcccccccccccccccc8f444444444444444444222222222222222222222222222222eeeeff22222222222222222222222222222222222222222222222
            ffffffffffffffffffeeeeeeefffffffe2222444fccccccccccccccc8f4444444444444444422222222222222222222222222222222eeef2222222222222222222222222222222222222222222222222
            ffffffffffffffffffffffffffffffffe2222444fcccccccccccccc8ff44444444444444222222222222222222222222222222222eeeff22222222222222222222222222222222222222222222222222
            ffffffffffffffffffffffffffffffffe2222444fcccccccccccccc8f444444444444442222222222222222222222222222222222eeef222222222222222222222222222222222222222222222222222
            ffffffffffffffffffffffffffffffffe222444ffcccccccccccccc8f44444444444444222222222222222222222222222222222eeeef222222222222222222222222222222222222222222222222222
            ffffffffffffffffffffffffffffffffe222444fcccccccccccccccf44444444444444422222222222222222222222222222222eeeeef222222222222222222222222222222222222222222222222222
            ffffffffffffffffffffffffffffffffe222444fcccccccccccccccf444444444444444222222222222222222222222222222eeeeeef2222222222222222222222222222222222222222222222222222
            fffffffffffffffffffffffffffffffe2224444fcccccccccccccccf4444444444444442222222222222222222222222222eeeeeeeff2222222222222222222222222222222222222222222222222222
            fffffffffffffffffffffffffffffffe222444ffcccccccccccccccf444444444444444222222222222222222222222222eeeeeefff22222222222222222222222222222222222222222222222222222
            fffffffffffffffffffffffffffffffe222444fccccccccccccccccf444444444444444222222222222222222222222222eeeefff2222222222222222222222222222222222222222224422222222222
            ffffffffffffffffffffffffffffffe2222444fccccccccccccccccf444444444444444422222222222222222222222222eeef2222222222222222222222222222222222222222222244442222222222
            ffffffffffffffffffffffffffffffe2224444fccccccccccccccccf44444444444444442222222222222222222222222eeef22222222222222222222222222222222222222222222444444444244422
            fffffffffffffffffffffffffffffe2222444ffccccccccccccccccf44444444444444442222222222222222222222222eeef22222222222222222222222222222222222222222222444444444444442
            fffffffffffffffffffffffffffffe2224444fcccccccccccccccccf4444444444444444222222222222222222222222eeeef22222222222222222222222222222222222222222244444444444444442
            ffffffffffffffffffffffffffffe2222444fccccccccccccccccccf4444444444444444222222222222222222222222eeeef22222222222222222222222222222222222222222444444444444444444
            ffffffffffffffffffffffffffffe2224444fccccccccccccccccccf44444444444444442222222222222222222eee2eeeef222222222222222222222222222222222222222244444444444444444444
            fffffffffffffffffffffffffffe22224444fccccccccccccccccccf444444444444444442222222222222222eeeeeeeeef2222222222222222222222222444444422222222444444444444444444444
            fffffffffffffffffffffffffffe2224444fcccccccccccccccccccf4444444444444444422222222222222eeeeeeeeeeef2222222222222222222222244444444444444444444444444444444444444
            fffffffffffffffffffffffffffe222444fccccccccccccccccccccf444444444444444442222222222222eeeeeeffeeeff2222222222222222222444444444444444444444444444444444444444444
            fffffffffffffffffffffffffffe222444fccccccccccccccccccccf444444444444444442222222222222eeeeff2ffff222222222222222222224444444444444444444444444444444444444444444
            fffffffffffffffffffffffffffe222444fccccccccccccccccccccf444444444444444442222222222222eeeff222222222222222222222222224444444444444444444444444444444444444444444
            ffffffffffffffffffffffffffe2222444fccccccccccccccccccccf4444444444444444422222222222222eeef222222222222222222224444444444444444444444444444444444444444444444444
            fffffffffffffffffffffffffe22224444fccccccccccccccccccccf4444444444444444422222222222222eeef222222222222222222244444444444444444444444444444444444444444444444444
            ffffffffffffffffffffffffe22222444ffccccccccccccccccccccf4444444444444444422222222222222eeef222222222222222222444444444444444444444444444444444444444444444444444
            fffffffffffffffffffffffe222224444fcccccccccccccccccccccf4444444444444444422222222222222eeeff22222222222222222444444444444444444444444444444444444444444444444444
            ffffffffffffffffffffffe222224444ffcccccccccccccccccccccfff44444444444444442222222222222eeeeff22222222222ff224444444444444444444444444444444444444444444444444444
            fffffffffffffffffffffee222244444fccccccccccccccccccccccccfff444444444444442222222222222eeeeeef2222222fffccffffffffff44444444444444444444444444444444444444444444
            ffffffffffffffffffffe2222244444fcccccccccccccccccccccccccccfff4444444444444222222222222eeeffeeffffffffccccccccccccccffffffffff4444444444444444444444444444444444
            fffffffffffffffffeee2222444444ffcccccccccccccccccccccccccccccff44444444444442222222222fffffffffcccccccccccccccccccccccccccccccfffffff444444444444444444444444444
            ffffffffffffffeee222222244444ffcccccccccccccccccccccccccccccccffff44444444444444222fffffcccccccccccccccccccccccccccccccccccccccccccccfffff4444444444444444444444
            fffffffffffffe2222222224444ffccccccccccccccccccccccccccccccccccccffff44444444444fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccff44444444444444444444
            ffffffffffffe2222222444444ffccccccccccccccccccccccccccccccccccccccfff4444ffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff444444444444444444
            fffffffffffe22222444444444fccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffff4444444444444
            fffffffffffe22224444444444fccccccccccccccccccccccccccccccfffccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff44444444
            fffffffffffe22244444fffffffccccccccccccccccccccccccccccffffffcccfffffffffff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff444444
            ffffffffffe22244444ffcccccccccccccccccccccccccccccccccff8888ffffffff88fffff8ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff4444
            fffffffffe22224444fccccccfccccccfffffccccccccccccccffff8cccc88888888cc88888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff444
            fffffffffe2222444ffcccccffccccfff88fccccccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff4
            fffffffffe222fffffccccccfcccfff88cffcccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff
            fffffffffffffccffcccccffcccf888ccc8fccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ffffffffccccccfccffffffccff8ccccccc8fffffffffffffffffffccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            fffffffccccccfcff8fffcccff8ccccccccc8888888888888888888ffffffffffcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            fffffccccccffcff8ffccccff8ccccccccccccccccccccccccccccc888888888fccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            fffcccccccffcff8cfcccff88ccccccccccccccccccccccccccccccccccccccc8ff8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ffccccccc8fcff8cfcfff88cccccccccccccccccccccccccccccccccccccccccc88ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            fccccccc8ffcf8ccfff88ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccc8fcf8cccf88ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccc8ff8cccc8ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccc8f8ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        pause(100)
        game.showLongText("Congratulations! The Chicken tired itself out and you have now succsessfully collected one full chicken! Go you!", DialogLayout.Bottom)
        scene.centerCameraAt(85, 163)
        cardinal_bob_crossbow = sprites.create(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ......................ffff........................
            .....................ff22ef.fff...................
            .....................f2eefffceef..................
            .....................feffdf.fffcf.................
            .................ffffffbddf2...fcf................
            ................ffcccfffff.2....fcf...............
            ...............fffcbbff...2......fef..............
            ..............ffbbbbbfcf..2......fef..............
            .............ffbcfbbbfbcf2ff.....fef..............
            ............ffcbffccbbbb2bbbfff..fef.....55.......
            ..............fcbfffbbbf2ffbbbbfffef.....55.......
            ...............fbbbbfff2f555555555555555555555....
            ................ffffddbff444444444444444455444....
            .................fccfffc2f......fcf......55.......
            .................fcccccff2.....fcf.......44.......
            .................fffffff..2.fffcf.................
            .................f22222ff..fceef..................
            .................f22222ef...fff...................
            .................feeeeeff.........................
            .................fffffff..........................
            ................fccccccf..........................
            ...............ffcbbbbbcf.........................
            ..............fccbbbbbbcf.........................
            ..............fcbbbbbbbbf.........................
            ..............fcbbbbbbbbcf........................
            ..............fbbbbbbbbbbcf.......................
            ..............fbbbbbbbbbbbf.......................
            ..............fbbbbbbbbbbbcf......................
            .............fcbbbbbbbbbbbbff.....................
            .............fbbbbbbbbbbbbbcf.....................
            .............fbbbbbbbbbbbbbbf.....................
            .............fbbbbbbbbbbbbbbf.....................
            .............fbbbbbbbbbbcccbf.....................
            ............fccccbbcccccfffcf.....................
            ............fcfffccfffffeeeff.....................
            .............feeeff...fceeeeef....................
            ............fcccccf....fcccccf....................
            .............fffff......fffff.....................
            `, SpriteKind.Player)
        the_war_chicken = sprites.create(img`
            ..................................................
            ...........................f......................
            ........................f.f2f.....................
            .......................f2f2ef.....................
            .....................f.f2f22f.....................
            ....................fef22e22f.....................
            ....................fee22222f.....................
            ...................fffe2222effff..................
            .................ff111feeeeef111ff................
            ...............ff111111fffff111111ff..............
            .............ff111111111111111111111ff............
            ............f1111111111111111111111111f...........
            ...........f111111111111111111111111111f..........
            ..........f11111111111111111111111111111f.........
            .........f1111111111111111111111111111111f........
            ........f111111111111111111111111111111111f.......
            ........f111111111111111111111111111111111f.......
            .......f11ff111111111111111111111111111ff11f......
            .......f11ff111111111111111111111111111ff11f......
            ......f1111111111111111111111111111111111111f.....
            ......fb11111111111111111111111111111111111bf.....
            .....fdb11111111111111111111111111111111111bdf....
            .....fdd1b1111111111111111111111111111111b1ddf....
            .....fdddb1111111111111111111111111111111bdddf....
            ....ffdbddd1111111111111fff11111111111111ddbdff...
            ...f1fdbdddd11111111111f454f11111111111b1ddbdf1f..
            ...f1fdddbdd111111111111f4f111111111111ddbdddf1f..
            ..f11fdddbdd1b11111111111f11111111111b1ddbdddf11f.
            ..f1dfdbdddbdd1b1111111111111111111b1ddbdddbdfd1f.
            ..fdff1b1ddbdddbddd1111111111111111bdddbdd1b1ffdf.
            ..ff.f111bdddbdddbdd1b1d1b1d1b1d1b1ddbdddb111f.ff.
            .....f111bdddbdddbdddbdddbdddbdddbdddbdddb111f....
            .....f111ddbdddbdddbdddbdddbdddbdddbdddbdd111f....
            .....f111ddbdddbdddbdddbdddbdddbdddbdddbdd111f....
            ......f11b1ddbdddbdddbdddbdddbdddbdddbdd1b11f.....
            ......f1111ddbdddbdddbdddbdddbdddbdddbdd1111f.....
            .......f111b1ddbdddbdddbdddbdddbdddbdd1b111f......
            .......f11111d1b1ddbdddbdddbdddbdddbdd11111f......
            ........f1111b111bdddbdddbdddbdddbdd1b1111f.......
            ........f11111111b1ddbdddbdddbdd1b1d111111f.......
            .........f111111111bdddbdddbdddb111111111f........
            ..........f11111111b1d1b1d1b1d1b11111111f.........
            ...........f111111111111111111111111111f..........
            ............f1f1f1111111111111111f1f11f...........
            .............f5f5f11111111111111f5f5ff............
            .............f555f11111111111111f555f.............
            .............f454ff1111111111111f454f.............
            ..............f4f..fffffffffffff.f4f..............
            ...............f..................f...............
            ..................................................
            `, SpriteKind.Enemy)
        the_war_chicken.setPosition(134, 190)
        cardinal_bob_crossbow.setPosition(35, 195)
        game.showLongText("2- the war chicken", DialogLayout.Bottom)
        game.showLongText("You can hear the chicken taunt you. He says \"use the battle button to try to defeat me\"", DialogLayout.Bottom)
        battle_button = sprites.create(img`
            888888888888888888888888888
            877777777777777777777777778
            877777777777777777777777778
            877777777777777777777777778
            87ff777f77fff7fff7f777fff78
            87f7f7f7f77f777f77f777f7778
            87f7f7f7f77f777f77f777f7778
            87ff77fff77f777f77f777ff778
            87f7f7f7f77f777f77f777f7778
            87f7f7f7f77f777f77f777f7778
            87ff77f7f77f777f77fff7fff78
            877777777777777777777777778
            877777777777777777777777778
            877777777777777777777777778
            877777777777777777777777778
            888888888888888888888888888
            `, SpriteKind.battle_button)
        stand_button = sprites.create(img`
            88888888888888888888888888
            87777777777777777777777778
            87777777777777777777777778
            87777777777777777777777778
            877fff7fff77f77f77f7ff7778
            877f7f77f77f7f7ff7f7f7f778
            877f7777f77f7f7ffff7f7f778
            877f7777f77f7f7f7ff7f7f778
            877fff77f77fff7f77f7f7f778
            87777f77f77f7f7f77f7f7f778
            87777f77f77f7f7f77f7f7f778
            877f7f77f77f7f7f77f7f7f778
            877fff77f77f7f7f77f7ff7778
            87777777777777777777777778
            87777777777777777777777778
            88888888888888888888888888
            `, SpriteKind.stand_button)
        stand_button.setPosition(134, 125)
        battle_button.setPosition(35, 125)
        cursor = sprites.create(img`
            1 . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 3 1 . . . . . . . . . . . . . 
            1 3 3 1 . . . . . . . . . . . . 
            1 3 3 3 1 . . . . . . . . . . . 
            1 3 3 3 3 1 . . . . . . . . . . 
            1 3 3 3 3 3 1 . . . . . . . . . 
            1 3 3 3 3 3 3 1 . . . . . . . . 
            1 3 3 3 3 3 3 3 1 . . . . . . . 
            1 3 3 3 3 3 3 3 3 1 . . . . . . 
            1 3 3 3 3 3 3 3 3 3 1 . . . . . 
            1 3 3 3 3 3 3 1 1 1 1 1 . . . . 
            1 3 1 1 1 3 3 1 . . . . . . . . 
            1 1 . . 1 3 3 3 1 . . . . . . . 
            1 . . . . 1 3 3 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(cursor)
        cursor.setPosition(35, 200)
        cursor.setFlag(SpriteFlag.StayInScreen, true)
        info.setLife(3)
        timer_variable = 0
    } else {
        info.setLife(0)
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16], TileScale.Sixteen))
        Cardinal_Bob.destroy()
        crossbow_arrow.destroy()
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbdbd111111111111d1dbdbdbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbdbd111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbdbd111111111111d1dbdbdbcbcbcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d1d111111111111d1dbdbdbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1111111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
            ffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
            ffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
            ffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffffff
            fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
            ffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffff
            fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
            ffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffff
            fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
            ffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
            fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
            ffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
            fffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffff
            ffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbdbd1d11111111111111111111111111d1dbdbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
            fffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffff
            ffffffffffffffffcfcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
            fffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffff
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cardinal_Bob.setImage(img`
        ....................
        ....................
        .........f..........
        ........f2f.........
        ........f2f.........
        .......f222f........
        ......fe222ef.f.....
        ......ffeeeff.......
        .....fbbfffddf......
        ....fcbbbbfdddf.....
        ....ffcccccfdff.....
        ...fe2fffffff2ef....
        ..fcfe2222222efbf...
        ..fcbfffffffffbcf...
        ...fcbbbbbbbbbcf....
        ....fcccbbbcccf.....
        .....fffcccfff......
        ........fff.........
        ....................
        ....................
        `)
    controller.moveSprite(Cardinal_Bob)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 . . . . . . . . . . 2 2 2 
        2 2 2 . . . . . . . . . . 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16], TileScale.Sixteen))
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbdbd111111111111d1dbdbdbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbdbd111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbdbd111111111111d1dbdbdbcbcbcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d111111111111d1dbdbdbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d1d111111111111d1dbdbdbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d11111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1111111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbcbdbdbd1d1111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
        ffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
        ffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffffff
        fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffff
        ffffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffff
        fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
        ffffffffffffffffffffcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcffffffffffffffffffffffffffffff
        fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
        ffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
        fffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
        ffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d11111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
        fffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffff
        ffffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbdbd1d11111111111111111111111111d1dbdbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
        fffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffff
        ffffffffffffffffcfcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbdbdbd1d111111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcffffffffffffffffffffffffffff
        fffffffffffffffffcfcfcfcfcfcfcfcfcbcbcbcbcbcbcbcbcbcbcbdbdbd1d1111111111111111111111111111d1dbdbdbcbcbcbcbcbcbcbcbcbcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffff
        `)
    Cardinal_Bob.destroy()
    the_conquest_chicken.destroy()
    pause(100)
    game.showLongText("Cur meae puer revertetur ad me? Non est tempus. Quaeso, iterum conare.", DialogLayout.Bottom)
    pause(100)
    tiles.setTilemap(tiles.createTilemap(hex`1000100003020202020202020202020202020204060101010101010b0c01010101010105060101010101010e0d01010101010105060101010101010e0d01010101010105060101010101010e0d0101010101010506010101010101100f010101010101050601010101010101010101010101010506010101010101010101010101010105060b0c010101010101010101010b0c0506100f01010101010101010101100f050601010101010101010101010101010506010101010101010101010101010105060101010101010b0c01010101010105060101010101010e0d0101010101010506010101010101100f010101010101050708090909090909090909090909090a`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 . . . . . . . . . . 2 2 2 
        2 2 2 . . . . . . . . . . 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 . . . . . . 2 2 . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile6,myTiles.tile7,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21], TileScale.Sixteen))
    game.showLongText("1- the conquest chicken", DialogLayout.Bottom)
    game.showLongText("ah yes the chicken of conquest. use the arrow keys move around long enough to avoid being conquered", DialogLayout.Bottom)
    Cardinal_Bob = sprites.create(img`
        ....................
        ....................
        .........f..........
        ........f2f.........
        ........f2f.........
        .......f222f........
        ......fe222ef.......
        ......ffeeeff.......
        .....fbbfffbbf......
        ....fcbbbbbbbcf.....
        ....ffcccccccff.....
        ...fe2fffffff2ef....
        ..fbfe2222222efbf...
        ..fcbfffffffffbcf...
        ...fcbbbbbbbbbcf....
        ....fcccbbbcccf.....
        .....fffcccfff......
        ........fff.........
        ....................
        ....................
        `, SpriteKind.cardinal_bob)
    scene.cameraFollowSprite(Cardinal_Bob)
    the_conquest_chicken = sprites.create(img`
        ...............ff.............
        .............ff22ff...........
        ............f2f2ef2f..........
        ...........f2ef2f22ef.........
        ..........fe2f2ef22ef.........
        ........ff2fee2f22eff.........
        .......f2e12ffe22ef22f........
        ......f222d222feef2222f.......
        .....f22eee2222ff2eee22f......
        ....f222eee22e2222eee222f.....
        ....f222fff211e222fff21ef.....
        ...f2222fff2dd2222fff2d22f....
        ..ff2e1efff22eee22fff2222ff...
        ..ff22d22222eeeee22222222ff...
        .f2f2e222222efffe22e12e12f2f..
        .fdf21e22222f555f2e1d21def1f..
        .f1f2d122222f454f22d22d21fdf..
        .fef22d221e22f4f2222e222dfef..
        .fefe2222d1e22f2222e1222efef..
        ..ffe222e2d222222221d222eff...
        ....fe221e22eeeee22d22eef.....
        ....fee2d12eefffee222d1ef.....
        .....feeed2ef111fe2eeeef......
        ......feee2fd111dfd1eef.......
        ......fffeef11111feefff.......
        .....f555fefd111dfef555f......
        .....f545fffdddddfff545f......
        .....f4f4f..fffff..f4f4f......
        ......f.f...........f.f.......
        ..............................
        `, SpriteKind.Projectile)
    the_conquest_chicken.setVelocity(50, 50)
    the_conquest_chicken.setPosition(132, 86)
    info.startCountdown(30)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile27, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.crossbow_arrow, SpriteKind.Enemy, function (sprite, otherSprite) {
    crossbow_arrow.destroy()
    scene.cameraShake(4, 500)
    pause(500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Cardinal_Bob.setImage(img`
        ....................
        ....................
        .........f..........
        ........f2f.........
        ........f2f.........
        .......f222f........
        ......fefffef.......
        ......ffdddff.......
        .....fddfdfddf......
        ....fcfdddddfcf.....
        ....ffcfdddfcff.....
        ...fe2fffffff2ef....
        ..fbfe2222222efbf...
        ..fcbfffffffffbcf...
        ...fcbbbbbbbbbcf....
        ....fcccbbbcccf.....
        .....fffcccfff......
        ........fff.........
        ....................
        ....................
        `)
    controller.moveSprite(Cardinal_Bob)
})
info.onLifeZero(function () {
    pause(100)
    game.showLongText("Cur meae puer revertetur ad me? Non est tempus. Quaeso, iterum conare.", DialogLayout.Bottom)
    tiles.setTilemap(tiles.createTilemap(hex`28001500020202020202020202020202020202030302020202020202020203020202020202020202020202020204010101010101010101010101010101010102010101010101010101010101010101010101010202020101020302020202020202020201010202020101010101010102020202020202010102010102020101010101010101020101010101010101010201010202020101020101020101010101020101020202020201010202020202010102020203020202010101010201010201010202020201010203030202010101010101010101020101010101010101020202010102010102010103010101010102010102020202020203020101020202020202010102020201010101020101020101020101010101020101020201010101010101010101010101020101010102020101020201010201010202020201010201010202020202010102020202020202020202030202020101010102010102010101010102010102010102020101010101010101010101010101010101010202020101020101020101020202020202020101020202010103020302020202020202010102020202010101010201010101010101010101010101010202010101010101010102010101010101010101020101020202020202020202020203020202010102020202010102020202020202020202020101020301010101010101010101010101010102010101020201010101010102010101010101010101010102010101010101010101010101010101020101010202020202020202020202010102020203020202020201010202020202020202020101010201010102020101010101010101010101010101010101010201010101010102010101010201010102010101020202030101020202020202020202010102020202020202020302020202010102010101020101010302010101010101010103010101010101010101020101010101010101020101020101010201010102020203020202020101020202020202020202020202020101020201010101010101010102010101020201010101010101010101010101010101010101010101010102010101010101010101020101010202020202020202020202020202020203020202020202020202020202020202020202020202020202`, img`
        2222222222222222222222222222222222222222
        2..................2...................2
        22..22222222222..222.......2222222..2..2
        2........2.........2..222..2..2.....2..2
        2222..22222..2222222....2..2..2222..2222
        2.........2........222..2..2..2.....2..2
        2222222..222222..222....2..2..2.....2..2
        2.............2....22..22..2..2222..2..2
        2222..22222222222222....2..2.....2..2..2
        2..................222..2..2..2222222..2
        22..2222222222..2222....2..............2
        2........2.........2..222222222222222..2
        222..22222222222..22...............2...2
        2......2...........2...............2...2
        2222222222..222222222..222222222...2...2
        2..................2......2....2...2...2
        222..222222222..2222222222222..2...2...2
        2........2.........2........2..2...2...2
        2222222..2222222222222..22.........2...2
        2........................2.........2...2
        2222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25], TileScale.Sixteen))
    game.showLongText("3- The Famine Chicken", DialogLayout.Bottom)
    game.showLongText("The third chicken! Yay! You can tell that the chicken somewhere in this maze using your magic Jesus powers. Traverse the maze to find the chicken before you starve to death. Increase the time you have until your death by eating the food you find in the maze. I'm pretty sure it's safe.", DialogLayout.Bottom)
    Cardinal_Bob = sprites.create(img`
        ....................
        ....................
        .........f..........
        ........f2f.........
        ........f2f.........
        .......f222f........
        ......fe222ef.f.....
        ......ffeeeff.......
        .....fbbfffddf......
        ....fcbbbbfdddf.....
        ....ffcccccfdff.....
        ...fe2fffffff2ef....
        ..fcfe2222222efbf...
        ..fcbfffffffffbcf...
        ...fcbbbbbbbbbcf....
        ....fcccbbbcccf.....
        .....fffcccfff......
        ........fff.........
        ....................
        ....................
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Cardinal_Bob, myTiles.tile25)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    the_conquest_chicken.setFlag(SpriteFlag.BounceOnWall, true)
})
let killing_the_war_chicken_ending = 0
let crossbow_arrow: Sprite = null
let stand_button: Sprite = null
let battle_button: Sprite = null
let cardinal_bob_crossbow: Sprite = null
let the_war_chicken: Sprite = null
let not_killing_the_war_chicken_ending = 0
let cursor: Sprite = null
let timer_variable = 0
let the_conquest_chicken: Sprite = null
let Cardinal_Bob: Sprite = null
scene.setBackgroundImage(img`
    dddddddddfb88888feeeeeeeebfdddddddddddddddddddddfbf66666666666666666666bfddddddddddddddddddfbeeeeeeeeeeeef666666666bfdddddddddddddddddddddfbfeeeeeeeeeeeeeeeeeef
    dddddddddfb89998fe222222ebfdddddddddddddddddddddfbef6777777777777777776bfddddddddddddddddddfbe222222222ef6777777776bfdddddddddddddddddddddfb6fe22222222222222ef8
    dddddddddfb89998fe222222ebfdddddddddddddddddddddfbeef677777777777777776bfddddddddddddddddddfbe222222222ef6777777776bfdddddddddddddddddddddfb66e22222222222222ef8
    dddddddddfb899988fe22222ebfdddddddddddddddddddddfbe2ef67777777777777776bfddddddddddddddddddfbe222222222ef67777777776bfddddddddddddddddddddfb66fe222222222222ef88
    ddddddddfb8999998fe22222ebfdddddddddddddddddddddfbe22e677777777777777776bfdddddddddddddddddfbe222222222ef67777777776bfddddddddddddddddddddfb676fe2222222222ef898
    ddddddddfb8999998fe22222ebfdddddddddddddddddddddfbe22ef67777777777777776bfdddddddddddddddddfbe22222222ef677777777776bfddddddddddddddddddddfb6776e2222222222ef898
    ddddddddfb8999998fe22222ebfdddddddddddddddddddddfbe222ef6777777777777776bfddddddddddddddddddfbe2222222ef677777777776bfddddddddddddddddddddfb6776fe22222222ef8998
    ddddddddfb89999998fe2222ebfdddddddddddddddddddddfbe2222ef677777777777776bfddddddddddddddddddfbe2222222ef677777777776bfddddddddddddddddddddfb67776fe222222ef89998
    ddddddddfb89999998fe222eebfdddddddddddddddddddddfbe22222ef67777777777776bfddddddddddddddddddfbe222222ef6777777777776bfddddddddddddddddddddfb67776fe222222ef89998
    ddddddddfb89999998feeeeffbfdddddddddddddddddddddfbe222222ef6777777777776bfddddddddddddddddddfbe222222ef6777777777776bfddddddddddddddddddddfb677776fe2222ef899998
    ddddddddfb899998888ffff66bfdddddddddddddddddddddfbe2222222ef677777777776bfdddddddddddddddddddfe222222ef6777777777776bfdddddddddddddddddddddfb67776fe222ef8999998
    dddddddfb898888ffff666666bfdddddddddddddddddddddfbe22222222e677777777776bfdddddddddddddddddddfbe22222ef6777777777776bfdddddddddddddddddddddfb677776fe22ef8999998
    dddddddfb88ffff6666777776bfdddddddddddddddddddddfbe22222222ef67777777776bfdddddddddddddddddddfbe2222ef67777777777776bfdddddddddddddddddddddfb6777776feef89999998
    dddddddfbff66667777777776bfdddddddddddddddddddddfbe222222222ef6777777776bfdddddddddddddddddddfbe2222ef67777777777776bfdddddddddddddddddddddfb6777776fefcf8899998
    dddddddfbef67777777777776bfdddddddddddddddddddddfbe2222222222ef677777776bfdddddddddddddddddddfbe2222ef67777777777776bfdddddddddddddddddddddfb67777776ffccff88998
    dddddddfbeef6777777777776bfdddddddddddddddddddddfbe222222222ef8f67777776bfdddddddddddddddddddfbe222ef67777777777776fbfdddddddddddddddddddddfb67777776fcaaacff888
    dddddddfbe2ef677777777776bfdddddddddddddddddddddfbe222222222ef88f6777776bfddddddddddddddddddfbe2222ef6777777777776f8bfdddddddddddddddddddddfb6777776fcaaaaaccff8
    dddddddfbe22ef67777777776bfdddddddddddddddddddddfbe22222222ef8998f677776bfddddddddddddddddddfbe2222ef677777777776f88bfddddddddddddddddddddddfb677776fcaaaaaaaccf
    dddddddfbe222ef6777777776bfdddddddddddddddddddddfbe2222222ef89998f677776bfddddddddddddddddddfbe2222ef67777777776f898bfddddddddddddddddddddddfb67776fcaaaaaaaaacc
    dddddddfbe2222ef677777776bfdddddddddddddddddddddfbe2222222ef899998f6676bfdddddddddddddddddddfbe222ef67777777776f8998bfddddddddddddddddddddddfb6776fcaaaaaaaaaaac
    dddddddfbe22222ef67777776bfdddddddddddddddddddddfbe222222ef89999998f66bfddddddddddddddddddddfbe222ef67777777776f8998bfddddddddddddddddddddddfb6776fcaaaaaaaaaaac
    dddddddfbe222222ef67777776bfddddddddddddddddddddfbe222222ef899999998f6bfddddddddddddddddddddfbe222ef6777777776f89998bfddddddddddddddddddddddfb676fcaaaaaaaaaaaac
    dddddddfbe2222222ef6777776bfddddddddddddddddddddfbe22222ef89999999998fbfddddddddddddddddddddfbe222ef677777776f899998bfddddddddddddddddddddddfb66fcaaaaaaaaaaaaac
    dddddddfbe22222222ef677776bfddddddddddddddddddddfbe2222ef8999999999998bfddddddddddddddddddddfbe22ef677777776f8999998bfddddddddddddddddddddddfb66fcaaaaaaaaaaaaac
    dddddddfbe222222222ef67776bfddddddddddddddddddddfbe2222ef8999999999998bfddddddddddddddddddddfbe22ef67777776f89999998bfddddddddddddddddddddddfb6fefcaaaaaaaaaaaac
    dddddddfbe2222222222ef6776bfddddddddddddddddddddfbe222ef89999999999998bfddddddddddddddddddddfbe22ef6777776f899999998bfddddddddddddddddddddddfbfeefcaaaaaaaaaaaac
    dddddddfbe222222222efcf676bfddddddddddddddddddddfbe22ef899999999999998bfddddddddddddddddddddfbe2ef6777776f8999999998bfddddddddddddddddddddddfbe2efcaaaaaaaaaaaac
    dddddddfbe222222222efccf66bfddddddddddddddddddddfbe22ef899999999999998bfddddddddddddddddddddfbe2ef6777776f89999999998bfddddddddddddddddddddddfe2efcaaaaaaaaaaaac
    dddddddfbe22222222efcaacf6bfddddddddddddddddddddfbe2ef8999999999999999bfddddddddddddddddddddfbe2ef677776f899999999998bfddddddddddddddddddddddfbeefcaaaaaaaaaaaac
    dddddddfbe2222222efccaaacfbfddddddddddddddddddddfbe2ef89999999999999998bfdddddddddddddddddddfbe2ef67776f8899999999998bfddddddddddddddddddddddfbe2efcaaaaaaaaaaac
    dddddddfbe2222222efcaaaaacbfddddddddddddddddddddfbeef899999999999999998bfdddddddddddddddddddfbeef67776f89999999999998bfddddddddddddddddddddddfbe2efcaaaaaaaaaaac
    dddddddfbe222222efcaaaaaacbfddddddddddddddddddddfbff8999999999999999998bfddddddddddddddddddddfbef6776f899999999999998bfddddddddddddddddddddddfbe2efcaaaaaaaaaaac
    dddddddfbe22222efcaaaaaaacbfddddddddddddddddddddfbcf8999999999999999998bfddddddddddddddddddddfbef676f8999999999999998bfddddddddddddddddddddddfbe22efaaaaaaaaaaac
    ddddddfbe222222efcaaaaaaacbfddddddddddddddddddddfbccf889999999999999998bfddddddddddddddddddddfbf676f89999999999999998bfddddddddddddddddffffffbeee2efcaaaaaaaaaac
    ddddddfbe22222efcaaaaaaaacbfddddddddddddddddddddfbcacff8999999999999998bfddddddddddddddddddddfbf676f89999999999999998bfdddddddddddddfffeeeeeeffffeefcaaaaaaaaaac
    ddddddfbe22222efcaaaaaaaaacbfdddddddddddddddddddfbcaaccf899999999999998bfddddddddddddddddddddfbf66f8999999999999999998bfddddddddddddfeeeeeeeeeeeefffccaaaaaaaaac
    ddddddfbe2222efcaaaaaaaaaacbfdddddddddddddddddddfbcaaaacf89999999999998bfddddddddddddddddddddfbfff89999999999999999998bfddddddddddddfeeeeeeeeeeeeeefffcccccccccc
    ddddddfbe222efccaaaaaaaaaacbfdddddddddddddddddddfbcaaaaacf8899999999998bfddddddddddddddddddddfbccff8899999999999999998bfdddddddddddfeeeeeeeeeeeeeeeeefffffffffff
    ddddddfbe222efcaaaaaaaaaaacbfdddddddddddddddddddfbcaaaaaacff89999999998bfddddddddddddddddddddfbccccff89999999999999998bfdddddddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ddddddfbe22efcaaaaaaaaaaacbfdddddddddddddddddddfbcaaaaaaaaccf8999999998bfddddddddddddddddddddfbcaaaccf8899999999999998bfdddddddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ddddddfbe22efcaaaaaaaaaaacbfdddddddddddddddddddfbcaaaaaaaaacff889999998bfdddddddddddddddddddddfbcaaaacff88999999999998bfdddddddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ddddddfbe2efcaaaaaaaaaaaacbfdddddddddddddddddddfbcaaaaaaaacf66ff8999998bfdddddddddddddddddddddfbcaaaacccff899999999998bfdddddddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ddddddfbe2fccaaaaaaaaaaaacbfdddddddddddddddddddfbcaaaaaaaacf6766f899998bfdddddddddddddddddddddfbcaaaaaaaccf89999999998fddddddddddddfeeeeeeee44444eeeeeeeeeee4444
    dddddfbe2efffcccaaaaaaaaacbfdddddddddddddddddddfbcaaaaaaacf677776f89998bfdddddddddddddddddddddfbcaaaaaaaaccff89999998bfddddddddddddfeeeeeeee44444444444444444444
    dddddfbeef666fffccaaaaaaacbfdddddddddddddddddddfbcaaaaaaacf6777776f8898bfdddddddddddddddddddddfbcaaaaaaaaacf6ff899998bfddddddddddddfeeeeeee444444444444444444444
    dddddfbef6777666ffcccaaaacbfdddddddddddddddddddfbcaaaaaacf677777776ff88bfdddddddddddddddddddddfbcaaaaaaaacf6666f89998bfddddddddddddfeeeeee4444444444444444444444
    dddddfbef677777766fffcccacbfdddddddddddddddddddfbcaaaaaacf67777777766f8bfdddddddddddddddddddddfbcaaaaaaaacf77776ff888bfddddddddddddfeeeeee4444444444444444444444
    dddddfbf6777777777666fffccbfdddddddddddddddddddfbcaaaaacf6777777777776fbfdddddddddddddddddddddfbcaaaaaaacf67777766ff8bfdddddddddddfeeeeee44444444444444444444444
    ddddfb88f677777777777666ffbfdddddddddddddddddddfbcaaaaacf67777777777766bfdddddddddddddddddddddfbcaaaaaaacf6777777766fbfdddddddddddfeeeeeee4444444444444444444444
    ddddfb898f6777777777777766bfdddddddddddddddddddfbcaaaaacf677777777766ffbfdddddddddddddddddddddfbcaaaaaacf677777777776bfdddddddddddfeeeeeee4444444444444444444445
    ddddfb898f6777777777777776bfdddddddddddddddddddfbcaaaacf67777777766ffeebfdddddddddddddddddddddfbcaaaaaacf677777777776bfdddddddddddfeeeeeeee444444444444444444555
    ddddfb8998f677777777777776bfdddddddddddddddddddfbcaaaacf677777666ffee2ebfdddddddddddddddddddddfbcaaaaaacf67777777776bfddddddddddddfeeeeeeee444444444555555555555
    ddddfb89998f67777777777776bfdddddddddddddddddddfbcaaacf6777766ffeee2222ebfddddddddddddddddddddfbcaaaaacf677777777776bfddddddddddfffeeeeeeee444444445555555555555
    dddfb899998f67777777777776bfdddddddddddddddddddfbcaaacf67766ffee2222222ebfddddddddddddddddddddfbcaaaaacf677777777776bfdddddddddffeeeeeeeeee444444445555555555555
    dddfb8999998f67777777777776bfddddddddddddddddddfbcaacf6766ffee222222222ebfddddddddddddddddddddfbcaaaacf6777777777776bfdddddddddfeeeeeeeeee4444444445555555555555
    dddfb89999998f6777777777776bfdddddddddddddddddddfbcacf66ff88fe222222222ebfddddddddddddddddddddfbcaaaacf6777777777776bfddddddddffeeeeeeeeee4444444445555555555555
    dddfb899999998f677777777776bfdddddddddddddddddddfbccf8ff88998fe22222222ebfdddddddddddddddddddfbcaaaacf67777777777776bfdddddddfeeeeeeeeeeee4444444445555555555555
    ddfb8999999998f677777777776bfdddddddddddddddddddfbccf888999998fe2222222ebfdddddddddddddddddddfbcaaaacf67777777777776bfddddddfeeeeeeeeeee444444444455555555555551
    ddfb89999999998f67777777776bfdddddddddddddddddddfbcf8999999999fe2222222ebfdddddddddddddddddddfbcaaacf677777777777776bfddddffeeeeeeeeee44444444444555555555551111
    ddfb899999999998f6777777776bfddddddddddddddddddddfb899999999998fe222222ebfdddddddddddddddddddfbcaaacf677777777777776bfdddfeeeeeeee444444444444445555555551111111
    dddfb89999999998f6777777776bfddddddddddddddddddddfb8999999999998fe22222ebfddddddddddddddddddddfbcacf6777777777777776bfdddfeeeeee4444444444444445555555555111111f
    dddfb899999999988f677777776bfddddddddddddddddddddfb8999999999998fe22222ebfddddddddddddddddddddfbcacf6777777777777776bfddfeeeeee444444444444444555555555511111fff
    dddfb8999999999998f67777776bfddddddddddddddddddddfb89999999999998fe2222ebfddddddddddddddddddddfbcacf6777777777777776bfdffeeeee4444444444444455555555555511111fff
    dddfb89999999999998f6777776bfddddddddddddddddddddfb899999999999998fe222ebfddddddddddddddddddddfbccf67777777777777776bfffeeeee4444444444444455555555555551111ffff
    dddfb89999999999998f677776bfdddddddddddddddddddddfb899999999999998fe222ebfddddddddddddddddddddfbccf67777776666666666fffeeeeee4444444444455555555555555551111ffff
    dddfb899999999999998f67776bfdddddddddddddddddddddfb8999999999999998fe222ebfdddddddddddddddddddfbcf66666666ffffffffffeeeeeeee44444444444555555555555555555111ffff
    dddfb8999999999999998f6776bfdddddddddddddddddddddfb89999999999999998fe22ebfdddddddddddddddddddfbcfffffffffeeeeefffeeeeeeeee44444444444555555555555555511111111ff
    dddfb89999999999999998f676bfdddddddddddddddddddddfb89999999999999998fe22ebfdddddddddddddddddddfbf88888888fe22effeeeeeeeeee4444444444455555555555551111111111111f
    dddfb89999999999999998f676bfdddddddddddddddddddddfb8999999999999998f6fe2ebfddddddddddddddddddfb88999999998fe2efeeeeeeeee44444444444445555555555511111111111111ff
    dddfb899999999999999998f66bfdddddddddddddddddddddfb899999999999998f676feebfddddddddddddddddddfb89999999998fe2efeeeeeee44444444444444555555555555111111fffff111ff
    dddfb8999999999999999998f66bfddddddddddddddddddddfb89999999999998f6776feebfdddddddddddddddddfb8999999999998feefeeeeee444444444444444555555555551111ffffffffff1ff
    dddfb899999999999999998ff66bfddddddddddddddddddddfb8999999999998f677776febfdddddddddddddddddfb89999999999988fefeeeee4444444444444444555555555511111fffffffffffff
    dddfb89999999999999998feef6bfddddddddddddddddddddfb899999999998f67777776fbfdddddddddddddddddfb899999999999998feeeeee44444444444444455555555551111111111fffffffff
    dddfb8999999999999998fe22efbfddddddddddddddddddddfb89999999998f6777777776bfdddddddddddddddddfb899999999999998feeeeee444444444444444555555555551111111111111fffff
    dddfb899999999999988fe2222ebfddddddddddddddddddddfb8999999998f67777777776bfdddddddddddddddddfb899999999999998feeeeee44444444444444555555555555511111111fffffffff
    dddfb8999999999998ffe22222ebfddddddddddddddddddddfb899999998f677777777776bfdddddddddddddddddfb899999999999998feeeeee4444444444444455555555555511ffffffffffffffff
    ddddfb89999999998fee222222ebfddddddddddddddddddddfb89999998f6777777777776bfdddddddddddddddddfb899999999999998feeeeeee444444444444555555555555111ffffffffffffffff
    ddddfb8999999998fe22222222ebfddddddddddddddddddddfb8999998f67777777777776bfdddddddddddddddddfb899999999999998feeeeeee44444444444455555555555111111ffffff11ffffff
    ddddfb899999998fe222222222ebfddddddddddddddddddddfb899998f67777777777776bfddddddddddddddddddfb899999999999998ffeeeeeee444444444445555555551111111111111111111fff
    dddddfb8999998fe2222222222ebfddddddddddddffddddddfb89998f667777777777776bfddddddddddddddddddfb8999999999999998feeeeeee444444444445555555551111111111111111111fff
    dddddfb899998fe22222222222eebfdddddddffff2ffddddddb8998feff6777777777776bfddddddddddddddddddfb8999999999999998ffeeeeeee444444444445555555555551111115511111111ff
    dddddfb89988f6fe22222222222ebfddffdddf22222fffddffb898fe2eef677777777776bfddddddddddddddddddfb8999999999999998fffeeeeee444444444445555555555555555555551111111ff
    dddddfb898ff676fe2222222222ebfdfbfffdf2222ffdfddffb88fe2222ef67777777776bfdddddddddddddddddfb8999999999999998f66feeeeee44444444444455555555555555555555511111fff
    dddddfb88f66776fe2222222222ebffbbbbff2222ffddffdddb8fe222222ef6777777776bfdddddddddddddddddfb899999999999998f6776feeeee44444444444455555555555555555555511111fff
    dddddfb8f6777776fe222222222ebffbbbbcf2222fddddfdddbfe2222222ef6777777776bfdddddddddddddddddfb89999999999998f67776feeeee44444444444455555555555555555555511111fff
    dddddfbf677777776fe22222222ebfbbbbbcf22fffddddffddbe222222222ef677777776bfdddddddddddddddddfb8999999999998f677776feeeee444444444444555555555ffffffffffffffffffff
    dddddfb67777777776fe2222222efbbbbbbcf2fdddffdddfddbe2222222222ef67777776bfdddddddddddddddddfb899999999998f677776ffeeeee44444444444445555555feeeeeeeeeeeeeeeeffff
    dddddfb67777777776fe222222efbbbbbbbcffbdddffdddfddbe22222222222ef6777776bfdddddddddddddddddfb89999999998f6777776feeeee4444444444444455555fffffffffffffffffffffff
    dddddfb677777777776fe22222ffbbbbbbbbcffbddddddffdfbe222222222222ef677776bfdddddddddddddddddfb8999999988f67777776feeeee444444444444445555feeeeeeeeeeeeeeeeeeeeeee
    dddddfb6777777777776fe222efbbbbbbbbbbcffbbbddffddfbe2222222222222ef67776bfdddddddddddddddddfb89999998ff677777776feeeee444444444444445555feeeeeeeeeeeeeeeeeeeeeee
    ddddddfb6777777777776fe2effbbbbbbbbbbbcffffbffdddfbe22222222222222ef6776bfdddddddddddddddddfb8999998f66777777776feeee4444444444444444555ffffffffffffffffffffffff
    ddddddfb6777777777776fe2efbbbbbbbbbbbbbcccfffddddfbe22222222222222ef6776bfdddddddddddddddddfb899998f677777777776feeee4444444444444445555555555feeeeeeeeeeeeeeeee
    ddddddfb67777777777776feefbbbbbbbbbbbbbbbbbffddddfbe222222222222222ef676bfdddddddddddddddddfb89998f677777777776ffeeee4444444444444444555555555feeeeeeeeeeeeeeeee
    ddddddfb677777777777776fffffbbbbbbbbbbbbbbf2fddddfbe2222222222222222ef66bfdddddddddddddddddfb8998f6777777777776feeeee4444444444444444555555555feeeeeeeeeeeeeeeee
    ddddddfb67777777777776ff222ffffffbbbbbbbbbffffdddfbe22222222222222222ef6bfdddddddddddddddddfb898f67777777777776feeeee4444444444444445555555555feeeeeeeeeeeeeeeee
    ddddddfb67777777777776fee2222222fffffffffff22fffdfbe222222222222222222efbfdddddddddddddddddfb88f677777777777776feeeeee444444444444445555555555feeeeeeeeeeeeeeeee
    ddddddfb67777777777776fffe22222222222222222222efdfbe2222222222222222222ebfdddddddddddddddddfb8f6777777777777776feeeeee444444444444445555555555feeeeeeeeeeeeeeeee
    ddddddfb6777777777777766ffeee22222222222222222ffdfbe2222222222222222222ebfdddddddddddddddddfbf67777777777777776feeeeee444444444444445555555555feeeeeeeeeeeeeeeee
    ddddddfb6666666666666ffffcfffee22222222222eeeefddfbeeeeeeeeeeeeeeeeeeeeebfdddddddddddddddddfb666666666666666666feeeeee444444444444445555555555feeeeeeeeeeeeeeeee
    ffffffffffffffffffffffeefcbbbffeeee22eeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeee
    11fdddddddddddddddffceeefcbbbbbffffeefffffff2ffddddddf1111111111111111111111fdddddddddddddddddf11111111111111111fefeeee44444444444445555555f55feeeeeeeeeeeeeeeee
    1fdddddddddddddddfffcffffcbbbbbbbbffffbbbbcff2fdddddf1111111111111111111111fdddddddddddddddddf111111111111111111ffeeeeee444444444444455555f555feeeeeeeeeeeeeeeee
    fdddddddddddddddf1fcfffefcbbbbbbbbbbbbbbbbbcf2fddddf1111111111111111111111fdddddddddddddddddf1111111111111111111ffeeeeeee4444444444445555f5555feeeeeeeeeeeeeeeee
    dddddddddddddddf11fffceeffcbbbbbbbbbbbbbbbbcfffdddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddfeeeeeee44444444444455f55555feeeeeeeeeeeeeeeee
    ddddddddddddddf1111fceeeeffccccccccccccccccfffdddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddddffeeeeee444444444445f555555feeeeeeeeeeeeeeeee
    dddddddddddddf11111ffcccffffffffffffffffffffddddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddddddffeeeeee4444444444f5555555feeeeeeeeeeeeeeeee
    ddddddddddddf1111111ffff11111fdddddddddddddddddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddddddddffeeeee444444444f55555555ffffffffffffffffff
    dddddddddddf1111111111111111fdddddddddddddddddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddddddddddffeeee44444444f45555555555555555555555f555
    ddddddddddf1111111111111111fdddddddddddddddddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddddddddddddfeeee4444444f44555555555555555555555f5555
    dddddddddf1111111111111111fdddddddddddddddddf1111111111111111111111fdddddddddddddddddf1111111111111111111fddddddddddddfeeeee444444f44455555555555555555555f55555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    1111111fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf111111111111ffeeee444444f44444555555555555555555f5555555
    111111fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf11111111111ffeeeee444444f44444455555555555555555f55555555
    11111fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf111111111111feeeee444444f44444445555555555555555f555555555
    1111fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf111111111111feeee4444444f44444444555555555555555f5555555555
    111fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf1111111111111feee4444444f44444444455555555555555f55555555555
    11fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf11111111111111feee444444f44444445555555555555555f555555555555
    1fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf111111111111111feee44444f44444444455555555555555f5555555555555
    fddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf1111111111111111feeee444f44444444445555555555555f55555555555555
    ddddddddddddddddf11111111111111111fddddddddddddddddddddddf11111111111111111fdddddddddddddddddddf1111111111111111ffeee444f44444444444555555555555f555555555555555
    `)
let cardinal_bob_text = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cardinal_bob_text.setPosition(34, 71)
cardinal_bob_text.say("Hey Mr. pope sir, I got your text")
pause(100)
pause(100)
let hocus_popeus = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
hocus_popeus.setPosition(100, 37)
cardinal_bob_text.say("")
hocus_popeus.say("the one about the \"pope-sicle\" party or the one about armegeddon?")
pause(100)
pause(100)
pause(100)
hocus_popeus.say("")
cardinal_bob_text.say("the armegeddon one sir, although I did get the cross-shapped popsicles but don't they seem kind of inconvenient to eat?")
pause(100)
pause(100)
pause(100)
hocus_popeus.say("yeah but it's funny so it doesn't matter")
cardinal_bob_text.say("")
pause(100)
cardinal_bob_text.say("...")
hocus_popeus.say("")
pause(100)
cardinal_bob_text.say("so about the rapture...")
pause(100)
hocus_popeus.say("whoops yeah lol")
cardinal_bob_text.say("")
pause(100)
hocus_popeus.say("so last night I had a heavenly vision and the rapture is coming")
pause(100)
pause(100)
hocus_popeus.say("")
cardinal_bob_text.say("so why have you called upon me mr pope sir")
pause(100)
cardinal_bob_text.say("")
hocus_popeus.say("cause your the most expendable")
pause(100)
cardinal_bob_text.say("oh")
hocus_popeus.say("")
pause(100)
hocus_popeus.say("so in my heavenly vision I saw the four horsemen come across the earth")
cardinal_bob_text.say("")
pause(100)
pause(100)
cardinal_bob_text.say("so shouldnt we alert the people")
hocus_popeus.say("")
pause(100)
cardinal_bob_text.say("")
hocus_popeus.say("no because it's slightly embarressing")
pause(100)
cardinal_bob_text.say("how so?")
hocus_popeus.say("")
pause(100)
cardinal_bob_text.say("")
hocus_popeus.say("all the horsemen... they're chickens")
pause(100)
cardinal_bob_text.say("I don't see the problem")
hocus_popeus.say("")
pause(100)
cardinal_bob_text.say("")
hocus_popeus.say("we as a religion depend on biblical literalism so if they see chickens instead of big ol' handsome horsemen they will turn away from us. This is why I need you to go collect all the chickens and bring them back here. I wrote them down on this nice little grocery list for you.")
pause(100)
pause(100)
pause(100)
pause(100)
pause(100)
pause(100)
pause(100)
pause(100)
hocus_popeus.say("")
game.showLongText("you have recieveth ye old grocery list of rapture. It reads:", DialogLayout.Bottom)
game.showLongText("1- the conquest chicken", DialogLayout.Bottom)
game.showLongText("2- the war chicken ", DialogLayout.Bottom)
game.showLongText("3- the famine chicken", DialogLayout.Bottom)
game.showLongText("4- the death chicken", DialogLayout.Bottom)
hocus_popeus.say("Now go and may the lord be with you")
pause(100)
hocus_popeus.say("")
tiles.setTilemap(tiles.createTilemap(hex`1000100003020202020202020202020202020204060101010101010b0c01010101010105060101010101010e0d01010101010105060101010101010e0d01010101010105060101010101010e0d0101010101010506010101010101100f010101010101050601010101010101010101010101010506010101010101010101010101010105060b0c010101010101010101010b0c0506100f01010101010101010101100f050601010101010101010101010101010506010101010101010101010101010105060101010101010b0c01010101010105060101010101010e0d0101010101010506010101010101100f010101010101050708090909090909090909090909090a`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . . . . . . . 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile6,myTiles.tile7,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21], TileScale.Sixteen))
game.showLongText("1- the conquest chicken", DialogLayout.Bottom)
game.showLongText("ah yes the chicken of conquest. use the arrow keys move around long enough to avoid being conquered", DialogLayout.Bottom)
cardinal_bob_text.destroy()
hocus_popeus.destroy()
Cardinal_Bob = sprites.create(img`
    ....................
    ....................
    .........f..........
    ........f2f.........
    ........f2f.........
    .......f222f........
    ......fe222ef.......
    ......ffeeeff.......
    .....fbbfffbbf......
    ....fcbbbbbbbcf.....
    ....ffcccccccff.....
    ...fe2fffffff2ef....
    ..fbfe2222222efbf...
    ..fcbfffffffffbcf...
    ...fcbbbbbbbbbcf....
    ....fcccbbbcccf.....
    .....fffcccfff......
    ........fff.........
    ....................
    ....................
    `, SpriteKind.Player)
scene.cameraFollowSprite(Cardinal_Bob)
the_conquest_chicken = sprites.create(img`
    ...............ff.............
    .............ff22ff...........
    ............f2f2ef2f..........
    ...........f2ef2f22ef.........
    ..........fe2f2ef22ef.........
    ........ff2fee2f22eff.........
    .......f2e12ffe22ef22f........
    ......f222d222feef2222f.......
    .....f22eee2222ff2eee22f......
    ....f222eee22e2222eee222f.....
    ....f222fff211e222fff21ef.....
    ...f2222fff2dd2222fff2d22f....
    ..ff2e1efff22eee22fff2222ff...
    ..ff22d22222eeeee22222222ff...
    .f2f2e222222efffe22e12e12f2f..
    .fdf21e22222f555f2e1d21def1f..
    .f1f2d122222f454f22d22d21fdf..
    .fef22d221e22f4f2222e222dfef..
    .fefe2222d1e22f2222e1222efef..
    ..ffe222e2d222222221d222eff...
    ....fe221e22eeeee22d22eef.....
    ....fee2d12eefffee222d1ef.....
    .....feeed2ef111fe2eeeef......
    ......feee2fd111dfd1eef.......
    ......fffeef11111feefff.......
    .....f555fefd111dfef555f......
    .....f545fffdddddfff545f......
    .....f4f4f..fffff..f4f4f......
    ......f.f...........f.f.......
    ..............................
    `, SpriteKind.Projectile)
the_conquest_chicken.setVelocity(50, 50)
the_conquest_chicken.setPosition(134, 76)
info.startCountdown(30)
timer_variable = 1
