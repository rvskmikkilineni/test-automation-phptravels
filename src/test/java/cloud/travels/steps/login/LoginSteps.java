package cloud.travels.steps.login;

import org.openqa.selenium.WebDriver;

import cloud.travels.pages.login.LoginPage;
import cloud.travels.utils.BrowserUtils;
import cloud.travels.utils.StepUtils;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends StepUtils {
	WebDriver driver = BrowserUtils.getDriverInstance();

	LoginPage loginPage = null;

	@When("^I enter invalid email and valid password$")
	public void i_enter_invalid_email_and_valid_password() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.loginWithInvalidEmailAndValidPwd();
	}

	@When("^I enter valid email and invalid password$")
	public void i_enter_valid_email_and_invalid_password() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.loginWithValidEmailAndInvalidPwd();
	}

	@Then("^I can verify the error message$")
	public void i_can_verify_the_error_message() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.checkTheErrorMessage();
	}

	@When("^I click on forgot password and enter invalid email$")
	public void i_click_on_forgot_password_and_enter_invalid_Email() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.forgetPassword_InvalidEmail();
	}

	@Then("^I can check the forgot password error message$")
	public void i_can_check_the_forgot_password_error_message() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.errorMessage();
	}

	@When("^I click on forgot password and enter valid email$")
	public void i_can_click_on_Forgot_pwd_and_enter_Valid_Email() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.forgetPassword_validEmail();
	}

	@Then("^I can check the forgot password success message$")
	public void i_can_check_the_forgot_password_Success_msg() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.successMsg();
	}

	@When("^I login to AUT with valid user credentials$")
	public void i_login_to_AUT_with_valid_user_credentials() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.Login();
	}
	
	@Then("^I can login to application successfully$")
	public void i_can_login_to_application_successfully() throws Throwable {
		loginPage = new LoginPage(driver);
		loginPage.Login_Success();
	}

}
