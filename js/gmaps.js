//const findPeople = require('../data/firebase_push.js').findPeople

var map;
var sf = {lat: 37.7749, lng: -122.4194};

/**
 * The CenterControl adds a control to the map that recenters the map on
 * sf.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
 var map, infoWindow;

 var markers = [
    {
        "title": 'CIRCA',
        "address": "2384 Franklin St",
        "phone": "+1 301-483-3448",
        "website": "http://circa.com",
        "lat": 38.8870,
        "lng": -77.0944,
        "place_id": "ChIJVz9MKIS2t4kRoYbQXABqYzQ",
        "num_people": 0,
        "description": 'New American bistro with creative fare, an active bar scene & outdoor seating.',
        "review": "Great restaurant. The Green Pig Bistro has a really cool urban/rustic vibe that makes it feel nice to eat at. The Angus Bacon Cheese burger had an absolutely wonderful flavor with the bacon mixed into the Patty. The fries were perfectly salted and there were some really nice crunchy ones but also some that weren't if you like that. The meatball sandwich was one of the better meatball sandwiches I have had, which is saying a lot because meatball sandwiches aren't my favorite."
    },
    {
        "title": 'Giant Food',
        "address": "3784 Jeremy St.",
        "phone": "+1 301-484-0380",
        "website": "http://giantfood.com",
        "lat": 38.8856536,
        "lng": -77.10297880000002,
        "place_id": "ChIJmXMR0ym0t4kRNT_fHDYv6xg",
        "num_people": 2,
        "images": "<nav class=\"level\"><img src=\"images/max.jpg\" class=\"pal-headshot\">",
        "description": 'American supermarket chain with 169 stores and 159 full service pharmacies located in Delaware, Maryland, Pennsylvania, Virginia, and Washington, D.C',
        "review":"My wife and I just enjoyed dinner at Giant Food with out of town family. Our 5:30pm reservation allowed us to soak up therustic-chic atmosphere as the restaurant came to life for the evening. Our server was attentive and pleasant."
    },
    {
        "title": 'Lyon Hall',
        "address": "2849 Wholesomememes St.",
        "phone": "+1 307-480-3029",
        "website": "http://lyonhall.com",
        "lat": 38.8853862,
        "lng": -77.09520709999998,
        "place_id": "ChIJG_qeQIS2t4kRtvKx8qLclBs",
        "num_people": 3,
        "images": "<nav class=\"level\"><img src=\"images/amy.jpg\" class=\"pal-headshot\"><nav class=\"level\"><img src=\"images/max.jpg\" class=\"pal-headshot\">",
        "description": 'Trendy French-German brasserie offering a meat-heavy menu & a unique beer selection.',
        "review": "Fantastic fine dining with an ever-changing menu. Upscale cocktails and inventive starters are the stars of the dining experience. Sharing dishes is recommended, as are reservations. Dessert does not disappoint, although it does add up on the final bill; expect to shell out $75-$100 per person for a full meal with drinks."
    },
    {
        "title": 'Green Pig Bistro',
        "address": "3829 Sweating St.",
        "phone": "+1 284-250-0472",
        "website": "http://greenpigbistro.com",
        "lat": 38.8856541,
        "lng": -77.09261170000002,
        "place_id": "ChIJi8J3wIW2t4kR8hSSyF7i6xE",
        "num_people": 1,
        "images": "<nav class=\"level\"><img src=\"images/anon.jpg\" class=\"pal-headshot\">",
        "description": 'Scot Harlans nose-to-tail ethos turns out American-French dishes in a modern, kitschy spot.',
        "review": "First time there and the food was some of the best we’ve had since moving to the area! Very flavorful! Our waitress was awesome. Will def be back."
    },
    {
        "title": 'The Cheesecake Factory',
        "address": "2384 Melida St.",
        "phone": "+1 390-349-2759",
        "website": "http://cheesecakes.com",
        "lat": 38.8879346,
        "lng": -77.09348239999997,
        "place_id": "EiVXaWxzb24gQmx2ZCwgQXJsaW5ndG9uLCBWQSAyMjIwMSwgVVNB",
        "num_people": 0,
        "description": 'Rotating menu of seasonal American dishes alongside international wines in an upscale setting.',
        "review": "Not a lunch spot for vegetarians. Very limited menu. Not being a fan of mushrooms, the only choices were fried pimento cheese balls and a salad of mixed greens with a few slivers of radish (I passed on the raw onions). My friends enjoyed their bacon burgers (the bacon is ground into the beef)."
    },
    {
        "title": 'Whole Food Markets',
        "address": "0268 Hamsters St.",
        "phone": "+1 307-502-5428",
        "website": "http://foodmarkets.com",
        "lat": 38.88924,
        "lng": -77.09089599999999,
        "place_id": "ChIJYXu_IIa2t4kRuU7OdddDn3Q",
        "num_people": 2,
        "images": "<nav class=\"level\"><img src=\"images/omkar.png\" class=\"pal-headshot\"><nav class=\"level\"><img src=\"images/max.jpg\" class=\"pal-headshot\">",
        "description": 'Eco-minded chain with natural & organic grocery items, housewares & other products (most sell wine).',
        "review": "Whole Food Markets is a great place to buy orchids and amazing eggs, I love the beanstalk. My and my children go there all the time on Sundays and enojy the sunshine rising."
    },
    {
        "title": 'The Container Store',
        "address": "2849 Amy St.",
        "phone": "+1 240-429-0582",
        "website": "http://containerstore.com",
        "lat": 38.8875227,
        "lng": -77.09207229999998,
        "place_id": " ChIJYTziboa2t4kRUE7mZOR1bEo",
        "num_people": 2,
        "images": "<nav class=\"level\"><img src=\"images/qt.jpg\" class=\"pal-headshot\"><nav class=\"level\"><img src=\"images/omkar.png\" class=\"pal-headshot\">",
        "description": 'Chain retailer specializing in storage & organization supplies, including closet & shelving systems.',
        "review": "Today I went to the Container Store, it's a big big store with ocntainers and lots oflobsters to eat with crabs and i loved it."
    },
    {
        "title": 'Mr Tire Auto Service Centers',
        "address": "7865 Pirates St.",
        "phone": "+1 502-104-5038",
        "website": "http://tireautoservice.com",
        "lat": 38.8960347,
        "lng": -77.13244750000001,
        "place_id": "ChIJ48ZQt0y0t4kRFzUGTP-yH34",
        "num_people": 0,
        "description": 'Great autoservices for your car',
        "review": "This one time I had a flat tire and these bastards couldn't fix my tire. In fact, they amde all my tires flat!"
    },
    {
        "title": 'Arlington Rooftop Bar & Grill',
        "address": "0826 Kyle St.",
        "phone": "+1 504-294-2954",
        "website": "http://rooftopbargrill.com",
        "lat": 38.8902773,
        "lng": -77.0881602,
        "place_id": "ChIJR-yfSoi2t4kRasSlSd4RHho",
        "num_people": 0,
        "description": 'Sprawling bar & grill with an upscale pub menu, signature cocktails, TV sports & live music.',
        "review": "When I went to this place, I just wanted to be full, I love this place, I love the food, and I love the people. Goddamn this place."
    },
    {
        "title": 'Cava Mezze Clarendon',
        "address": "9274 Maxwell St.",
        "phone": "+1 301-384-2604",
        "website": "http://circa.com",
        "lat": 38.8902773,
        "lng": -77.0881602,
        "place_id": 'ChIJ5Y-6fYa2t4kRPcvWjkDJoTU',
        "num_people": 3,
        "images": "<nav class=\"level\"><img src=\"images/amy.jpg\" class=\"pal-headshot\"><nav class=\"level\"><img src=\"images/anon.jpg\" class=\"pal-headshot\">",
        "description": 'Mini-chain branch for tapas-style Greek dining, serving up classic eats in an industrial setting.',
        "review": "I like to eat at Cava because it's really good and fulfilling to eat here. Kyle loves to eat here."
    },


    ];

       function initMap() {
         map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: -34.397, lng: 150.644},
           zoom: 15
         });
         infoWindow = new google.maps.InfoWindow;

         // Try HTML5 geolocation.
         if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
             var pos = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
             };

             infoWindow.setPosition(pos);
             // infoWindow.setContent('Location found.');
             // infoWindow.open(map);
             map.setCenter(pos);
             /*
             createMarker(pos["lat"], pos["lng"]);
*/
             for (var i = 0; i < markers.length; i++) {
               var data = markers[i];

               createMarker(markers[i].lat, markers[i].lng);
               console.log(markers[i].lat);
               console.log(markers[i].lng);

             //Attach click event to the marker.
             (function (marker, data) {
                 google.maps.event.addListener(marker, "click", function (e) {
                     //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                     if (data.num_people > 0){
                         infoWindow.setContent("<div style = 'width:200px;min-height:40px'><b>" + data.num_people + " Friends were here recently!</b> " + data.images);
                     }
                     else {
                         infoWindow.setContent("<div style = 'width:200px;min-height:40px'><b>" + " No friends here :(</b> ");
                     }
                     infoWindow.open(map, marker);

                     console.log("hello");
                     setInfoPanelForMarker(data);
                    function setInfoPanelForMarker(data){
                      document.getElementById('place-title').innerHTML = data['title']
                      document.getElementById('place-subtitle').innerHTML = data['description']
                      document.getElementById('place-address').innerHTML = data['address']
                      document.getElementById('place-phone').innerHTML = data['phone']
                      document.getElementById('place-website').innerHTML = data['website']
                      document.getElementById('place-review').innerHTML = data['review']
                    }

                 });
             })(marker, data);
         }

           }, function() {
             handleLocationError(true, infoWindow, map.getCenter());
           });
         }
         else {
           // Browser doesn't support Geolocation
           handleLocationError(false, infoWindow, map.getCenter());
         }




       }

       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
         infoWindow.setPosition(pos);
         infoWindow.setContent(browserHasGeolocation ?
                               'Error: The Geolocation service failed.' :
                               'Error: Your browser doesn\'t support geolocation.');
         infoWindow.open(map);
       }

       // Create marker function
       function createMarker(lat, lng) {
           marker = new google.maps.Marker({
               map: map,
               animation: google.maps.Animation.DROP,
               position: {lat, lng}
           });
       }

