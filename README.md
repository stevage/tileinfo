## TileInfo

Ever need to view the TileJSON file for your .mbtiles? This tiny tool does that:

```
$ npm install -g tileinfo
$ tileinfo --no-stats mytiles.json

scheme:        tms
basename:      mytiles.mbtiles
id:            mytiles
filesize:      18085621760
name:          mbtiles/mytiles.mbtiles
description:   mbtiles/mytiles.mbtiles
version:       2
minzoom:       8
maxzoom:       15
center:
  - -117.844849
  - 33.582591
  - 15
bounds:
  - -165.512667
  - 18.910692
  - -67.788374
  - 65.4534
type:          overlay
format:        pbf
generator:     tippecanoe v1.32.12
vector_layers:
  -
    id:          mytiles
    description:
    minzoom:     8
    maxzoom:     15
    fields:
      MyID: String
      Code: String

```

or, as actual JSON:

```
$ tileinfo --no-stats --json mytiles.json

{
  "scheme": "tms",
  "basename": "mytiles.mbtiles",
  "id": "mytiles",
  "filesize": 18085621760,
  "name": "mbtiles/mytiles.mbtiles",
  "description": "mbtiles/mytiles.mbtiles",
  "version": "2",
  "minzoom": 8,
  "maxzoom": 15,
  "center": [
    -117.844849,
    33.582591,
    15
  ],
  "bounds": [
    -165.512667,
    18.910692,
    -67.788374,
    65.4534
  ],
  "type": "overlay",
  "format": "pbf",
  "generator": "tippecanoe v1.32.12",
  "vector_layers": [
    {
      "id": "mytiles",
      "description": "",
      "minzoom": 8,
      "maxzoom": 15,
      "fields": {
        "MyID": "String",
        "Code": "String"
      }
    }
  ]
}
```
