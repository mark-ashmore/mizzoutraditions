// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000707070707070707070707070717171707070707070707070707070707161516070707070707070707070707070707070707070707070718071807070707070707070707070707070718070707070707070707070707070718070707070707070707070707070707070707070707070707070707070707070711071111110707070707070711111211110f0e0d1207070707070707110f0e0e0e0b0b0c11110707070707110f0b0b0b0b0b0b0c1107070707110711100b0b0b0b0b0b0c1111070711070711080a0a0a0a0a0a09110707070711070711070711071907071107070101010103010101010101010103010106060605020406060606060605021314`, img`
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . 2 2 . . 
. . . . . . 2 2 2 2 2 . 2 . . . 
. . . . . 2 2 . . . . . 2 . . . 
. . . . . 2 . . . . . . 2 . . . 
. . . . . 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.skillmap.islandTile0,sprites.skillmap.islandTile2,sprites.skillmap.islandTile1,sprites.skillmap.islandTile4,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tileGrass3,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenSwitchUp,sprites.dungeon.stairLadder,sprites.castle.tileGrass2,sprites.dungeon.chestOpen], TileScale.Sixteen);
            case "ColumnLevel":
            case "ColumnLevel1":return tiles.createTilemap(hex`1000100003010201020102010201020102010203010201020102010201020102010201020201020102010201020102010201020103020102010201020102010201020103020102010201020102010201020102010102010201020102010201020102010202010201020102010201020102010201030601090109010909020902090207030204080808080808080808080808050101020102010201020102010201020102020102010201020102010201020102010302010201020102010201020102010302010201020102010201020102010201010201020102010201020102010201020201020102010201020102010201020103020102010201020102010201020103`, img`
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . 2 . 2 . 2 . . 2 . 2 . 2 . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath8,sprites.castle.tilePath2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
