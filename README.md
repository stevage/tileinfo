## TileInfo

Ever need a TileJSON file for your .mbtiles? This tiny tool does that:

```
$ npm install -g tileinfo

$ tileinfo mytiles.mbtiles
{
  "scheme": "tms",
  "basename": "mytiles.mbtiles",
  "id": "mytiles",
  "filesize": 393216,
  "name": "./mbtiles/mytiles.mbtiles",
  "description": "./mbtiles/mytiles.mbtiles",
  "version": "2",
  "minzoom": 0,
  "maxzoom": 8,
  "center": [
    -89.296875,
    28.920726,
    8
  ],
  "bounds": [
    -123.533746,
    28.920726,
    -78.460416,
    43.374899
  ],
  "type": "overlay",
  "format": "pbf",
  "generator": "tippecanoe v1.33.0",
  "vector_layers": [
    {
      "id": "boundary",
      "description": "",
      "minzoom": 0,
      "maxzoom": 8,
      "fields": {
        "id": "Number",
      }
    }
  ],
  ...
```
