'use strict'
var app = angular.module('myApp', ['infinite-scroll']);

angular.module('myApp').controller('userController', ['$scope', 'userService',
    function ($scope, userService) {

        var self = this;

        var fixmeTop = 400;
        $(window).scroll(function () {
            var currentScroll = $(window).scrollTop();
            if (currentScroll >= fixmeTop) {
                $('.fixTop').css({
                    position: 'fixed',
                    height: '100%',
                    width: '18%'
                });
            } else {
                $('.fixTop').css({
                    position: 'relative',
                    top: 0,
                    width: '100%'
                });
            }
        });

        self.getMoreData = function () {
            var last = self.users[self.users.length - 1];
            for (var i = 1; i <= 8; i++) {
                self.users.push(self.users[i]);
            }
        }

        self.users =
            [{
                "img":"fb.png",
                "id": 1,
                "first_name": "Jody",
                "last_name": "McSperron",
                "email": "jmcsperron0@ycombinator.com",
                "gender": "Male",
                "ip_address": "104.100.213.4"
            }, {
                "img":"fb.png",
                "id": 2,
                "first_name": "Ashlin",
                "last_name": "Sharram",
                "email": "asharram1@amazon.co.uk",
                "gender": "Male",
                "ip_address": "122.145.90.253"
            }, {
                "img":"fb.png",
                "id": 3,
                "first_name": "Kimmi",
                "last_name": "Francescotti",
                "email": "kfrancescotti2@google.pl",
                "gender": "Female",
                "ip_address": "143.65.116.229"
            }, {
                "img":"fb.png",
                "id": 4,
                "first_name": "Waite",
                "last_name": "Alelsandrovich",
                "email": "walelsandrovich3@skyrock.com",
                "gender": "Male",
                "ip_address": "221.106.182.5"
            }, {
                "img":"fb.png",
                "id": 5,
                "first_name": "Lenci",
                "last_name": "Myrick",
                "email": "lmyrick4@sun.com",
                "gender": "Male",
                "ip_address": "15.227.167.224"
            }, {
                "img":"fb.png",
                "id": 6,
                "first_name": "Ariela",
                "last_name": "Dyball",
                "email": "adyball5@google.com.hk",
                "gender": "Female",
                "ip_address": "112.248.56.154"
            }, {
                "img":"fb.png",
                "id": 7,
                "first_name": "Yolanthe",
                "last_name": "Beecraft",
                "email": "ybeecraft6@cornell.edu",
                "gender": "Female",
                "ip_address": "126.20.74.191"
            }, {
                "img":"fb.png",
                "id": 8,
                "first_name": "Darsie",
                "last_name": "Joslin",
                "email": "djoslin7@blogspot.com",
                "gender": "Female",
                "ip_address": "107.95.10.80"
            }, {
                "img":"fb.png",
                "id": 9,
                "first_name": "Silvanus",
                "last_name": "Barfford",
                "email": "sbarfford8@dmoz.org",
                "gender": "Male",
                "ip_address": "232.58.196.204"
            }, {
                "img":"fb.png",
                "id": 10,
                "first_name": "Nessie",
                "last_name": "Asaaf",
                "email": "nasaaf9@t-online.de",
                "gender": "Female",
                "ip_address": "15.110.151.101"
            }];

        self.firstColumn = [
            {
                "href": "http://www.google.com",
                "label": "News Feed"
            },
            {
                "href": "http://www.google.com",
                "label": "Messenger"
            },
            {
                "href": "http://www.google.com",
                "label": "Groups"
            },
            {
                "href": "http://www.google.com",
                "label": "Events"
            },
            {
                "href": "http://www.google.com",
                "label": "Pages"
            },
            {
                "href": "http://www.google.com",
                "label": "Photos"
            },
            {
                "href": "http://www.google.com",
                "label": "Vieos"
            },
            {
                "href": "http://www.google.com",
                "label": "Manage Apps"
            },
            {
                "href": "http://www.google.com",
                "label": "Pages Feed"
            },
            {
                "href": "http://www.google.com",

                "label": "Poke"
            }
        ]

        self.thirdColumn = [
            {
                "text": "No fabric travels better from cool to warm weather than linen. And from shoulders to overhead compartments for that matter! Long transits call for this top pick from ARROW: a serene blue, patterned linen blazer. Upgrade your travel style with a pristine polo and sleek chinos and look fresh from take-off to touch down.",
                "title": "Title"
            }, {
                "text": "No fabric travels better from cool to warm weather than linen. And from shoulders to overhead compartments for that matter! Long transits call for this top pick from ARROW: a serene blue, patterned linen blazer. Upgrade your travel style with a pristine polo and sleek chinos and look fresh from take-off to touch down.",
                "title": "Title"
            }, {
                "text": "No fabric travels better from cool to warm weather than linen. And from shoulders to overhead compartments for that matter! Long transits call for this top pick from ARROW: a serene blue, patterned linen blazer. Upgrade your travel style with a pristine polo and sleek chinos and look fresh from take-off to touch down.",
                "title": "Title"
            }, {
                "text": "No fabric travels better from cool to warm weather than linen. And from shoulders to overhead compartments for that matter! Long transits call for this top pick from ARROW: a serene blue, patterned linen blazer. Upgrade your travel style with a pristine polo and sleek chinos and look fresh from take-off to touch down.",
                "title": "Title"

            }, {
                "text": "No fabric travels better from cool to warm weather than linen. And from shoulders to overhead compartments for that matter! Long transits call for this top pick from ARROW: a serene blue, patterned linen blazer. Upgrade your travel style with a pristine polo and sleek chinos and look fresh from take-off to touch down.",
                "title": "Title"

            }
        ]
    }
]);