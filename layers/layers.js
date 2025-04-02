var wms_layers = [];

var format_Casakmz_0 = new ol.format.GeoJSON();
var features_Casakmz_0 = format_Casakmz_0.readFeatures(json_Casakmz_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casakmz_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casakmz_0.addFeatures(features_Casakmz_0);
var lyr_Casakmz_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casakmz_0, 
                style: style_Casakmz_0,
                popuplayertitle: 'Casa.kmz',
                interactive: true,
                title: 'Casa.kmz'
            });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CasaCoreUtm_2 = new ol.format.GeoJSON();
var features_CasaCoreUtm_2 = format_CasaCoreUtm_2.readFeatures(json_CasaCoreUtm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasaCoreUtm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaCoreUtm_2.addFeatures(features_CasaCoreUtm_2);
var lyr_CasaCoreUtm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CasaCoreUtm_2, 
                style: style_CasaCoreUtm_2,
                popuplayertitle: 'CasaCoreUtm',
                interactive: true,
                title: '<img src="styles/legend/CasaCoreUtm_2.png" /> CasaCoreUtm'
            });

lyr_Casakmz_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_CasaCoreUtm_2.setVisible(true);
var layersList = [lyr_Casakmz_0,lyr_GoogleSatelliteHybrid_1,lyr_CasaCoreUtm_2];
lyr_Casakmz_0.set('fieldAliases', {});
lyr_CasaCoreUtm_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'N_Preg_Co': 'N_Preg_Co', 'N_Preg_Inc': 'N_Preg_Inc', 'Porc_Total': 'Porc_Total', 'Preg_Incor': 'Preg_Incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_Casakmz_0.set('fieldImages', {});
lyr_CasaCoreUtm_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'T_Pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'N_Preg_Co': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_Incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_Casakmz_0.set('fieldLabels', {});
lyr_CasaCoreUtm_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'no label', 'T_Pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Porc_Inc': 'inline label - always visible', 'N_Preg_Co': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_Incor': 'inline label - always visible', 'Nombre': 'no label', 'Video': 'inline label - always visible', });
lyr_CasaCoreUtm_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});