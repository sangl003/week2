
		var openstrtmap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
		opencycmap = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png');


		var map = L.map('map-container');		
		map.setView([44.971724, -93.243239], 18);		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		}).addTo(map);
		//});
		
		var basemaps =
		{
			"Open Street Maps" : openstrtmap,
			"Open Cycle Map": opencycmap
		};
		
		L.control.layers(basemaps).addTo(map);
		
		console.log($("#map-container"));

	$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson",function(data){new L.GeoJSON(data).addTo(map)});
	
    $("#redbox").click(function(){alert("Hi!How are you!");});
	
	function Changemap(){
		$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson",function(data)
		{
			new L.GeoJSON(data).addTo(map);
			alert("Layer added");
		}
		)
	};
	
	function displaydate(){
			alert("Time is "+Date());
	}
	
	$.getJSON("http://opendata.minneapolismn.gov/datasets/cb8d4b1dbad0470380e5f46f1e75e962_0.geojson",function(data)
		{
			new L.GeoJSON(data).addTo(map);
		});
	
	
	