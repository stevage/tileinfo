#!/usr/bin/env node

const MBTiles = require('@mapbox/mbtiles');
const prettyjson = require('prettyjson');
const fs = require('fs');
const options = require('command-line-args')([
    { name: 'filename', type: String, defaultOption: true },
    { name: 'help', alias: 'h', type: Boolean },
    { name: 'jsonfile', alias: 'j', type: String },
]);

if (!options.filename || !options.jsonfile || options.help) {
    console.log(
        'Writes additional metadata into an mbtiles file, from a JSON file.'
    );
    console.log(
        'Usage: addtileinfo --jsonfile myjsonfile.json mytiles.mbtiles'
    );
    process.exit(0);
}

const json = JSON.parse(fs.readFileSync(options.jsonfile));

function showInfo(mbtiles) {
    mbtiles.getInfo((err, info) => {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        if (!options['stats']) {
            delete info.tilestats;
        }
        if (!options.json) {
            console.log(prettyjson.render(info, { numberColor: 'yellow' }));
        } else {
            console.log(JSON.stringify(info, null, 2));
        }
    });
}

const tiles = new MBTiles(`${options.filename}?mode=rw`, (err, mbtiles) => {
    if (err) {
        console.error(err.message);
        console.error(err);
        process.exit(1);
    }
    mbtiles.startWriting((err) => {
        mbtiles.putInfo(json, (err) => {
            mbtiles.stopWriting((err) => {
                if (!err) {
                    showInfo(mbtiles);
                }
            });
        });
    });
});
