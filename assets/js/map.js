let mymap = null,
    default_lat = 55.753605,
    default_lng = 37.621094,
    default_zoom = 10,
    map_div = "areaMap",
    layer = null,
    polygon,
    edit_area_flag = false,
    hybrid,
    satellite,
    osm,
    terrain

$(document).ready(function () {
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib})

    hybrid = L.esri.basemapLayer('ImageryLabels')
    satellite = L.esri.basemapLayer('Imagery')
    let sHybrid = L.layerGroup([satellite, hybrid])
    terrain = L.esri.basemapLayer('Topographic')

    mymap = L.map(map_div, {center: new L.LatLng(default_lat, default_lng), zoom: default_zoom, layers: [osm]})
    let drawnItems = L.featureGroup().addTo(mymap)

    let baseLayers = {
        "Satellite": satellite,
        "Hybrid": sHybrid,
        "Terrain": terrain,
        "Map": osm
    }
    L.control.layers(baseLayers, {}, {position: 'topright', collapsed: true}).addTo(mymap)


    L.control.scale({
        position: 'bottomleft'
    }).addTo(mymap)


    layer = L.polygon(coordsPolygon(), {color: 'red'})

    drawnItems.addLayer(layer)

    create_polygon()
    editMarkers()
})


function create_polygon(calculated = false) {
    polygon = new L.Draw.Polygon(mymap, {})
    polygon.enable()
}


function calculateResult() {

    if (edit_area_flag) {
        layer.editing.disable()
        edit_area_flag = false

        calculateArea(layer)
        create_polygon(true)
    } else {
        polygon.completeShape()
        $('#edit-markers').prop('disabled', false)
    }

}

function calculateArea(layer) {
    let totalArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0])

    let km = totalArea / (1000 * 1000)
    let feet = totalArea * 10.7639104
    let yards = totalArea * 1.19599005
    let acres = totalArea * 0.000247105381

    let unit = " метры&sup2"
    let unit1 = " акров"
    let unit2 = " километры&sup2;"
    let unit3 = " футы&sup2;"
    let unit4 = " ярды&sup2;"

    $('#map_tools').html('<div class="row"><div class="col-md-12" style="margin: 10px 0 20px 0; font-size: 16px"><strong>Поверхность: </strong>' + totalArea.toFixed(0) + unit + ' | ' + km.toFixed(3) + unit2
        + ' | ' + feet.toFixed(0) + unit3 + ' | ' + yards.toFixed(0) + unit4 + ' | ' + acres.toFixed(3) + unit1 + '</div></div>');
}

function editMarkers() {
    if (layer != null) {
        edit_area_flag = true
        polygon.disable()
        layer.editing.enable()
    }
}


