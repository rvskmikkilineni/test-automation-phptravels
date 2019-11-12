package cloud.travels.steps.register;



import org.openqa.selenium.WebDriver;



import cloud.travels.pages.register.RegisterPage;
import cloud.travels.utils.BrowserUtils;
import cloud.travels.utils.StepUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterSteps extends StepUtils {
	WebDriver driver = BrowserUtils.getDriverInstance();
	RegisterPage registerPage = null;

	@Given("^I am on Home page of PHP Travels$")
	public void i_am_on_home_page_of_php_travels() throws Throwable {
		registerPage = new RegisterPage(driver);
	}

	@When("^I click on Myaccount and signUp buttons$")
	public void i_click_on_myaccount_and_signup_button() throws Throwable {
		registerPage.clickOnMyaccountAndSignUp();

	}
	@When("^I provide all the fields as blank in signUp page$")
	public void i_can_all_the_fields_as_blank_in_signUp_page() throws Throwable {
		registerPage.verifyAllTheFieldsAsBlank();
	}
	
	@Then("^I can check the error message$")
	public void i_can_check_the_error_message() throws Throwable {
		registerPage.validateErrorMessages();
	}
	
	@When("^I provide all the fields with valid data and user is navigated to user profile page and validate firstname and lastname$")
	public void i_provide_all_the_fields_with_valid_data_and_user_is_navigated_to_userprofile_page_and_validate_firstname_and_lastname() throws Throwable {
		registerPage.registerNewUser_ValidateFirstName_LastName();

	}
	
	@When("^I provide all the fields with same data from previous register user$")
	public void i_provide_all_the_fields_with_same_data_from_previous_register_user() throws Throwable {
		registerPage.createNewUserUsingExistingUserDetails();
	}
	
	@Then("^I can see the error message$")
	public void i_can_see_the_error_message() throws Throwable {
		registerPage.emailCheck();
	}
	
	
	@Then("^I can logout of the Account$")
	public void i_can_logout_of_the_Account() throws Throwable {
		registerPage.clickOnLogout();
	}
	
	
	
}
