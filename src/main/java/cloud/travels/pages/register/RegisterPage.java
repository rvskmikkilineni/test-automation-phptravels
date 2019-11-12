package cloud.travels.pages.register;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cloud.travels.constants.common.BrowserConstants;
import cloud.travels.constants.common.DataConstants;
import cloud.travels.utils.PageUtils;
import cloud.travels.utils.TestDataUtils;
import junit.framework.Assert;

public class RegisterPage {
	public WebDriver driver;
	private PageUtils pageUtils;
	String userAccount;
	String SelectedFromCity;
	String SelectedToCity;

	public RegisterPage(WebDriver driver) {
		this.driver = driver;
		this.pageUtils = PageUtils.getInstance();
		PageFactory.initElements(this.driver, this);
	}

	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Sign Up'])[1]/preceding::a[2]")
	private WebElement btn_myAccount;
	@FindBy(linkText = "Sign Up")
	private WebElement btn_signUp;
	@FindBy(xpath = "//a[contains(text(),'Login')]")
	private WebElement btn_Login;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Confirm Password'])[1]/following::button[1]")
	private WebElement btn_submit;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Register'])[2]/following::p[1]")
	private WebElement get_EmailError;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Register'])[2]/following::p[2]")
	private WebElement get_PasswordError;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Register'])[2]/following::p[3]")
	private WebElement get_ConfirmPwdError;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Register'])[2]/following::p[4]")
	private WebElement get_firstNameError;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Register'])[2]/following::p[5]")
	private WebElement get_lastNameError;
	@FindBy(name = "firstname")
	private WebElement txt_firstName;
	@FindBy(name = "lastname")
	private WebElement txt_lastname;
	@FindBy(name = "phone")
	private WebElement txt_mobileNumber;
	@FindBy(name = "email")
	private WebElement txt_email;
	@FindBy(name = "password")
	private WebElement txt_password;
	@FindBy(name = "confirmpassword")
	private WebElement txt_confirmpassword;
	@FindBy(xpath = "//a[contains(text(),'My Profile')]")
	private WebElement btn_MyProfile;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='My Profile'])[1]/preceding::span[1]")
	private WebElement top_CurrentDate;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Logout'])[1]/preceding::a[2]")
	private WebElement btn_Username;
	@FindBy(xpath = "//a[contains(text(),'Logout')]")
	private WebElement btn_logOut;
	@FindBy(name = "username")
	private WebElement txt_Login_userName;
	@FindBy(name = "password")
	private WebElement txt_Login_Password;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Password'])[1]/following::button[1]")
	private WebElement btn_Login1;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='First Name'])[1]/preceding::div[1]")
	private WebElement get_EmailAlreadyExists_Text;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Email'])[1]/preceding::div[2]")
	private WebElement get_InavlidEmailOrPwd_Text;
	@FindBy(xpath = "//a[contains(text(),'Forget Password')]")
	private WebElement btn_ForgotPwd;
	@FindBy(id = "resetemail")
	private WebElement txt_resetEmail;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Forget Password'])[1]/following::button[2]")
	private WebElement btn_Reset;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Reset'])[1]/preceding::div[1]")
	private WebElement get_emailNotFound_Text;
	static String email;
	static String password;

	/**
	 * Click On MyAccount-->SignUp buttons
	 * 
	 * @throws Exception
	 */
	public void clickOnMyaccountAndSignUp() throws Exception {
		Thread.sleep(2000);
		pageUtils.clickElement(driver, btn_myAccount);
		pageUtils.clickElement(driver, btn_signUp);
	}

	/**
	 * Click On LogOut button
	 * 
	 * @throws Exception
	 */
	public void clickOnLogout() throws Exception {
		pageUtils.clickElement(driver, btn_Username);
		pageUtils.clickElement(driver, btn_logOut);
	}

	/**
	 * Click on SignUp button by keeping all the fields as blank
	 * 
	 * @throws Exception
	 */
	public void verifyAllTheFieldsAsBlank() throws Exception {
		pageUtils.isElementLocated(driver, By.xpath("//button[@type='submit']"));
		pageUtils.scrollDown(driver);
		pageUtils.clickElement(driver, btn_submit);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL);
		pageUtils.isElementLocated(driver, By.xpath("//p[contains(text(),'The Email field is required.')]"));
	}

	/**
	 * Verify The error message for all fields in signUp Page
	 * 
	 * @throws Exception
	 */
	public void validateErrorMessages() throws Exception {
		emailError();
		passwordError();
		confirmPwdError();
		firstNameError();
		lastNameError();
	}

	/**
	 * Verify The Email Error In signUp Page
	 * 
	 * @throws Exception
	 */
	public boolean emailError() throws Exception {
		boolean status = false;
		String exceptedEmailError = "The Email field is required.";
		String actualEmailError = pageUtils.getTextOfElement(driver, get_EmailError);
		// System.out.println("This is the actual Email error displayed:
		// "+actualEmailError);
		// System.out.println("This is the expected Email error displayed:
		// "+exceptedEmailError);
		if (exceptedEmailError.equals(actualEmailError)) {
			status = true;
			System.out.println("Expected and Actual Email error messages are same");
		} else {
			Assert.assertTrue("EMAIL ERROR : Excepted And Actual Email error messages are Not Matching", status);
			status = false;
		}
		return status;
	}

	/**
	 * Verify The Password Error In signUp Page
	 * 
	 * @throws Exception
	 */
	public boolean passwordError() throws Exception {
		boolean status = false;

		String exceptedPWdError = "The Password field is required.";
		String actualPWdError = pageUtils.getTextOfElement(driver, get_PasswordError);
		// System.out.println("This is the actual Password error displayed:
		// "+actualPWdError);
		// System.out.println("This is the expected Password error displayed:
		// "+exceptedPWdError);
		if (exceptedPWdError.equals(actualPWdError)) {
			status = true;
			System.out.println("Expected and Actual Password error messages are same");
		} else {
			Assert.assertTrue("PASSWORD ERROR : Expected and Actual Password error message are not matching", status);
		}
		return status;
	}

	/**
	 * Verify The Confirm Password Error In signUp Page
	 * 
	 * @throws Exception
	 */
	public boolean confirmPwdError() throws Exception {
		boolean status = false;
		String exceptedConfPwdError = "The Confirm Password field is required.";
		String actualConfPwdError = pageUtils.getTextOfElement(driver, get_ConfirmPwdError);
		if (exceptedConfPwdError.equals(actualConfPwdError)) {
			status = true;
			System.out.println("Expected and Actual Confirm Password error messages are same");
		} else {
			Assert.assertTrue(
					"CONFIRM PASSWORD ERROR : Excepted And Actual Confirm Password error message are not matching",
					status);
		}
		return status;
	}

	/**
	 * Verify The FirstName Error In signUp Page
	 * 
	 * @throws Exception
	 */
	public boolean firstNameError() throws Exception {
		boolean status = false;
		String exceptedFirstNameError = "The First name field is required.";
		String actualFirstNameError = pageUtils.getTextOfElement(driver, get_firstNameError);
		if (exceptedFirstNameError.equals(actualFirstNameError)) {
			status = true;
			System.out.println("Expected and Actual First Name error messages are same");
		} else {
			Assert.assertTrue("CONFIRM PASSWORD ERROR : Excepted And Actual First name error message are not matching",
					status);
		}
		return status;
	}

	/**
	 * Verify The LastName Error In signUp Page
	 * 
	 * @throws Exception
	 */
	public boolean lastNameError() throws Exception {
		boolean status = false;
		String exceptedLastNameError = "The Last Name field is required.";
		String actualLastNameError = pageUtils.getTextOfElement(driver, get_lastNameError);
		if (exceptedLastNameError.equals(actualLastNameError)) {
			status = true;
			System.out.println("Expected and Actual Last Name error messages are same");
		} else {
			Assert.assertTrue("CONFIRM PASSWORD ERROR : Excepted And Actual Last Name error message are not matching",
					status);
		}
		return status;
	}

	/**
	 * create the new User and validate the First name ,last name and Current
	 * date in user profile page
	 * 
	 * @throws Exception
	 */
	public void registerNewUser_ValidateFirstName_LastName() throws Exception {
		pageUtils.isElementLocated(driver, By.name("firstname"));
		String firstName = TestDataUtils.getUniqueRegisterFirstName();
		String lastName = TestDataUtils.getUniqueRegisterLastName();
		String mobileNumber = DataConstants.NEW_REGISTER_MOBILENUMBER;
		email = TestDataUtils.getUniqueEmailId();
		password = DataConstants.NEW_REGISTER_PASSWORD;
		String confPassword = DataConstants.NEW_REGISTER_PASSWORD;
		pageUtils.sendKeysAfterClearingElement(driver, txt_firstName, firstName);
		pageUtils.sendKeysAfterClearingElement(driver, txt_lastname, lastName);
		pageUtils.sendKeysAfterClearingElement(driver, txt_mobileNumber, mobileNumber);
		pageUtils.sendKeysAfterClearingElement(driver, txt_email, email);
		pageUtils.sendKeysAfterClearingElement(driver, txt_password, password);
		pageUtils.sendKeysAfterClearingElement(driver, txt_confirmpassword, confPassword);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		pageUtils.scrollDown(driver);
		pageUtils.clickElement(driver, btn_submit);
		pageUtils.clickElement(driver, btn_submit);
		pageUtils.isElementLocated(driver, By.xpath("//a[contains(text(),'My Profile')]"));
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		pageUtils.clickElement(driver, btn_MyProfile);
		String FName = txt_firstName.getAttribute("value");
		if (FName.equals(firstName)) {
			System.out.println("User First Name same on user profile page");
		} else {
			System.out.println("User First Name Not Matching On user profile page");
		}
		String LName = txt_lastname.getAttribute("value");
		if (LName.equals(lastName)) {
			System.out.println("User Last Name same on user profile page");
		} else {
			System.out.println("User Last Name Not Matching On user profile page");
		}
		Date d = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("d MMMM yyyy");
		String strDate = formatter.format(d);
		System.out.println(strDate);
		String GetTextFromsite = pageUtils.getTextOfElement(driver, top_CurrentDate);
		if (GetTextFromsite.equals(strDate)) {
			System.out.println("CurrentDate Is displayed Properly");
		} else {
			System.out.println("CurrentDate Is not displayed");
		}
	}

	/**
	 * provide all the fields with same data from Existing User Details and
	 * check the error message
	 * 
	 * @return
	 * @throws Exception
	 */
	public void createNewUserUsingExistingUserDetails() throws Exception {
		pageUtils.isElementLocated(driver, By.name("firstname"));
		pageUtils.sendKeysAfterClearingElement(driver, txt_firstName, "automationyxlzsa");
		pageUtils.sendKeysAfterClearingElement(driver, txt_lastname, "automationvowrpkibb");
		pageUtils.sendKeysAfterClearingElement(driver, txt_mobileNumber, "38745986521");
		pageUtils.sendKeysAfterClearingElement(driver, txt_email, "automation+6782@gmail.com");
		pageUtils.sendKeysAfterClearingElement(driver, txt_password, "TestAutomation@1");
		pageUtils.sendKeysAfterClearingElement(driver, txt_confirmpassword, "TestAutomation@1");
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		pageUtils.scrollDown(driver);
		pageUtils.clickElement(driver, btn_submit);
		pageUtils.clickElement(driver, btn_submit);
	}

	/**
	 * This method is to check the registered email id availability
	 * 
	 * @return
	 */
	public boolean emailCheck() {
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='First Name'])[1]/preceding::div[1]"));
		String emailText = pageUtils.getTextOfElement(driver, get_EmailAlreadyExists_Text);
		boolean status = false;
		if (emailText.equals("Email Already Exists.")) {
			status = true;
			System.out.println("Email Already Exists. message is displayed");
		} else {
			System.out.println("Email Already Exists. message is not displayed");
			status = false;
		}
		return status;
	}

}
