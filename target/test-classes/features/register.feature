#src/test/resources/features/register.feature
Feature: PHP Travels REGISTER functionality
 
	
Background:
	Given I am on Home page of PHP Travels

	
@healthcheck
Scenario: validate The Error Message in signUp Page 
	 When I click on Myaccount and signUp buttons
	 And I provide all the fields as blank in signUp page  
	 Then I can check the error message
	 
    
 @healthcheck
Scenario: validate the user is navigated to user profile page and check the details 
	 When I click on Myaccount and signUp buttons
	 And I provide all the fields with valid data and user is navigated to user profile page and validate firstname and lastname 
	 Then I can logout of the Account

@healthcheck
Scenario: validate the fields with same data from Existing register user and check the error message
	 When I click on Myaccount and signUp buttons
	 And I provide all the fields with same data from previous register user and check the error message 
	 Then I can check the error message 
	 
    
	
	
