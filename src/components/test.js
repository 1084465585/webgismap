import Map from "esri/Map"; 
import MapView from "esri/views/MapView"; 
import Graphic from "esri/Graphic"; 
import GraphicsLayer from "esri/layers/GraphicsLayer"; 
import webMercatorUtils from "esri/geometry/support/webMercatorUtils";   
async function kewlClickHandler(event) {      
    function initDrawLine();          
    function initDrawLine(Map, MapView, Graphic, GraphicsLayer, webMercatorUtils) 
    {            
        const map = view.map;            
        var graphicsLayer = new GraphicsLayer(); // here           map.add(graphicsLayer);          