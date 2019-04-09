#!/usr/bin/env node

const MBTiles = require('@mapbox/mbtiles');

const filename = process.argv[2];
if (!filename) {
    console.log('Usage: tileinfo mytiles.mbtiles');
    process.exit(0);
}
const tiles = new MBTiles(`${filename}?mode=ro`, (err, mbtiles) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }
    mbtiles.getInfo((err, info) => {
        console.log(JSON.stringify(info, null, 2));
    });
});