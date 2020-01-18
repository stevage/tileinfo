#!/usr/bin/env node

const MBTiles = require('@mapbox/mbtiles');
const prettyjson = require('prettyjson');
const options = require('command-line-args')([
    { name: 'filename', type: String, defaultOption: true },
    { name: 'no-stats', alias: 's', type: Boolean },
    { name: 'json', alias: 'j', type: Boolean },
    { name: 'help', alias: 'h', type: Boolean },
]);

if (!options.filename || options.help) {
    console.log('Usage: tileinfo [--no-stats] [--json] mytiles.mbtiles');
    process.exit(0);
}
const tiles = new MBTiles(`${options.filename}?mode=rw`, (err, mbtiles) => {
    if (err) {
        console.error(err.message);
        console.error(err);
        process.exit(1);
    }
    mbtiles.getInfo((err, info) => {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        if (options['no-stats']) {
            delete(info.tilestats)
        }
        if (!options.json) {
            console.log(prettyjson.render(info, { numberColor: 'yellow' }));
        } else {
            console.log(JSON.stringify(info, null, 2));
        }
    });
});