function coordsPolygon() {
    return [
        [
            {
                "lat": 55.76981420916759,
                "lng": 37.596244812011726
            },
            {
                "lat": 55.785454243141885,
                "lng": 37.56620407104493
            },
            {
                "lat": 55.791631292435824,
                "lng": 37.57410049438477
            },
            {
                "lat": 55.79225859421427,
                "lng": 37.59547233581544
            },
            {
                "lat": 55.79317540171734,
                "lng": 37.61555671691895
            },
            {
                "lat": 55.79249986143896,
                "lng": 37.62817382812501
            },
            {
                "lat": 55.79177605528139,
                "lng": 37.63263702392579
            },
            {
                "lat": 55.79177605528139,
                "lng": 37.63538360595704
            },
            {
                "lat": 55.79380267862738,
                "lng": 37.64654159545899
            },
            {
                "lat": 55.7932719065149,
                "lng": 37.652206420898445
            },
            {
                "lat": 55.791534783573184,
                "lng": 37.655467987060554
            },
            {
                "lat": 55.78632294988492,
                "lng": 37.662162780761726
            },
            {
                "lat": 55.78183442320686,
                "lng": 37.6688575744629
            },
            {
                "lat": 55.779131405017544,
                "lng": 37.67477989196778
            },
            {
                "lat": 55.77555927195693,
                "lng": 37.68301963806153
            },
            {
                "lat": 55.77300065109664,
                "lng": 37.68602371215821
            },
            {
                "lat": 55.76981420916759,
                "lng": 37.68877029418946
            },
            {
                "lat": 55.76590321987808,
                "lng": 37.686882019042976
            },
            {
                "lat": 55.7624747460818,
                "lng": 37.68482208251954
            },
            {
                "lat": 55.75957720924989,
                "lng": 37.68482208251954
            },
            {
                "lat": 55.757645398414795,
                "lng": 37.68653869628907
            },
            {
                "lat": 55.755133901266255,
                "lng": 37.69203186035157
            },
            {
                "lat": 55.75126974369615,
                "lng": 37.69649505615235
            },
            {
                "lat": 55.74759843942743,
                "lng": 37.69855499267579
            },
            {
                "lat": 55.743926789655596,
                "lng": 37.697868347167976
            },
            {
                "lat": 55.73870858770892,
                "lng": 37.69718170166016
            },
            {
                "lat": 55.734649503774015,
                "lng": 37.69992828369141
            },
            {
                "lat": 55.73078331708113,
                "lng": 37.705421447753906
            },
            {
                "lat": 55.727303421663756,
                "lng": 37.71057128906251
            },
            {
                "lat": 55.72440327187514,
                "lng": 37.712631225585945
            },
            {
                "lat": 55.72208299694953,
                "lng": 37.70954132080079
            },
            {
                "lat": 55.71918245941694,
                "lng": 37.69752502441407
            },
            {
                "lat": 55.71434775146887,
                "lng": 37.68207550048829
            },
            {
                "lat": 55.71183346683362,
                "lng": 37.67246246337891
            },
            {
                "lat": 55.70603065389746,
                "lng": 37.66387939453126
            },
            {
                "lat": 55.70370928740704,
                "lng": 37.657699584960945
            },
            {
                "lat": 55.70351583397485,
                "lng": 37.649459838867195
            },
            {
                "lat": 55.70545032520288,
                "lng": 37.62611389160157
            },
            {
                "lat": 55.705256880389435,
                "lng": 37.62062072753907
            },
            {
                "lat": 55.70216163313513,
                "lng": 37.615470886230476
            },
            {
                "lat": 55.70080738536962,
                "lng": 37.61032104492188
            },
            {
                "lat": 55.70699784923612,
                "lng": 37.586288452148445
            },
            {
                "lat": 55.712607110110724,
                "lng": 37.57873535156251
            },
            {
                "lat": 55.71782880151228,
                "lng": 37.568778991699226
            },
            {
                "lat": 55.72130954133751,
                "lng": 37.55744934082032
            },
            {
                "lat": 55.72440327187514,
                "lng": 37.55023956298829
            },
            {
                "lat": 55.73232983770723,
                "lng": 37.54337310791016
            },
            {
                "lat": 55.73426290233542,
                "lng": 37.54268646240235
            },
            {
                "lat": 55.73696903199785,
                "lng": 37.53753662109376
            },
            {
                "lat": 55.7398682484427,
                "lng": 37.53479003906251
            },
            {
                "lat": 55.75126974369615,
                "lng": 37.53204345703126
            },
            {
                "lat": 55.75320187033113,
                "lng": 37.53170013427735
            },
            {
                "lat": 55.758418134231974,
                "lng": 37.53341674804688
            },
            {
                "lat": 55.76266790754882,
                "lng": 37.53513336181641
            },
            {
                "lat": 55.767303495700936,
                "lng": 37.53753662109376
            },
            {
                "lat": 55.770586703857326,
                "lng": 37.54302978515626
            },
            {
                "lat": 55.773483422605516,
                "lng": 37.5454330444336
            },
            {
                "lat": 55.77406274052312,
                "lng": 37.55401611328126
            },
            {
                "lat": 55.7767661102896,
                "lng": 37.5564193725586
            },
            {
                "lat": 55.77985544613229,
                "lng": 37.55813598632813
            },
            {
                "lat": 55.78352371436103,
                "lng": 37.56397247314454
            },
            {
                "lat": 55.785309456801485,
                "lng": 37.56596803665162
            },
            {
                "lat": 55.76945209701204,
                "lng": 37.59613752365113
            },
            {
                "lat": 55.76604807832995,
                "lng": 37.59006500244141
            },
            {
                "lat": 55.761702090644924,
                "lng": 37.586288452148445
            },
            {
                "lat": 55.75754880536109,
                "lng": 37.58457183837891
            },
            {
                "lat": 55.75320187033113,
                "lng": 37.58337020874024
            },
            {
                "lat": 55.7487578359952,
                "lng": 37.582511901855476
            },
            {
                "lat": 55.745376166366704,
                "lng": 37.583026885986335
            },
            {
                "lat": 55.73841866714134,
                "lng": 37.58611679077149
            },
            {
                "lat": 55.72981671057788,
                "lng": 37.61186599731446
            },
            {
                "lat": 55.729623386405315,
                "lng": 37.618217468261726
            },
            {
                "lat": 55.72981671057788,
                "lng": 37.62542724609376
            },
            {
                "lat": 55.7309766355099,
                "lng": 37.63641357421876
            },
            {
                "lat": 55.73387629706785,
                "lng": 37.64328002929688
            },
            {
                "lat": 55.7398682484427,
                "lng": 37.651176452636726
            },
            {
                "lat": 55.74189757181189,
                "lng": 37.654438018798835
            },
            {
                "lat": 55.7517527843269,
                "lng": 37.65598297119141
            },
            {
                "lat": 55.75571349188569,
                "lng": 37.657699584960945
            },
            {
                "lat": 55.76363370053084,
                "lng": 37.65684127807618
            },
            {
                "lat": 55.76826917386254,
                "lng": 37.649974822998054
            },
            {
                "lat": 55.77213164731203,
                "lng": 37.637443542480476
            },
            {
                "lat": 55.77319376041775,
                "lng": 37.62903213500977
            },
            {
                "lat": 55.773483422605516,
                "lng": 37.62285232543946
            },
            {
                "lat": 55.77357997618973,
                "lng": 37.61495590209962
            },
            {
                "lat": 55.773097205876795,
                "lng": 37.60671615600587
            },
            {
                "lat": 55.7717454171889,
                "lng": 37.60087966918946
            },
            {
                "lat": 55.76958487185963,
                "lng": 37.59660959243775
            }
        ]
    ]
}