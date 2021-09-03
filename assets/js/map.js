 var mymap = null;
        var default_lat = 55.753605;
        var default_lng = 37.621094;
        var default_zoom = 10;
        var map_div = "areaMap";
        var layer = null;
        var polyline;
        var polygon;
        var edit_distance_flag = false;
        var edit_area_flag = false;
        var hybrid;
        var satellite;
        var osm;
        var terrain;

        $(document).ready(function() {
            var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
            osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});

            hybrid = L.esri.basemapLayer('ImageryLabels');
            satellite = L.esri.basemapLayer('Imagery');
            var sHybrid = L.layerGroup([satellite, hybrid]);
            terrain = L.esri.basemapLayer('Topographic');

            mymap = L.map(map_div, { center: new L.LatLng(default_lat, default_lng), zoom: default_zoom, layers: [ osm ] });
            var	drawnItems = L.featureGroup().addTo(mymap);

            var baseLayers = {
                "Satellite": satellite,
                "Hybrid":  sHybrid,
                "Terrain": terrain,
                "Map": osm
            };
            L.control.layers(baseLayers, {}, {position: 'topright', collapsed: true}).addTo(mymap);

           

            L.control.scale({
                position: 'bottomleft'
            }).addTo(mymap);

            create_polyline();

            $("input[name=mode]").change(function() {
                clearMarkers();
            });


            mymap.on('draw:drawvertex', function (event) {
                if(layer != null) {
                    drawnItems.removeLayer(layer);
                    $('#map_tools').html('');
                }
                $('#edit-markers').prop('disabled', true);

                $('#remove-last-marker').prop('disabled', false);
                $('#clear-markers').prop('disabled', false);
            });

            mymap.on('draw:created', function (event) {
                layer = event.layer;
                drawnItems.addLayer(layer);
                mymap.fitBounds(drawnItems.getBounds());

                if($("input[name=mode]:checked").val() == 'distance') {
                    calculateDistance(event.layer);
                    create_polyline();
                }
                else {
                    calculateArea(event.layer);
                    create_polygon();
                }
                $('#remove-last-marker').prop('disabled', true);
                $('#clear-markers').prop('disabled', true);
            });
        });


        function create_polyline(calculated = false)  {
            polyline = new L.Draw.Polyline(mymap, {})
            polyline.enable();

            if(calculated === true) {
                $('#remove-last-marker').prop('disabled', true);
                $('#clear-markers').prop('disabled', true);
            }
        }

        function create_polygon(calculated = false) {
            polygon = new L.Draw.Polygon(mymap, {})
            polygon.enable();

            if(calculated === true) {
                $('#remove-last-marker').prop('disabled', true);
                $('#clear-markers').prop('disabled', true);
            } else {
                $('#remove-last-marker').prop('disabled', false);
                $('#clear-markers').prop('disabled', false);
            }
        }


        function clearMarkers() {
            if(typeof polyline !== "undefined") {
                polyline.disable();
            }
            if(typeof polygon !== "undefined") {
                polygon.disable();
            }
            $('#map_tools').html('');
            if($("input[name=mode]:checked").val() == 'distance') {
                create_polyline();
            }
            else {
                create_polygon();
            }
        }

        function removeLastMarker() {
            if($("input[name=mode]:checked").val() == 'distance') {
                polyline.deleteLastVertex();
            }
            else {
                polygon.deleteLastVertex();
            }
        }

        function calculateResult() {
            $('#remove-last-marker').prop('disabled', true);
            $('#clear-markers').prop('disabled', true);

            if($("input[name=mode]:checked").val() == 'distance') {
                if(edit_distance_flag) {
                    layer.editing.disable();
                    edit_distance_flag = false;

                    calculateDistance(layer);
                    create_polyline(true);
                }
                else {
                    polyline.completeShape();
                    $('#edit-markers').prop('disabled', false);
                }
            }
            else {
                if(edit_area_flag) {
                    layer.editing.disable();
                    edit_area_flag = false;

                    calculateArea(layer);
                    create_polygon(true);
                }
                else {
                    polygon.completeShape();
                    $('#edit-markers').prop('disabled', false);
                }
            }
        }

        function calculateDistance(layer) {
         
            var tempLatLng = null;
            var totalDistance = 0.00000;
            $.each(layer._latlngs, function(i, latlng){
                if(tempLatLng == null){
                    tempLatLng = latlng;
                    return;
                }
                totalDistance += tempLatLng.distanceTo(latlng);
                tempLatLng = latlng;
            });

            var km = totalDistance / 1000;
            var feet = totalDistance * 3.2808399;
            var yards = totalDistance * 1.0936133;
            var miles = totalDistance * 0.000621371192;

            var unit = " метры";
            var unit1 = " мили";
            var unit2 = " километры";
            var unit3 = " футы";
            var unit4 = " ярды";

            $('#map_tools').html('<div class="row"><div class="col-md-12" style="margin: 10px 0 20px 0; font-size: 16px"><strong>Общее расстояние: </strong>' + totalDistance.toFixed(0) + unit + ' | ' + km.toFixed(3) + unit2
                + ' | ' + feet.toFixed(0) + unit3 + ' | ' + yards.toFixed(0) + unit4 + ' | ' + miles.toFixed(3) + unit1 + '</div></div>');
        }


        function calculateArea(layer) {
            var totalArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);

            var km = totalArea / (1000 * 1000);
            var feet = totalArea * 10.7639104;
            var yards = totalArea * 1.19599005;
            var acres = totalArea * 0.000247105381;

            var unit = " метры&sup2;";
            var unit1 = " акров";
            var unit2 = " километры&sup2;";
            var unit3 = " футы&sup2;";
            var unit4 = " ярды&sup2;";

            $('#map_tools').html('<div class="row"><div class="col-md-12" style="margin: 10px 0 20px 0; font-size: 16px"><strong>Поверхность: </strong>' + totalArea.toFixed(0) + unit + ' | ' + km.toFixed(3) + unit2
                + ' | ' + feet.toFixed(0) + unit3 + ' | ' + yards.toFixed(0) + unit4 + ' | ' + acres.toFixed(3) + unit1 + '</div></div>');
        }
        
        function editMarkers() {
            if($("input[name=mode]:checked").val() == 'distance') {
                if(layer != null) {
                    edit_distance_flag = true;
                    polyline.disable();
                    layer.editing.enable();
                    $('#remove-last-marker').prop('disabled', true);
                    $('#clear-markers').prop('disabled', true);
                }
            }
            else {
                if(layer != null) {
                    edit_area_flag = true;
                    polygon.disable();
                    layer.editing.enable();
                    $('#remove-last-marker').prop('disabled', true);
                    $('#clear-markers').prop('disabled', true);
                }
            }
        }





/*let map = L.map('areaMap').setView([55.753605, 37.621094], 10)

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map)

let editableLayers = new L.FeatureGroup()
map.addLayer(editableLayers)

var options = {
  position: 'topright',
  draw: {
    polyline: true,
    polygon: {
      allowIntersection: false, 
      drawError: {
        color: '#e1e100',
        message: '<strong>Oh snap!<strong> you can\'t draw that!'  
      }
    },
    circle: true, 
    rectangle: true,
    marker: true
  },
  edit: {
    featureGroup: editableLayers,
    remove: true
  }
}

let drawControl = new L.Control.Draw(options)
map.addControl(drawControl)


map.on(L.Draw.Event.CREATED, function(e) {
  	let type = e.layerType,
		layer = e.layer

	if (type === 'circle') {
		
		let radius = e.layer.getRadius()
		area = (Math.PI) * (radius * radius)
		document.querySelector('#area').innerHTML = (area / 1000000).toFixed(2) + ' км <sup>2</sup>'

	}

  editableLayers.addLayer(layer)
  
})

map.on('draw:edited', function (e) {
    var layers = e.layers;
    layers.eachLayer(function (layer) {
		document.querySelector('#area').innerHTML = layer._radius + ' км <sup>2</sup>'
    })
})*/