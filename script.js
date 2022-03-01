
        const map = L.map('litterMap').setView([41.317303, -72.91503], 15);

        let routeCount = 0;
        let firstADD = false;


        var creatingRoute = false;

        var control = L.Routing.control({
          waypoints: []
        }).addTo(map);
        
        //init map, call open street map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


        // L.marker( [41.317, -72.915], {icon:greenIcon}).addTo(map);
        
        var routes = { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": { Date: new Date('2022-02-19T00:00')}, "geometry": { "type": "LineString", "coordinates": [ [ -72.91528344154358, 41.31741568846929 ], [ -72.91406035423277, 41.31905950728584 ], [ -72.91281580924988, 41.320646881205356 ], [ -72.91089534759521, 41.32321721687991 ], [ -72.9098653793335, 41.32459500398355 ], [ -72.90990829467773, 41.32514288783568 ], [ -72.9101550579071, 41.325328200448965 ], [ -72.90998339653015, 41.32559408284315 ], [ -72.909597158432, 41.3254973984617 ], [ -72.9093611240387, 41.3258196791753 ], [ -72.90897488594055, 41.325731052137954 ], [ -72.90792346000671, 41.32706044504049 ], [ -72.90871739387512, 41.3288570965903 ], [ -72.90861010551453, 41.330355611108956 ], [ -72.90836334228516, 41.33197493482397 ], [ -72.90836334228516, 41.332458307236514 ], [ -72.90805220603943, 41.3333686488753 ], [ -72.90738701820374, 41.33452065589888 ], [ -72.90868520736694, 41.33623654467095 ], [ -72.90778398513794, 41.33416619436925 ], [ -72.90820240974426, 41.333465321576426 ], [ -72.90873885154724, 41.33263554288914 ], [ -72.90862083435059, 41.33107263005767 ], [ -72.90870666503906, 41.330387836849056 ], [ -72.91173219680786, 41.33053285248221 ], [ -72.91404962539673, 41.32568271006677 ], [ -72.91473627090454, 41.32415991646641 ], [ -72.91371703147888, 41.32391014269028 ], [ -72.91678547859192, 41.318898350411395 ], [ -72.91468262672424, 41.31813284981586 ], [ -72.91528344154358, 41.31731093390423 ] ] } }, {
            "type": "Feature",
            "properties": {Date: new Date('2022-02-10T00:00')},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -72.91976809501648,
                  41.317834705045854
                ],
                [
                  -72.91629195213318,
                  41.316190855338554
                ],
                [
                  -72.9173219203949,
                  41.31470007343421
                ],
                [
                  -72.9182231426239,
                  41.31499017420634
                ],
                [
                  -72.91934967041016,
                  41.313563832978865
                ],
                [
                  -72.92132377624512,
                  41.31427297828124
                ],
                [
                  -72.91980028152466,
                  41.31777024113249
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {Date: new Date('2022-01-19T00:00')},
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -72.9116678237915,
                    41.31800392251512
                  ],
                  [
                    -72.908695936203,
                    41.31673880984749
                  ],
                  [
                    -72.90630340576172,
                    41.31992168979531
                  ],
                  [
                    -72.90727972984314,
                    41.32028428650902
                  ],
                  [
                    -72.90821313858032,
                    41.31909173861293
                  ],
                  [
                    -72.91028380393982,
                    41.319824996997625
                  ],
                  [
                    -72.9116678237915,
                    41.31800392251512
                  ]
                ]
              ]
            }
          } ] };
        
        //send route
        function routeDistance(route) {
            let totalDistance = 0;

            if (route.geometry.type == "Polygon") {
                for (let i=1; i<route.geometry.coordinates[0].length; i++) {

                    let latLong;
                    let latLong2;

                    latLong = turf.point([route.geometry.coordinates[0][i][0], route.geometry.coordinates[0][i][1]]);
                    latLong2 = turf.point([route.geometry.coordinates[0][i-1][0], route.geometry.coordinates[0][i-1][1]]);

                    let distance = turf.distance(latLong, latLong2, {units: 'miles'});
                    totalDistance +=distance;

                    // console.log(totalDistance);
    
                    
                    //create marker at joint
                    // let routeJoint = L.marker([route.geometry.coordinates[i][1], route.geometry.coordinates[i][0]]).addTo(map);
    
                }
                
            } else {
                for (let i=1; i<route.geometry.coordinates.length; i++) {

                    let latLong;
                    let latLong2;
    
                    if (i == (route.geometry.coordinates.length - 1)) {
                        latLong = turf.point([route.geometry.coordinates[0][0], route.geometry.coordinates[0][1]]);
                        latLong2 = turf.point([route.geometry.coordinates[i][0], route.geometry.coordinates[i][1]]);
                    } else {
                        latLong = turf.point([route.geometry.coordinates[i][0], route.geometry.coordinates[i][1]]);
                        latLong2 = turf.point([route.geometry.coordinates[i-1][0], route.geometry.coordinates[i-1][1]]);
                    }
    
                    let distance = turf.distance(latLong, latLong2, {units: 'miles'});
                    totalDistance +=distance;

                    // console.log(totalDistance);
    
                    
                    //create marker at joint
                    // let routeJoint = L.marker([route.geometry.coordinates[i][1], route.geometry.coordinates[i][0]]).addTo(map);
    
                }
            }

            
            
            return totalDistance.toFixed(2)

        }



        function routeColor(route, daysMax) {
            let daysSince = (new Date().valueOf() - route.properties.Date.valueOf()) / 86400000;
            if (daysSince > daysMax) {
                return 0
            } else {
                let colorNumb = (daysMax-daysSince) / daysMax * 120;
                return colorNumb
            }
           
        };



        function routeData(feature, layer) {
            routeCount++;
            feature.properties.name = `Route ${routeCount}`;

            // let noteText = prompt(`Note for ${feature.properties.name}`);
            let noteText = `Note for ${feature.properties.name}`;


            layer.bindPopup(`<h2>${feature.properties.name}</h2><h3>${feature.properties.Date}</h3><h3>Distance: ${routeDistance(feature)} miles</h3><h3>Note: ${noteText}</h3>`);

            let routeDiv = document.createElement("div");
            routeDiv.id = `route_${routeCount}`;
            routeDiv.className = "routeText";
            routeDiv.innerHTML = `Route: ${routeCount}, Distance: ${routeDistance(feature)}, Note: ${noteText}`;
            // routeDistanceTEXT.innerHTML = `Route length: ${routeDistance(feature)} miles`;
            document.getElementById("routeText").appendChild(routeDiv);
        }



        //add routes to map, define style
        L.geoJSON(routes, {
            style: function(feature) {
                return {fill: "true", fillRule: "nonzero", weight: "5", color: `hsl(${routeColor(feature, 28)}, 100%, 40%`}
            },
            onEachFeature: routeData
        }).addTo(map);


        var geojsonTest = {
          "name":"NewFeatureType",
          "type":"FeatureCollection",
          "features":[{
              "type":"Feature",
              "properties": {Date: new Date('2022-02-10T00:00')},
              "geometry":{
                  "type":"Polygon",
                  "coordinates":[]
              }
          }]
      };
  

      var createRouteCoord = [];


      //   // routing testing
      //   L.Routing.control({
      //     waypoints: [
      //       L.latLng(41.31813284981586,-72.91468262672424),
      //       L.latLng(41.319824996997625, -72.91028380393982),
      //       L.latLng(41.319824996997625, -72.92028380393982)
      //     ]
      //   }).on('routesfound', function(e) {
      //     console.log(e.routes);
      //     // console.log(e.routes[0].coordinates);
      //     let lat = L.latLng(e.routes[0].coordinates[0]).lat;
      //     let long = L.latLng(e.routes[0].coordinates[0]).lng;
      //     console.log(`${lat}, ${long}`);
      //     // console.log(route.summary.totalDistance);
           
      // }).addTo(map);

      map.on('mousedown', function(e) {

        createRouteCoord.push([e.latlng.lat, e.latlng.lng]);
        // console.log(createRouteCoord);

        // geojsonTest.features[0].geometry.coordinates.push(e.latlng.lng, e.latlng.lat);

      //   console.log(geojsonTest.features[0].geometry.coordinates);
      //   L.geoJSON(geojsonTest, {
      //     pointToLayer: function (feature, latlng) {
      //       return L.circleMarker(latlng);
      //   }
      // }).addTo(map);

      });

      function startRouteButton(label, container) {
        let btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.innerHTML = label;
        return btn;
      }

      map.on('click', function(e) {
        var container = L.DomUtil.create('div');

        if (!creatingRoute) {
          var startRouteBTN = startRouteButton("Start Route?", container);

          L.popup()
          .setContent(container)
          .setLatLng(e.latlng)
          .openOn(map);
  
          L.DomEvent.on(startRouteBTN, 'click', function() {
            control.spliceWaypoints(0, 1, e.latlng);
            map.closePopup();
            creatingRoute = true;
          });
        } else {
          var addPointBTN = startRouteButton("Add Point?", container);
          var finishRouteBTN = startRouteButton("Finish Route?", container);

          L.popup()
          .setContent(container)
          .setLatLng(e.latlng)
          .openOn(map);
          
          
          L.DomEvent.on(finishRouteBTN, 'click', function() {
            map.closePopup();
            creatingRoute = false;
          });

          L.DomEvent.on(addPointBTN, 'click', function() {
            if (!firstADD) {
              control.spliceWaypoints(1, 1, e.latlng);
              firstADD = true;
            } else {
              control.spliceWaypoints(control.getWaypoints().length - 1, 0, e.latlng);
              map.closePopup();
            }
          });
          
        }
        console.log(control.getWaypoints());

      });

      function createRoute() {
         geojsonTest.features[0].geometry.coordinates.push(createRouteCoord);
        console.log(createRouteCoord);

      //   L.geoJSON(geojsonTest, {
      //     style: function(feature) {
      //         return {fill: "true", fillRule: "nonzero", weight: "5", color: `hsl(${routeColor(feature, 28)}, 100%, 40%`}
      //     },
      //     onEachFeature: routeData
      // }).addTo(map);

      L.Routing.control({
        waypoints: [[41.31813284981586,-72.91468262672424], [] ]
      }).on('routesfound', function(e) {
        console.log(e.routes);
        // console.log(e.routes[0].coordinates);
        let lat = L.latLng(e.routes[0].coordinates[0]).lat;
        let long = L.latLng(e.routes[0].coordinates[0]).lng;
        console.log(`${lat}, ${long}`);
        // console.log(route.summary.totalDistance);
         
    }).addTo(map);

        
      }