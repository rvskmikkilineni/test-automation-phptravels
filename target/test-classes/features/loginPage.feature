#src/test/resources/features/loginPage.feature
Feature: PHP Travels LOGIN functionality
 
	
Background:
	Given I am on Home page of PHP Travels

	
@healthcheck
Scenario: validate the invalid email and valid password 
	 When I enter invalid email and valid password
	 Then I can verify the error message
	 
    
@healthcheck
Scenario: validate the valid email and invalid password 
	 When I enter valid email and invalid password
     Then I can verify the error message
     
@healthcheck
Scenario: validate the forgot password error message 
	 When I click on forgot password and enter invalid email
     Then I can check the forgot password error message
     
@healthcheck
Scenario: validate the forgot Password success message 
	 When I click on forgot password and enter valid email
     Then I can check the forgot password success message
     
@healthcheck
Scenario: validate The valid user credentials 
	 When I login to AUT with valid user credentials
	 Then I can login to application successfully
    
     
	 
    
	
	
