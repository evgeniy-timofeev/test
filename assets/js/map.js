let mymap = null,
    default_lat = 55.753605,
    default_lng = 37.621094,
    default_zoom = 10,
    map_div = "areaMap",
    layer = null,
    edit_area_flag = false,
    osm

$(document).ready(function () {
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib})

    mymap = L.map(map_div, {center: new L.LatLng(default_lat, default_lng), zoom: default_zoom, layers: [osm]})
    let drawnItems = L.featureGroup().addTo(mymap)

    L.control.scale({
        position: 'bottomleft'
    }).addTo(mymap)


    layer = L.polygon(coordsPolygon(), {color: 'red'})

    drawnItems.addLayer(layer)

    editMarkers()
    calculateArea(layer)
    calculateDistance(layer)

    let isCapturedMarker = false

    $(".leaflet-marker-pane").on('mousedown', () => {
        isCapturedMarker = true
    })

    $('#areaMap').on('mouseup', (e) => {
        if(isCapturedMarker) {
            calculateArea(layer)
            calculateDistance(layer)
            isCapturedMarker = false
        }
    })
})

function calculateArea(layer) {
    let totalArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0])

    $('#mapCalculatedArea').html(`<div class="row"><div class="col-md-12"><strong>Поверхность: </strong>  ${totalArea.toFixed(0)}  метры&sup2 </div></div>`)
}

function calculateDistance(layer) {

    let tempLatLng = null,
        totalDistance = 0.00000

    $.each(layer._latlngs[0], function (i, latlng) {

        if (tempLatLng === null) {
            tempLatLng = latlng
            return
        }

        totalDistance += tempLatLng.distanceTo(latlng)
        tempLatLng = latlng
    })

    $('#mapCalculatedPerimeter').html(`<div class="row"><div class="col-md-12"><strong>Периметр: </strong> ${totalDistance.toFixed(0)}  метров </div></div>`)
}

function editMarkers() {
    if (layer != null) {
        edit_area_flag = true
        layer.editing.enable()
    }
}


function coordsPolygon() {
    return [
        [
            {
                "lat": 55.73040875990123,
                "lng": 37.63083457946778
            },
            {
                "lat": 55.72978046236842,
                "lng": 37.62516975402833
            },
            {
                "lat": 55.72963546919416,
                "lng": 37.6183032989502
            },
            {
                "lat": 55.72992545500425,
                "lng": 37.61169433593751
            },
            {
                "lat": 55.73258355789721,
                "lng": 37.60311126708985
            },
            {
                "lat": 55.73461326005181,
                "lng": 37.597017288208015
            },
            {
                "lat": 55.738370346837335,
                "lng": 37.58611679077149
            },
            {
                "lat": 55.74668055937608,
                "lng": 37.582426071167
            },
            {
                "lat": 55.75286375507843,
                "lng": 37.58311271667481
            },
            {
                "lat": 55.759142560155176,
                "lng": 37.58457183837891
            },
            {
                "lat": 55.764309741384935,
                "lng": 37.58834838867188
            },
            {
                "lat": 55.76735178017714,
                "lng": 37.59238243103028
            },
            {
                "lat": 55.76971764625502,
                "lng": 37.59590148925782
            },
            {
                "lat": 55.77140746269181,
                "lng": 37.60019302368165
            },
            {
                "lat": 55.77280754081879,
                "lng": 37.60491371154786
            },
            {
                "lat": 55.77353169942752,
                "lng": 37.61238098144532
            },
            {
                "lat": 55.7737248061176,
                "lng": 37.61916160583497
            },
            {
                "lat": 55.77386963550732,
                "lng": 37.62268066406251
            },
            {
                "lat": 55.77357997618973,
                "lng": 37.62731552124024
            },
            {
                "lat": 55.772469595530424,
                "lng": 37.63667106628419
            },
            {
                "lat": 55.77068326461718,
                "lng": 37.643194198608406
            },
            {
                "lat": 55.768655438429555,
                "lng": 37.64954566955567
            },
            {
                "lat": 55.76450289376177,
                "lng": 37.656412124633796
            },
            {
                "lat": 55.76107429682915,
                "lng": 37.657699584960945
            },
            {
                "lat": 55.757645398414795,
                "lng": 37.65778541564942
            },
            {
                "lat": 55.752767150182194,
                "lng": 37.65615463256837
            },
            {
                "lat": 55.743347023896575,
                "lng": 37.65512466430665
            },
            {
                "lat": 55.74218746653597,
                "lng": 37.654438018798835
            },
            {
                "lat": 55.74054470129099,
                "lng": 37.652721405029304
            },
            {
                "lat": 55.73576096158144,
                "lng": 37.64551162719727
            },
            {
                "lat": 55.731472009614095,
                "lng": 37.637701034545906
            }
        ]
    ]
}