/*
       function initAutocomplete() {
         var map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: -33.8688, lng: 151.2195},
           zoom: 13,
           mapTypeId: 'roadmap'
         });

         // Create the search box and link it to the UI element.
         var input = document.getElementById('pac-input');
         var searchBox = new google.maps.places.SearchBox(input);
         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

         // Bias the SearchBox results towards current map's viewport.
         map.addListener('bounds_changed', function() {
           searchBox.setBounds(map.getBounds());
         });

         var markers = [];
         // Listen for the event fired when the user selects a prediction and retrieve
         // more details for that place.
         searchBox.addListener('places_changed', function() {
           var places = searchBox.getPlaces();

           if (places.length == 0) {
             return;
           }

           // Clear out the old markers.
           markers.forEach(function(marker) {
             marker.setMap(null);
           });
           markers = [];

           // For each place, get the icon, name and location.
           var bounds = new google.maps.LatLngBounds();
           places.forEach(function(place) {
             if (!place.geometry) {
               console.log("Returned place contains no geometry");
               return;
             }
             var icon = {
               url: place.icon,
               size: new google.maps.Size(71, 71),
               origin: new google.maps.Point(0, 0),
               anchor: new google.maps.Point(17, 34),
               scaledSize: new google.maps.Size(25, 25)
             };

             // Create a marker for each place.
             markers.push(new google.maps.Marker({
               map: map,
               icon: icon,
               title: place.name,
               position: place.geometry.location
             }));

             if (place.geometry.viewport) {
               // Only geocodes have viewport.
               bounds.union(place.geometry.viewport);
             } else {
               bounds.extend(place.geometry.location);
             }
           });
           map.fitBounds(bounds);
         });
       }

      */
