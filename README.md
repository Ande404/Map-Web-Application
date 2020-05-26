# Map-Web-Application

This is a map web app that provides driving directions between 2 locations and provides spatial analysis tools. i.e Calculating area between a set of user defined points and calculating the distance between 2 points on the map.

## Getting Started

- Download the application and run the index.html file in any web browser apart from Internet Explorer.
- To use the directions widget, create an ArcGIS for Developers account and generate an endpoint using the service proxy.
- Go to the javaScript file and replace the routeServiceUrl with the generated endpoint.

## Directions Widget Example

![Directions](/images/directions.png)

It is important to note that the "best route can be the quickest route for a given time of day considering the traffic conditions applicable during that time, or it can be the shortest route that minimizes the travel distance." Therefore sometimes the routing service gives a route that is longer than expected. Click [Route Service](https://developers.arcgis.com/rest/network/api-reference/route-synchronous-service.htm) to learn more about how the service works.


## Area Widget Example

![Area](/images/Area.png)

## Distance Widget Example

![Distance](/images/distance.png)

## Changing the Base Map

To change the base map, go to the JS file and replace the basemap values with any one of the follwing values below
* "gray-vector"
* "streets-night-vector"
* "streets-navigation-vector"

To see more base map layers read [ArcGIS web maps](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html)

## Built With

* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) - The web framework used

## Authors

* **Andrew Luwaga**

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE) file for details

