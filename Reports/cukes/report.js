$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/homePage.feature");
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
  "name": "Validation of flight booking search fields",
  "description": "",
  "id": "php-travels-home-page-functionality;validation-of-flight-booking-search-fields",
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
  "id": "php-travels-home-page-functionality;validation-of-flight-booking-search-fields;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 26,
      "id": "php-travels-home-page-functionality;validation-of-flight-booking-search-fields;;1"
    },
    {
      "cells": [
        "Business",
        "9",
        "9",
        "9"
      ],
      "line": 27,
      "id": "php-travels-home-page-functionality;validation-of-flight-booking-search-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16939913300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 187619200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validation of flight booking search fields",
  "description": "",
  "id": "php-travels-home-page-functionality;validation-of-flight-booking-search-fields;;2",
  "type": "scenario",
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
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "Business"
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
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "9"
      ],
      "line": 20
    },
    {
      "cells": [
        "Childs",
        "9"
      ],
      "line": 21
    },
    {
      "cells": [
        "Infants",
        "9"
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
formatter.match({
  "location": "HomeSteps.i_can_click_on_round_trip_and_check_return_date_is_populated_or_not()"
});
formatter.result({
  "duration": 11975002600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_click_on_oneway_and_check_return_date_is_disappeared_or_not()"
});
formatter.result({
  "duration": 3221956100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_bydefault_class()"
});
formatter.result({
  "duration": 38161100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 374696000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13419033500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_try_to_search_for_previous_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 2528739700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9558076300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 4104343300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_results_page_or_not()"
});
formatter.result({
  "duration": 5464493400,
  "error_message": "junit.framework.AssertionFailedError: ERROR:System navigated to result page\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.search_ResulsPage(HomePage.java:345)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_verify_the_system_is_navigated_to_results_page_or_not(HomeSteps.java:74)\r\n\tat ✽.Then I can verify the system is navigated to results page or not(src/test/resources/features/homePage.feature:23)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5186399900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Validate infants count more than Adults count",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-infants-count-more-than-adults-count",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 38
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 39
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I can verify the system is navigated to results page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-infants-count-more-than-adults-count;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 44,
      "id": "php-travels-home-page-functionality;validate-infants-count-more-than-adults-count;;1"
    },
    {
      "cells": [
        "Business",
        "4",
        "0",
        "5"
      ],
      "line": 45,
      "id": "php-travels-home-page-functionality;validate-infants-count-more-than-adults-count;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16120158200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 1062700,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate infants count more than Adults count",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-infants-count-more-than-adults-count;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "Business"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "4"
      ],
      "line": 38
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 39
    },
    {
      "cells": [
        "Infants",
        "5"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I can verify the system is navigated to results page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8660694200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 451022500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13708213500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9721361100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 1279992300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_results_page_or_not()"
});
formatter.result({
  "duration": 14310933500,
  "error_message": "junit.framework.AssertionFailedError: ERROR:System navigated to result page\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.search_ResulsPage(HomePage.java:345)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_verify_the_system_is_navigated_to_results_page_or_not(HomeSteps.java:74)\r\n\tat ✽.Then I can verify the system is navigated to results page or not(src/test/resources/features/homePage.feature:41)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 5005508500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Validate the Return date as Blank",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-return-date-as-blank",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I select Round Trip",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 56
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 57
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I can verify the system is navigated to results page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-return-date-as-blank;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 62,
      "id": "php-travels-home-page-functionality;validate-the-return-date-as-blank;;1"
    },
    {
      "cells": [
        "Business",
        "1",
        "0",
        "0"
      ],
      "line": 63,
      "id": "php-travels-home-page-functionality;validate-the-return-date-as-blank;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17305067700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 1331400,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Validate the Return date as Blank",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-return-date-as-blank;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I select Round Trip",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "Business"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 56
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 57
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I can verify the system is navigated to results page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_select_round_trip()"
});
formatter.result({
  "duration": 8984892600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 665543600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13587848500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9554468600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 63603200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_results_page_or_not()"
});
formatter.result({
  "duration": 5668001000,
  "error_message": "junit.framework.AssertionFailedError: ERROR:System navigated to result page\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.search_ResulsPage(HomePage.java:345)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_verify_the_system_is_navigated_to_results_page_or_not(HomeSteps.java:74)\r\n\tat ✽.Then I can verify the system is navigated to results page or not(src/test/resources/features/homePage.feature:59)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 5068749500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "verify the system is navigated to results page",
  "description": "",
  "id": "php-travels-home-page-functionality;verify-the-system-is-navigated-to-results-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 75
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;verify-the-system-is-navigated-to-results-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 80,
      "id": "php-travels-home-page-functionality;verify-the-system-is-navigated-to-results-page;;1"
    },
    {
      "cells": [
        "Business",
        "4",
        "5",
        "0"
      ],
      "line": 81,
      "id": "php-travels-home-page-functionality;verify-the-system-is-navigated-to-results-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13998773900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 973300,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "verify the system is navigated to results page",
  "description": "",
  "id": "php-travels-home-page-functionality;verify-the-system-is-navigated-to-results-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "Business"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "4"
      ],
      "line": 74
    },
    {
      "cells": [
        "Childs",
        "5"
      ],
      "line": 75
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8649999300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 402853300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13440448100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9573123900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 1238656200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 16159940900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 5026732900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Validate the default class in Home page and modify search page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-default-class-in-home-page-and-modify-search-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 88
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 92
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I can check the default class name in Home page and modify search page",
  "keyword": "And "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-default-class-in-home-page-and-modify-search-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 99,
      "id": "php-travels-home-page-functionality;validate-the-default-class-in-home-page-and-modify-search-page;;1"
    },
    {
      "cells": [
        "First",
        "4",
        "2",
        "3"
      ],
      "line": 100,
      "id": "php-travels-home-page-functionality;validate-the-default-class-in-home-page-and-modify-search-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20149406200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 487700,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Validate the default class in Home page and modify search page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-default-class-in-home-page-and-modify-search-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 88
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "4"
      ],
      "line": 92
    },
    {
      "cells": [
        "Childs",
        "2"
      ],
      "line": 93
    },
    {
      "cells": [
        "Infants",
        "3"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I can check the default class name in Home page and modify search page",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8562475000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 689356300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13838145100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 10084556100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 1066342500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 13928777500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_the_default_class_name_in_homepage_and_modify_search_page(DataTable)"
});
formatter.result({
  "duration": 134700,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027cloud.travels.steps.home.HomeSteps.i_can_check_the_default_class_name_in_homepage_and_modify_search_page(DataTable) in file:/C:/Users/sivam/Downloads/test-automation-travels/target/test-classes/\u0027 with pattern [^I can check the default class name in Home page and modify search page$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And I can check the default class name in Home page and modify search page\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 5224407300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 104,
  "name": "Validate the passengers count in Home page and modify search page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-passengers-count-in-home-page-and-modify-search-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 107
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 111
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 112
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I can check the passengers count in Home page and modify search page",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 116
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 117
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-passengers-count-in-home-page-and-modify-search-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 121,
      "id": "php-travels-home-page-functionality;validate-the-passengers-count-in-home-page-and-modify-search-page;;1"
    },
    {
      "cells": [
        "First",
        "4",
        "2",
        "3"
      ],
      "line": 122,
      "id": "php-travels-home-page-functionality;validate-the-passengers-count-in-home-page-and-modify-search-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14924367800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 205300,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Validate the passengers count in Home page and modify search page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-passengers-count-in-home-page-and-modify-search-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 107
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "4"
      ],
      "line": 111
    },
    {
      "cells": [
        "Childs",
        "2"
      ],
      "line": 112
    },
    {
      "cells": [
        "Infants",
        "3"
      ],
      "line": 113
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I can check the passengers count in Home page and modify search page",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "4"
      ],
      "line": 116
    },
    {
      "cells": [
        "Childs",
        "2"
      ],
      "line": 117
    },
    {
      "cells": [
        "Infants",
        "3"
      ],
      "line": 118
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8477206000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 345838800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13825998500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9472862000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 1293198100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 12083721800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_the_passenger_count_in_homepage_and_modify_search_page(DataTable)"
});
formatter.result({
  "duration": 2406382900,
  "error_message": "junit.framework.AssertionFailedError: ADULT: Home page Adults Count and Modify search Page Adults Count Both Are Not Matching\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.checkingPassengersCount_ModifySearchPage(HomePage.java:443)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_check_the_passenger_count_in_homepage_and_modify_search_page(HomeSteps.java:110)\r\n\tat ✽.And I can check the passengers count in Home page and modify search page(src/test/resources/features/homePage.feature:115)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 5233853100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 125,
  "name": "Validate the start time end time which shows same for the two trips",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 128
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 132
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 133
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 134
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "I can Check the Start time end time which shows same for the two trips",
  "keyword": "And "
});
formatter.examples({
  "line": 138,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 139,
      "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 140,
      "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16216921900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 174600,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Validate the start time end time which shows same for the two trips",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 124,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 128
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 132
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 133
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 134
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "I can Check the Start time end time which shows same for the two trips",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8491515100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 380399400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13887430200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9481294700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 60982000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 12218797800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_start_time_end_time_shows_same_for_both_trips()"
});
formatter.result({
  "duration": 2361018800,
  "error_message": "junit.framework.AssertionFailedError: ERROR: Start Time and End Time showing same for both the trips\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.selectStopOne_CheckStartTimeAndEndTime(HomePage.java:577)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_check_start_time_end_time_shows_same_for_both_trips(HomeSteps.java:116)\r\n\tat ✽.And I can Check the Start time end time which shows same for the two trips(src/test/resources/features/homePage.feature:136)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 5213583200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 143,
  "name": "Validate the duration for both the trips",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-duration-for-both-the-trips",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 142,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 146
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 150
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 151
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 152
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I can check the duration which is showing same for both the trips",
  "keyword": "And "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-duration-for-both-the-trips;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 157,
      "id": "php-travels-home-page-functionality;validate-the-duration-for-both-the-trips;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 158,
      "id": "php-travels-home-page-functionality;validate-the-duration-for-both-the-trips;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15980461400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 223200,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Validate the duration for both the trips",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-duration-for-both-the-trips;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 142,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 146
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 150
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 151
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 152
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I can check the duration which is showing same for both the trips",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8448856900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 402798700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13436280200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9493727900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 84147300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 9874717900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_duration_shows_same_for_both_trips()"
});
formatter.result({
  "duration": 2310304900,
  "error_message": "junit.framework.AssertionFailedError: ERROR: Start Duration and End Duration showing same for both the trips\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.selectStopOne_CheckDurationTrips(HomePage.java:498)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_check_duration_shows_same_for_both_trips(HomeSteps.java:122)\r\n\tat ✽.And I can check the duration which is showing same for both the trips(src/test/resources/features/homePage.feature:154)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 5222309300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 162,
  "name": "Validate the start time end time which shows same for the two trips",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 161,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 163,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 165
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 169
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 170
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 171
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I can verify the system is navigated to results page",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I can check Start time is showing same in Depart from Start location",
  "keyword": "And "
});
formatter.examples({
  "line": 175,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 176,
      "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 177,
      "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16128575100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 205400,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "Validate the start time end time which shows same for the two trips",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-start-time-end-time-which-shows-same-for-the-two-trips;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 161,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 163,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 165
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 169
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 170
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 171
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I can verify the system is navigated to results page",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I can check Start time is showing same in Depart from Start location",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8557712400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 406062600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13893878200,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9522958700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 60176100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 12115379400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_start_time_is_showing_in_depart_from_start_locations()"
});
formatter.result({
  "duration": 2323883400,
  "error_message": "junit.framework.AssertionFailedError: ERROR: Start Time showing Depart From Start Locations\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.selectStopOne_CheckStartTimeShowingDepartFromStartLocations(HomePage.java:537)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_check_start_time_is_showing_in_depart_from_start_locations(HomeSteps.java:128)\r\n\tat ✽.And I can check Start time is showing same in Depart from Start location(src/test/resources/features/homePage.feature:173)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 5222343600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 180,
  "name": "Validate the from time in SRP page and Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-from-time-in-srp-page-and-booking-summary-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 179,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 181,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 183
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 187
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 188
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "I can verify the from time in SRP page and Booking Summary Page",
  "keyword": "And "
});
formatter.examples({
  "line": 193,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-from-time-in-srp-page-and-booking-summary-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 194,
      "id": "php-travels-home-page-functionality;validate-the-from-time-in-srp-page-and-booking-summary-page;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 195,
      "id": "php-travels-home-page-functionality;validate-the-from-time-in-srp-page-and-booking-summary-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15708205400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 170100,
  "status": "passed"
});
formatter.scenario({
  "line": 195,
  "name": "Validate the from time in SRP page and Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-from-time-in-srp-page-and-booking-summary-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 179,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 181,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 183
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 187
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 188
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 189
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "I can verify the from time in SRP page and Booking Summary Page",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8482702400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 364159400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13418892400,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9497207900,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 76295700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 11337714000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_from_time_in_Srp_page_and_booking_summary_page()"
});
formatter.result({
  "duration": 16663424800,
  "error_message": "junit.framework.AssertionFailedError: SRP PAGE START TIME AND BOOKING SUMMARY PAGE START TIME BOTH ARE NOT MATCHING\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.checking_FromTime_BookingSummaryPage(HomePage.java:621)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_verify_the_from_time_in_Srp_page_and_booking_summary_page(HomeSteps.java:134)\r\n\tat ✽.And I can verify the from time in SRP page and Booking Summary Page(src/test/resources/features/homePage.feature:191)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 5235520000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 198,
  "name": "Validate the Currency in SRP page and Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 197,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 201
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 205
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 206
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 207
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "I can verify the Currency in SRP page and Booking Summary Page",
  "keyword": "And "
});
formatter.examples({
  "line": 211,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 212,
      "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 213,
      "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16624701700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 192200,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "Validate the Currency in SRP page and Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 197,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 199,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 201
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 205
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 206
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 207
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "I can verify the Currency in SRP page and Booking Summary Page",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8494961300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 384030300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13370074700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9506354100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 55344100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 9077226700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_currency_in_Srp_page_and_booking_summary_page()"
});
formatter.result({
  "duration": 9546237400,
  "error_message": "junit.framework.AssertionFailedError: SRP PAGE CURRENCY AND BOOKING SUMMARY PAGE CURRENCY BOTH ARE NOT MATCHING\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.checking_Currency_BookingSummaryPage(HomePage.java:665)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_verify_the_currency_in_Srp_page_and_booking_summary_page(HomeSteps.java:140)\r\n\tat ✽.And I can verify the Currency in SRP page and Booking Summary Page(src/test/resources/features/homePage.feature:209)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 5215858400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 217,
  "name": "Validate the Currency in SRP page and Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 216,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 218,
  "name": "I login to AUT with valid user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 219,
  "name": "I check oneway is selected or not",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 221
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 225
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 226
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 227
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "I can login to the site and navigate to booking summary page and Verify Account Login",
  "keyword": "And "
});
formatter.examples({
  "line": 231,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 232,
      "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 233,
      "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16411836700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 351500,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "Validate the Currency in SRP page and Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-currency-in-srp-page-and-booking-summary-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 216,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 218,
  "name": "I login to AUT with valid user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 219,
  "name": "I check oneway is selected or not",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 221
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 225
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 226
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 227
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "I can login to the site and navigate to booking summary page and Verify Account Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_login_to_AUT_with_valid_user_credentials()"
});
formatter.result({
  "duration": 6040432300,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton style\u003d\"font-size: 16px;\" type\u003d\"submit\" class\u003d\"btn btn-primary btn-lg btn-block loginbtn\"\u003e...\u003c/button\u003e is not clickable at point (631, 521). Other element would receive the click: \u003ca aria-label\u003d\"learn more about cookies\" role\u003d\"button\" tabindex\u003d\"0\" class\u003d\"cc-link\" href\u003d\"https://www.phptravels.net/cookies-policy\" rel\u003d\"noopener noreferrer nofollow\" target\u003d\"_blank\"\u003e...\u003c/a\u003e\n  (Session info: chrome\u003d78.0.3904.97)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027SIVAM-LP\u0027, ip: \u0027192.168.3.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab), userDataDir\u003dC:\\Users\\sivam\\AppData\\Local\\Temp\\scoped_dir9652_23840}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d78.0.3904.97, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f15375e4f721d74509f902fe36d1f44e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat cloud.travels.utils.PageUtils.clickElement(PageUtils.java:58)\r\n\tat cloud.travels.pages.login.LoginPage.Login(LoginPage.java:228)\r\n\tat cloud.travels.steps.login.LoginSteps.i_login_to_AUT_with_valid_user_credentials(LoginSteps.java:61)\r\n\tat ✽.When I login to AUT with valid user credentials(src/test/resources/features/homePage.feature:218)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_can_login_to_the_site_booking_summary_page_and_verify_account_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 5215684600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 236,
  "name": "Validate the Payment Cards in Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-payment-cards-in-booking-summary-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 235,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I modify the class name",
  "rows": [
    {
      "cells": [
        "className",
        "\u003cclassName\u003e"
      ],
      "line": 239
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I enter the number of passengers",
  "rows": [
    {
      "cells": [
        "Adults",
        "\u003cAdults\u003e"
      ],
      "line": 243
    },
    {
      "cells": [
        "Childs",
        "\u003cChilds\u003e"
      ],
      "line": 244
    },
    {
      "cells": [
        "Infants",
        "\u003cInfants\u003e"
      ],
      "line": 245
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "I can check the payment cards",
  "keyword": "And "
});
formatter.examples({
  "line": 249,
  "name": "",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-payment-cards-in-booking-summary-page;",
  "rows": [
    {
      "cells": [
        "className",
        "Adults",
        "Childs",
        "Infants"
      ],
      "line": 250,
      "id": "php-travels-home-page-functionality;validate-the-payment-cards-in-booking-summary-page;;1"
    },
    {
      "cells": [
        "First",
        "1",
        "0",
        "0"
      ],
      "line": 251,
      "id": "php-travels-home-page-functionality;validate-the-payment-cards-in-booking-summary-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16345109600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page of PHP Travels",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.i_am_on_home_page_of_php_travels()"
});
formatter.result({
  "duration": 231000,
  "status": "passed"
});
formatter.scenario({
  "line": 251,
  "name": "Validate the Payment Cards in Booking Summary Page",
  "description": "",
  "id": "php-travels-home-page-functionality;validate-the-payment-cards-in-booking-summary-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 235,
      "name": "@healthcheck"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "I check oneway is selected or not",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I modify the class name",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "className",
        "First"
      ],
      "line": 239
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I enter from and to cities",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I search for current date in departure date picker",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I enter the number of passengers",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "Adults",
        "1"
      ],
      "line": 243
    },
    {
      "cells": [
        "Childs",
        "0"
      ],
      "line": 244
    },
    {
      "cells": [
        "Infants",
        "0"
      ],
      "line": 245
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I can verify the system is navigated to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "I can check the payment cards",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.i_check_oneway_is_selected_or_not()"
});
formatter.result({
  "duration": 8541324300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_modify_the_class_name(DataTable)"
});
formatter.result({
  "duration": 364181000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_from_and_to_cities()"
});
formatter.result({
  "duration": 13352989600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_search_for_current_date_in_dep_date_picker()"
});
formatter.result({
  "duration": 9528442600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_enter_the_passenger_count(DataTable)"
});
formatter.result({
  "duration": 58937600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_verify_the_system_is_navigated_to_result_page()"
});
formatter.result({
  "duration": 12560646600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_can_check_the_payment_cards()"
});
formatter.result({
  "duration": 11768677900,
  "error_message": "junit.framework.AssertionFailedError: Only Creadit Card Is Displayed\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat cloud.travels.pages.home.HomePage.verifyPaymentCards(HomePage.java:734)\r\n\tat cloud.travels.steps.home.HomeSteps.i_can_check_the_payment_cards(HomeSteps.java:152)\r\n\tat ✽.And I can check the payment cards(src/test/resources/features/homePage.feature:247)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 5244818300,
  "status": "passed"
});
});