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

    $('.leaflet-marker-pane').on('click mouseup', () => {
        calculateArea(layer)
        calculateDistance(layer)
    })

})

function calculateArea(layer) {
    let totalArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0])

    $('#mapCalculatedArea').html(`<div class="row"><div class="col-md-12"><strong>Поверхность: </strong>  ${totalArea.toFixed(0)}  метры&sup2 </div></div>`)
}

function calculateDistance(layer) {

    let tempLatLng = null,
        totalDistance = 0.00000

    $.each(layer._latlngs[0], function(i, latlng){

        if(tempLatLng === null){
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
                "lat": 55.73847906743718,
                "lng": 37.58663177490235
            },
            {
                "lat": 55.74683756670531,
                "lng": 37.58268356323243
            },
            {
                "lat": 55.75900974974332,
                "lng": 37.58482933044434
            },
            {
                "lat": 55.763887217224756,
                "lng": 37.58869171142579
            },
            {
                "lat": 55.769391744659096,
                "lng": 37.596244812011726
            },
            {
                "lat": 55.772481665055466,
                "lng": 37.60491371154786
            },
            {
                "lat": 55.77330238399042,
                "lng": 37.61229515075684
            },
            {
                "lat": 55.773447214949755,
                "lng": 37.62534141540528
            },
            {
                "lat": 55.77224027384463,
                "lng": 37.63667106628419
            },
            {
                "lat": 55.76857094338256,
                "lng": 37.64903068542481
            },
            {
                "lat": 55.763935505931954,
                "lng": 37.65606880187989
            },
            {
                "lat": 55.75794725016568,
                "lng": 37.657442092895515
            },
            {
                "lat": 55.75263431805921,
                "lng": 37.655725479125984
            },
            {
                "lat": 55.74335910243774,
                "lng": 37.654438018798835
            },
            {
                "lat": 55.741378171712114,
                "lng": 37.652721405029304
            },
            {
                "lat": 55.731472009614095,
                "lng": 37.637701034545906
            }
        ]
    ]
}