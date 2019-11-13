$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#src/test/resources/features/homePage.feature"
    }
  ],
  "line": 2,
  "name": "PHP Travels HOME PAGE functionality",
  "description": "",
  "id": "php-travels-home-page-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Validation of search fields for flight booking",
  "description": "",
  "id": "php-travels-home-page-functionality;validation-of-search-fields-for-flight-booking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I click on round trip and check the return date is populated or not",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on oneway and check the return date is disappeared or not",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I check the default class name",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I try to search for previous date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 21
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can verify the system is navigated to results page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validation-of-search-fields-for-flight-booking;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 26,
      "id": "php-travels-home-page-functionality;validation-of-search-fields-for-flight-booking;;1"
    },
    {
      "cells": [
        "Business",
        "9",
        "9",
        "9"
      ],
      "line": 27,
      "id": "php-travels-home-page-functionality;validation-of-search-fields-for-flight-booking;;2"
    }
  ],
  "keyword": "Examples"
});
