var mapa = L.map("contenedor-del-mapa").setView([9.95453,-84.19010], 12)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa)

var wuoffice = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -84.194073418189,
            9.955642466391794
          ],
          "type": "pointToLayer"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -82.42878277847211,
            8.42848857627554
          ],
          "type": "pointToLayer"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -77.03635679533484,
            -12.063004441658961
          ],
          "type": "pointToLayer"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -58.383358846309875,
            -34.602769540254506
          ],
          "type": "pointToLayer"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -59.61504016330514,
            13.100831317648996
          ],
          "type": "pointToLayer"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -99.13582039159314,
            19.45240974990128
          ],
          "type": "pointToLayer"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -100.3098687632823,
            25.698978162061636
          ],
          "type": "pointToLayer"
        }
      }
    ]
  }

  L.geoJSON(wuoffice, {}).addTo(map)

