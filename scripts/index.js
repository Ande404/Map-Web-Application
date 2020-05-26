require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/DistanceMeasurement2D",
    "esri/widgets/AreaMeasurement2D",
    "esri/widgets/Directions",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/widgets/Compass"
], function (Map, MapView, DistanceMeasurement2D, AreaMeasurement2D, Directions, SimpleMarkerSymbol, Compass) {

    var activeWidget = null;

    var map = new Map({
        basemap: "dark-gray-vector"//  "streets-night-vector"
    });

    var view = new MapView({
        scale: 123456789,
        container: "viewDiv",
        map: map,
        center: [-73.935242, 40.730610],//new york
        zoom: 12,
    });

    var compassWidget = new Compass({
        view: view
    });

    // Add the Compass widget to the top left corner of the view
    view.ui.add(compassWidget, "top-left");

    // add the toolbar for the measurement widgets
    view.ui.add("topbar", "top-left");

    document.getElementById("distanceButton").addEventListener("click", function () {
        setActiveWidget(null);
        if (!this.classList.contains("active")) {
            setActiveWidget("distance");
        } else {
            setActiveButton(null);
        }
    });

    document.getElementById("areaButton").addEventListener("click", function () {
        setActiveWidget(null);
        if (!this.classList.contains("active")) {
            setActiveWidget("area");
        } else {
            setActiveButton(null);
        }
    });

    function setActiveWidget(type) {
        switch (type) {
            case "distance":
                activeWidget = new DistanceMeasurement2D({
                    view: view
                });

                // skip the initial 'new measurement' button
                activeWidget.viewModel.newMeasurement();

                view.ui.add(activeWidget, "top-left");
                setActiveButton(document.getElementById("distanceButton"));
                break;
            case "area":
                activeWidget = new AreaMeasurement2D({
                    view: view
                });

                // skip the initial 'new measurement' button
                activeWidget.viewModel.newMeasurement();

                view.ui.add(activeWidget, "top-left");
                setActiveButton(document.getElementById("areaButton"));
                break;
            case null:
                if (activeWidget) {
                    view.ui.remove(activeWidget);
                    activeWidget.destroy();
                    activeWidget = null;
                }
                break;
        }
    }

    function setActiveButton(selectedButton) {
        // focus the view to activate keyboard shortcuts for sketching
        view.focus();
        var elements = document.getElementsByClassName("active");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        if (selectedButton) {
            selectedButton.classList.add("active");
        }
    }

    var directionsWidget = new Directions({
        view: view,
        // Point the URL to a valid route service that uses an
        // ArcGIS Online hosted service proxy instead of the default service
        routeServiceUrl:
            "https://utility.arcgis.com/usrsvcs/appservices/6xHeUoKAuQPhjNP8/rest/services/World/Route/NAServer/Route_World"
        //"https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World"
    });

    // Add the Directions widget to the top right corner of the view
    view.ui.add(directionsWidget, {
        position: "top-right"
    });

    //symbol staff
    function createStopSymbol(color, size) {
        return new SimpleMarkerSymbol({
            style: "simple-marker",
            size: size,
            outline: {
                width: "2px",
                color: "white"
            },
            color: color
        });
    }

    // Route symbol
    directionsWidget.routeSymbol.color = "#8636bc";

});