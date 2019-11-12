#src/test/resources/features/login.feature
Feature: PHP Travels LOGIN functionality
 
	
Background:
	Given I am on Home page of PHP Travels

	
@healthcheck
Scenario: validate The Invalid Email and valid Password 
	 When I enter invalid email and valid password
	 Then I can check the error message
	 
    
 @healthcheck
Scenario: validate The valid Email and Invalid Password 
	 When I enter valid email and invalid password
     Then I can check the error message
     
@healthcheck
Scenario: validate The forgot Password error message 
	 When I click on forgot password and enter invalid email
     Then I can check the forgot password error message
     
 @healthcheck
Scenario: validate The forgot Password Success message 
	 When I click on forgot password and enter valid email
     Then I can check the forgot password success message
     
  @healthcheck
Scenario: validate The valid user credentials 
	 When I login to AUT with valid user credentials
    
     
	 
    
	
	
