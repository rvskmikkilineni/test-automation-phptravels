#src/test/resources/features/homePage.feature
Feature: PHP Travels HOME PAGE functionality
 
	
Background:
	Given I am on Home page of PHP Travels

	
@healthcheck
Scenario Outline: Validation of search fields for flight booking 
	 When I click on round trip and check the return date is populated or not
	 And I click on oneway and check the return date is disappeared or not
	 And I check the default class name
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I try to search for previous date in departure date picker
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page or not
	  
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |Business |9		|9		|9		|
	 
	 
@healthcheck
Scenario Outline: Validate the flight booking scenario when infants count is more than Adults count
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page or not
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |Business |4		|0		|5		|
	 
	 
@healthcheck
Scenario Outline: Validate the round trip booking scenario when return date is Blank
	 When I select Round Trip
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page or not
	  
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |Business |1		|0		|0		|
	 
	 
@healthcheck
Scenario Outline: verify the flight booking scenario with all valid search data
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	 	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page
	  
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |Business |4		|5		|0		|
	 
	 
@healthcheck no prameter in last step issue
Scenario Outline: Validate the default class selected in Home page and check for the same class in modify search page
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page
	 And I can check the default class name in Home page and modify search page
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |4		|2		|3		|
	 
	 
@healthcheck
Scenario Outline: Validate the passengers count selected in Home page and check for the same count in modify search page
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	  	|Adults|<Adults>|
	  	|Childs|<Childs>|
	  	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page
	 And I can check the passengers count in Home page and modify search page
	  	|Adults|<Adults>|
	  	|Childs|<Childs>|
	  	|Infants|<Infants>|
	  
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |4		|2		|3		|
	 
@healthcheck
Scenario Outline: Validate the start time and end time which shows same for the flights with more than 1 stop
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page
	 And I can Check the Start time end time which shows same for the two trips
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |1		|0		|0		|
	 
@healthcheck
Scenario Outline: Validate the total duration showing for the flights with more than 1 stop
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 Then I can verify the system is navigated to results page
	 And I can check the duration which is showing same for both the trips
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |1		|0		|0		|
	 
	 
@healthcheck what is the diff with above and this scenario ?
Scenario Outline: Validate the start time and end time which shows same for the flights with more than 1 stop
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	 And I can verify the system is navigated to results page
	 And I can check Start time is showing same in Depart from Start location
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |1		|0		|0		|
	 
@healthcheck
Scenario Outline: Validate the start time displayed in SRP page and compare against the start time Booking Summary Page
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	Then I can verify the system is navigated to results page
	And I can verify the from time in SRP page and Booking Summary Page
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |1		|0		|0		|
	 
@healthcheck
Scenario Outline: Validate the currency displayed in SRP page and check for the currency in Booking Summary Page
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	Then I can verify the system is navigated to results page
	And I can verify the Currency in SRP page and Booking Summary Page
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |1		|0		|0		|
	 
	 
@healthcheck diff in aboave and this ?
Scenario Outline: Validate the currency displayed in SRP page and check for the currency in Booking Summary Page
     When I login to AUT with valid user credentials
	 And I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	Then I can verify the system is navigated to results page
	And I can login to the site and navigate to booking summary page and Verify Account Login
	 
	 Examples:
	 |className|Adults	|Childs	|Infants|
	 |First |1		|0		|0		|
	 
@healthcheck
Scenario Outline: Validate the different Payment options available in Booking Summary Page
	 When I check oneway is selected or not
	 And I modify the class name
	 	|className|<className>|
	 And I enter from and to cities
	 And I search for current date in departure date picker 
	 And I enter the number of passengers
	   	|Adults|<Adults>|
	   	|Childs|<Childs>|
	   	|Infants|<Infants>|
	Then I can verify the system is navigated to results page
	And I can check the payment cards
	 
	 Examples:
	 |className	|Adults	|Childs	|Infants|
	 |First 	|1		|0		|0		|