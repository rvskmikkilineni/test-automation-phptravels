#src/test/resources/features/userRegistration.feature
Feature: PHP Travels USER REGISTRATION functionality
 
Background:
	Given I am on Home page of PHP Travels

@healthcheck
Scenario: Validate the error message in signUp Page 
	 When I click on Myaccount and signUp buttons
	 And I provide all the fields as blank in signUp page  
	 Then I can check the error message 
    
@healthcheck
Scenario: Validate the user is navigated to user profile page and check the details 
	 When I click on Myaccount and signUp buttons
	 And I provide all the fields with valid data and user is navigated to user profile page and validate firstname and lastname 
	 Then I can logout of the Account

@healthcheck
Scenario: Validate the error message when user tries to register with same data from existing registered user
	 When I click on Myaccount and signUp buttons
	 And I provide all the fields with same data from previous register user 
	 Then I can see the error message
    
	
	
