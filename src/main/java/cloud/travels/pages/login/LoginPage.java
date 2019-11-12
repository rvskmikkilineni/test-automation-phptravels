package cloud.travels.pages.login;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cloud.travels.constants.common.BrowserConstants;
import cloud.travels.constants.common.DataConstants;
import cloud.travels.utils.PageUtils;



public class LoginPage {
	public WebDriver driver;
	private PageUtils pageUtils;
	String userAccount;
	String SelectedFromCity;
	String SelectedToCity;

	public LoginPage(WebDriver driver) {
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
	
	
	/**
	 * Enter Invalid EmailID/ Valid Password 
	 * @throws Exception
	 */
	public  void loginWithInvalidEmailAndValidPwd() throws Exception
	{
		pageUtils.clickElement(driver, btn_myAccount);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
		pageUtils.clickElement(driver, btn_Login);
		pageUtils.isElementLocated(driver, By.name("username"));
		pageUtils.sendKeysAfterClearingElement(driver, txt_Login_userName, "automation@gmail.com");
		pageUtils.sendKeysAfterClearingElement(driver, txt_Login_Password, "TestAutomation@1");
		pageUtils.clickElement(driver, btn_Login1);
		pageUtils.isElementLocated(driver, By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Email'])[1]/preceding::div[2]"));
	}

	/**
	 * Check the error message 'Invalid Email or Password'
	 * @return
	 */
	public boolean checkTheErrorMessage()
	{
		String invalidEmailText=pageUtils.getTextOfElement(driver, get_InavlidEmailOrPwd_Text);
		boolean status = false;
		if(invalidEmailText.equals("Invalid Email or Password"))
		{
			status = true;
			System.out.println("Invalid Email or Password message is displayed");
		}
		else
		{
			System.out.println("Invalid Email or Password message is not displayed");
			status = false;
		}
		return status;
	}

	/**
	 * Enter Valid EmailID/ Invalid Password 
	 * @throws Exception
	 */
	public  void loginWithValidEmailAndInvalidPwd() throws Exception
	{
		pageUtils.clickElement(driver, btn_myAccount);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
		pageUtils.clickElement(driver, btn_Login);
		pageUtils.isElementLocated(driver, By.name("username"));
		pageUtils.sendKeysAfterClearingElement(driver, txt_Login_userName, "automation+6782@gmail.com");
		pageUtils.sendKeysAfterClearingElement(driver, txt_Login_Password, "TestAutomation");
		pageUtils.clickElement(driver, btn_Login1);
		pageUtils.isElementLocated(driver, By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Email'])[1]/preceding::div[2]"));
	}
	
	/**
	 * Click on Forget Password button and provide the Invalid email id and click on Reset button
	
	 * @throws Exception
	 */
	public  void forgetPassword_InvalidEmail() throws Exception
	{
		pageUtils.clickElement(driver, btn_myAccount);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
		pageUtils.clickElement(driver, btn_Login);
		pageUtils.isElementLocated(driver, By.name("username"));
		pageUtils.clickElement(driver, btn_ForgotPwd);
		pageUtils.sendKeysAfterClearingElement(driver, txt_resetEmail, "automation@gmail.com");
		pageUtils.clickElement(driver, btn_Reset);
		pageUtils.isElementLocated(driver, By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Reset'])[1]/preceding::div[1]"));
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
	}
	
	/**
	 * Check the Error message 'Email not found'
	 * @return
	 */
	public boolean errorMessage()
	{
      String invalidEmailText=pageUtils.getTextOfElement(driver, get_emailNotFound_Text);
		
		boolean status = false;
		if(invalidEmailText.equals("Email Not Found"))
		{
			status = true;
			System.out.println("Email Not Found message is displayed");
		}
		else
		{
			System.out.println("Email Not Found message is not displayed");
			status = false;
		}
		return status;
	}
	
	/**
	 * Click on Forget Password button and provide the Valid email id and click on Reset button
	
	 * @throws Exception
	 */
	String Email;
	public  void forgetPassword_validEmail() throws Exception
	{
		Email="automation+6782@gmail.com";
		pageUtils.clickElement(driver, btn_myAccount);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
		pageUtils.clickElement(driver, btn_Login);
		pageUtils.isElementLocated(driver, By.name("username"));
		pageUtils.clickElement(driver, btn_ForgotPwd);
		pageUtils.sendKeysAfterClearingElement(driver, txt_resetEmail, Email);
		pageUtils.clickElement(driver, btn_Reset);
		pageUtils.isElementLocated(driver, By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Reset'])[1]/preceding::div[1]"));
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
	}
	
	/**
	 * Check the Success message 'New Password sent to "automation+6782@gmail.com", Kindly check email.'
	 * @return
	 */
	public boolean successMsg()
	{
		Email="automation+6782@gmail.com";
		String invalidEmailText=pageUtils.getTextOfElement(driver, get_emailNotFound_Text);
		boolean status = false;
		//System.out.println(Email);
		if(invalidEmailText.equals("New Password sent to "+Email+", Kindly check email"))
		{
			status = true;
			System.out.println("New Password sent to "+Email+", Kindly check email.....message is  displayed");
		}
		else
		{
			System.out.println("New Password sent to "+Email+", Kindly check email....message is not displayed");
			status = false;
		}
		return status;
	}
	/**
	 * Enter Valid EmailID/ Valid Password ,verify the Profile page
	 * @throws Exception
	 */
	public  void Login() throws Exception
	{
		pageUtils.clickElement(driver, btn_myAccount);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL_ONE);
		pageUtils.clickElement(driver, btn_Login);
		pageUtils.isElementLocated(driver, By.name("username"));
		pageUtils.sendKeysAfterClearingElement(driver, txt_Login_userName, "automation+6782@gmail.com");
		pageUtils.sendKeysAfterClearingElement(driver, txt_Login_Password, "TestAutomation@1");
		pageUtils.clickElement(driver, btn_Login1);
		pageUtils.isElementLocated(driver, By.xpath("//a[contains(text(),'My Profile')]"));
	}
	
	/**
	 * This method is to validate the login functionality
	 * @throws Exception
	 */
	public  void Login_Success() throws Exception
	{
		pageUtils.isElementLocated(driver, By.xpath("//a[contains(text(),'My Profile')]"));
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		pageUtils.clickElement(driver, btn_MyProfile);
		Date d = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("d MMMM yyyy");
		String strDate= formatter.format(d);
		System.out.println(strDate);
		String GetTextFromsite=pageUtils.getTextOfElement(driver, top_CurrentDate);
		if(GetTextFromsite.equals(strDate))
		{
			System.out.println("Current day date is displayed properly");
		}
		else
		{
			System.out.println("Current day date is not displayed");
		}
		
	}

}
