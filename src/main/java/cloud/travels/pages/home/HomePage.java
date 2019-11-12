package cloud.travels.pages.home;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cloud.travels.constants.common.BrowserConstants;
import cloud.travels.utils.PageUtils;
import junit.framework.Assert;

public class HomePage {
	public WebDriver driver;
	private PageUtils pageUtils;

	String SelectedFromCity;
	String SelectedToCity;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		this.pageUtils = PageUtils.getInstance();
		PageFactory.initElements(this.driver, this);
	}

	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Hotels'])[1]/following::a[1]")
	private WebElement lnk_Flight;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Round Trip'])[1]/following::span[2]")
	private WebElement drp_Class;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Round Trip'])[1]/preceding::div[1]")
	private WebElement one_way;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='One Way'])[1]/following::div[1]")
	private WebElement round_Trip;
	@FindBy(xpath = "//div[@id='s2id_location_from']//a[@class='select2-choice']")
	private WebElement btn_From;
	@FindBy(xpath = "//div[@id='select2-drop']/div/input")
	private WebElement txt_From;
	@FindBy(xpath = "//div[@id='s2id_location_to']//a[@class='select2-choice']")
	private WebElement btn_To;
	@FindBy(xpath = "//div[@id='select2-drop']/div/input")
	private WebElement txt_To;
	@FindBy(id = "FlightsDateStart")
	private WebElement btn_Dep;
	@FindBy(id = "FlightsDateEnd")
	private WebElement btn_Ret;
	@FindBy(xpath = "//div[7]/div/div/div[2]/div")
	private List<WebElement> D_dates;
	@FindBy(xpath = "//div[8]/div/div/div[2]/div")
	private List<WebElement> R_dates;
	@FindBy(xpath = "//ul[@class='chosen-results']/li")
	private List<WebElement> class_List;
	@FindBy(id = "usertrack-consent__button")
	private WebElement btn_Accept;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='(12-75)'])[2]/following::button[1]")
	private WebElement adult_Increase;
	@FindBy(name = "fadults")
	private WebElement get_adult_count;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='(2-12)'])[2]/following::button[1]")
	private WebElement child_Increase;
	@FindBy(name = "fchildren")
	private WebElement get_child_count;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='(0-2)'])[1]/following::button[1]")
	private WebElement infant_Increase;
	@FindBy(name = "finfant")
	private WebElement get_infant_count;
	@FindBy(xpath = "(//button[@type='submit'])[2]")
	private WebElement btn_Search;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Modify Search'])[1]/preceding::p[1]")
	private WebElement get_Results_Text;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='To'])[2]/following::button[1]")
	private WebElement btn_Modify;
	@FindBy(xpath = "//ul[@id='LIST']/li/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong")
	private List<WebElement> stops_List;
	@FindBy(xpath = "(.//*[normalize-space(text()) and normalize-space(.)='Booking Summary'])[1]/following::span[1]")
	private WebElement get_FromTime_BookingSummary;
	@FindBy(xpath = "//span[@class='text-main absolute-right']")
	private WebElement get_Currency_Text;
	@FindBy(xpath = "//a[contains(text(),'Account Login')]")
	private WebElement lnk_AccountLogin;
	@FindBy(xpath = "//div[4]/div[3]/div/div/label")
	private List<WebElement> PayMentTypes_List;
	@FindBy(id = "confirmBooking")
	private WebElement btn_AvaliableityChecking;

	/**
	 * This method is to click on menu tab
	 * 
	 * @throws InterruptedException
	 */
	public void clickFlightTab() throws InterruptedException {
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Hotels'])[1]/following::a[1]"));
		pageUtils.clickElement(driver, lnk_Flight);
	}

	/**
	 * This method is to click on specific menu tab
	 * 
	 * @throws InterruptedException
	 */
	public void clickAccept() throws InterruptedException {
		//frames();
		pageUtils.scrollDownSmall(driver);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL);
		pageUtils.clickElement(driver, btn_Accept);
	}

	/**
	 * This method is to click on specific menu - One Way
	 */
	public void clickOneWay() {
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Round Trip'])[1]/preceding::div[1]"));
		pageUtils.clickElement(driver, one_way);
	}

	/**
	 * This method is to click on specific menu - Round Trip
	 */
	public void clickRoundTrip() {
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='One Way'])[1]/following::div[1]"));
		pageUtils.clickElement(driver, round_Trip);
	}

	/**
	 * This method is to check the return date picker is populated or not
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean returnDate_Populated() throws InterruptedException {
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		boolean status = false;
		if (btn_Ret.isDisplayed()) {
			System.out.println("Return date field is populated");
			status = true;
		} else {
			System.out.println("Return date field is not populated");
			status = false;
		}
		return status;
	}

	/**
	 * This method is to check the return date picker is disappeared or not
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean returnDate_disappeared() throws InterruptedException {
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_VERY_SMALL);
		boolean status = false;
		if (btn_Ret.isDisplayed()) {
			System.out.println("Return date field is Not disappeared");
			status = false;
		} else {
			System.out.println("Return date field is disappeared");
			status = true;
		}
		return status;
	}

	/**
	 * This method is to check the default class
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean defaultClass() {

		boolean status = false;
		String actualClass = drp_Class.getText();

		if (actualClass.equals("Economy")) {
			System.out.println("Economy should be selected");
		} else {
			System.out.println("Economy should not selected");
			status = false;
		}
		return status;
	}

	/**
	 * This method is to modify the class name using Feature file
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public void modifyClassName(Map<String, String> dataMap) throws InterruptedException {
		pageUtils.clickElement(driver, drp_Class);
		String className = dataMap.get("className");
		for (WebElement e : class_List) {
			if (e.getText().equals(className)) {
				System.out.println("Select Class Name:" + e.getText());
				e.click();
			}
		}
	}

	/**
	 * This method is to enter the city names for the journey
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public void enterFromAndTo() throws InterruptedException {
		pageUtils.clickElement(driver, btn_From);
		pageUtils.sendKeysAfterClearingElement(driver, txt_From, "ORD");
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL);
		pageUtils.isElementLocated(driver, By.xpath("//span[contains(text(),'ORD')]"));
		driver.findElement(By.xpath("//span[contains(text(),'ORD')]")).click();
		pageUtils.clickElement(driver, btn_To);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
		pageUtils.sendKeysAfterClearingElement(driver, txt_To, "JFK");
		pageUtils.isElementLocated(driver, By.xpath("//span[contains(text(),'JFK')]"));
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL);
		driver.findElement(By.xpath("//span[contains(text(),'JFK')]")).click();
		;
	}

	/**
	 * This method is to click on the Previous date in departure date picker
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean checkPreviousDepartdate() throws InterruptedException {
		pageUtils.clickElement(driver, btn_Dep);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
		for (WebElement e : D_dates) {
			if (e.getText().equals(pageUtils.YesterdayDate())) {
				System.out.println("Previous date:" + e.getText());
				e.click();
				break;
			}
		}
		String get_Date = btn_Dep.getText();
		boolean status = false;
		if (StringUtils.isEmpty(get_Date)) {
			System.out.println("SUCCESS:Date picker is Not Selected");
		} else {
			System.out.println("ERROR:Date picker Selected");
		}
		return status;
	}

	/**
	 * This method is to search with current date in departure date field
	 * 
	 * @return
	 * @throws InterruptedException
	 */

	public boolean searchWithCurrentDate() throws InterruptedException {
		pageUtils.clickElement(driver, btn_Dep);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
		for (WebElement e : D_dates) {
			if (e.getText().equals(pageUtils.currentData())) {
				System.out.println("Current date:" + e.getText());
				e.click();
				break;
			}
		}
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
		String get_Date = btn_Dep.getAttribute("value");
		boolean status = false;
		if (StringUtils.isEmpty(get_Date)) {
			System.out.println("ERROR:CUrrent Date is Not Selected");
			Assert.assertTrue("ERROR:CUrrent Date is Not Selected", status);
			status = false;
		} else {
			System.out.println("SUCCESS:Current Date is Selected");
			status = true;
		}
		System.out.println("Get Depature Date:" + get_Date);
		Thread.sleep(5000);
		return status;

	}

	/**
	 * This method is to select the passengers count using feature file
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public void enterPassengerCount(Map<String, String> dataMap)

	{
		String adult = dataMap.get("Adults");
		String child = dataMap.get("Childs");
		String infant = dataMap.get("Infants");

		int Adult = Integer.parseInt(adult);
		System.out.println("Adult:" + Adult);
		for (int i = 0; i < Adult - 1; i++) {
			pageUtils.clickElement(driver, adult_Increase);
		}
		int Child = Integer.parseInt(child);
		System.out.println("Child:" + Child);
		for (int i = 0; i < Child; i++) {
			pageUtils.clickElement(driver, child_Increase);

		}
		int Infant = Integer.parseInt(infant);
		System.out.println("infant:" + Infant);

		for (int i = 0; i < Infant; i++) {
			pageUtils.clickElement(driver, infant_Increase);
		}

		String a = get_adult_count.getAttribute("value");
		String c = get_child_count.getAttribute("value");
		String in = get_infant_count.getAttribute("value");
		System.out.println("Adults Count:" + a);
		System.out.println("Childs Count:" + c);
		System.out.println("Infants Count:" + in);

	}

	/**
	 * This method is to navigate to the search results page - more than 9
	 * adults,9 child,9 infants
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean search_ResulsPage() {
		boolean status = false;
		pageUtils.clickElement(driver, btn_Search);
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Modify Search'])[1]/preceding::p[1]"));
		String results = pageUtils.getTextOfElement(driver, get_Results_Text);
		if (StringUtils.isEmpty(results)) {
			System.out.println("SUCCESS:System shouldn't get navigated to result page");
			status = true;
		} else {
			System.out.println("ERROR:System navigated to result page");
			Assert.assertTrue("ERROR:System navigated to result page", status);
			status = false;
		}
		return status;
	}

	/**
	 * This method is to navigate to the search results page - 4 adults,5 child
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean navigate_Search_ResulsPage() throws InterruptedException {
		boolean status = false;
		pageUtils.clickElement(driver, btn_Search);
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Modify Search'])[1]/preceding::p[1]"));
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
		String results = pageUtils.getTextOfElement(driver, get_Results_Text);
		System.out.println("Results Text:" + results);
		if (StringUtils.isEmpty(results)) {
			System.out.println("ERROR:System shouldn't get navigated to result page");
			Assert.assertTrue("ERROR:System shouldn't get navigated to result page", status);
			status = false;
		} else {
			System.out.println("SUCCESS:System navigated to result page");
			status = true;
		}
		return status;
	}

	/**
	 * This method is to check one way is selected or not
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public void checkOnewayIsSelectd() {
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Round Trip'])[1]/preceding::div[1]"));
		if (!one_way.isSelected()) {
			System.out.println("By Default OneWay is Selected");
		} else {
			pageUtils.clickElement(driver, one_way);
		}
	}

	/**
	 * This method is to check the default class in modify search page
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean checkingdefaultClass_ModifySearchPage(Map<String, String> dataMap) {
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='To'])[2]/following::button[1]"));
		pageUtils.clickElement(driver, btn_Modify);
		pageUtils.clickElement(driver, drp_Class);
		String className = dataMap.get("className");
		boolean status = false;
		String actualClass = drp_Class.getText();
		if (actualClass.equals(className)) {
			System.out.println("Defalut Class should be selected");
		} else {
			System.out.println("Defalut Class should not selected");
			Assert.assertTrue("ERROR:Defalut Class should not selected", status);
			status = false;
		}
		return status;
	}

	/**
	 * This method is to check the passengers count in Home page against modify
	 * search page
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean checkingPassengersCount_ModifySearchPage(Map<String, String> dataMap) throws InterruptedException {
		pageUtils.isElementLocated(driver,
				By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='To'])[2]/following::button[1]"));
		pageUtils.clickElement(driver, btn_Modify);
		pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
		String adult = dataMap.get("Adults");
		String child = dataMap.get("Childs");
		String infant = dataMap.get("Infants");
		String a = get_adult_count.getAttribute("value");
		String c = get_child_count.getAttribute("value");
		String in = get_infant_count.getAttribute("value");
		System.out.println("Adults Count:" + a);
		System.out.println("Childs Count:" + c);
		System.out.println("Infants Count:" + in);
		boolean status = false;
		if (a.equals(adult)) {
			System.out.println("ADULT: Home page Adults Count and Modify search Page Adults Count Both Are Matching");
		} else {
			System.out
					.println("ADULT: Home page Adults Count and Modify search Page Adults Count Both Are Not Matching");
			Assert.assertTrue("ADULT: Home page Adults Count and Modify search Page Adults Count Both Are Not Matching",
					status);
			status = false;
		}

		if (c.equals(child)) {
			System.out.println("CHILD: Home page Childs Count and Modify search Page Childs Count Both Are Matching");
		} else {
			System.out
					.println("CHILD: Home page Childs Count and Modify search Page Childs Count Both Are Not Matching");
			Assert.assertTrue("CHILD: Home page Childs Count and Modify search Page Childs Count Both Are Not Matching",
					status);
			status = false;
		}

		if (in.equals(infant)) {
			System.out
					.println("INFANT: Home page infants Count and Modify search Page infants Count Both Are Matching");
		} else {
			System.out.println(
					"INFANT: Home page infants Count and Modify search Page infants Count Both Are Not Matching");
			Assert.assertTrue(
					"INFANT: Home page infants Count and Modify search Page infants Count Both Are Not Matching",
					status);
			status = false;
		}
		return status;
	}

	/**
	 * This method is to select the stop 1,and check the duration which is
	 * showing same for both the trips
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean selectStopOne_CheckDurationTrips() throws InterruptedException {

		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				String startDuration = driver.findElement(By.xpath(
						"//ul[@id='LIST']/li[" + i + "]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/p[2]"))
						.getText();
				String EndDuration = driver.findElement(By.xpath(
						"//ul[@id='LIST']/li[" + i + "]/div/div[2]/div/div[3]/div/div/div/div[2]/div/ul/li/p[2]"))
						.getText();

				if (startDuration.equals(EndDuration)) {
					System.out.println("Start Duration and End Duration showing same for both the trips");
					Assert.assertTrue("ERROR: Start Duration and End Duration showing same for both the trips", status);
					status = false;
				} else {
					System.out.println("Start Duration and End Duration showing different for both the trips");
					status = true;
				}
			}
		}
		return status;
	}

	/**
	 * This method is to select the stop 1,and check Start time is showing same
	 * in Depart from Start location and at 1st stop
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean selectStopOne_CheckStartTimeShowingDepartFromStartLocations() throws InterruptedException {

		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				String startDepFromTime = driver
						.findElement(By
								.xpath("//ul[@id='LIST']/li[" + i + "]/div/div[2]/div/div[2]/div/div/div/div/div/p[3]"))
						.getText();
				String startDepToTime = driver
						.findElement(By
								.xpath("//ul[@id='LIST']/li[" + i + "]/div/div[2]/div/div[3]/div/div/div/div/div/p[3]"))
						.getText();

				if (startDepFromTime.equals(startDepToTime)) {
					System.out.println("Start Time showing Depart From Start Locations");
					Assert.assertTrue("ERROR: Start Time showing Depart From Start Locations", status);
					status = false;
				} else {
					System.out.println("Different Times showing Depart From Start Locations");
					status = true;
				}
			}
		}
		return status;
	}

	/**
	 * This method is to select the stop 1,and check Start time and EndTime
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean selectStopOne_CheckStartTimeAndEndTime() throws InterruptedException {

		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				String startDepTime = driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i
						+ "]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[2]/span")).getText();
				String endDepTime = driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i
						+ "]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[2]/span[3]")).getText();

				String arraDepTime = driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i
						+ "]/div/div[2]/div/div[3]/div/div/div/div[2]/div/ul/li/div[2]/span")).getText();
				String arraEndTime = driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i
						+ "]/div/div[2]/div/div[3]/div/div/div/div[2]/div/ul/li/div[2]/span[3]")).getText();

				if (startDepTime.equals(arraDepTime)) {
					if (endDepTime.equals(arraEndTime)) {
						System.out.println("Start Time and End Time showing same for both the trips");
						Assert.assertTrue("ERROR: Start Time and End Time showing same for both the trips", status);
						status = false;
					}
				} else {
					System.out.println("Start Time and End Time both are showing different");
					status = true;
				}
			}
		}
		return status;
	}

	/**
	 * This method is to verify the from time in SRP page and Booking Summary
	 * Page
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean checking_FromTime_BookingSummaryPage() throws InterruptedException {
		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				String startDepTime = driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i
						+ "]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[2]/span")).getText();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div[2]/form/div[2]/div/button"))
						.click();
				pageUtils.isElementLocated(driver, By.xpath(
						"(.//*[normalize-space(text()) and normalize-space(.)='Booking Summary'])[1]/following::span[1]"));
				String FromDateTime = pageUtils.getTextOfElement(driver, get_FromTime_BookingSummary);
				String[] FromTime = FromDateTime.split(" ");
				System.out.println("FromTime:" + FromTime[1]);
				if (startDepTime.equals(FromTime[1])) {
					System.out.println("SRP PAGE START TIME AND BOOKING SUMMARY PAGE START TIME BOTH ARE MATCHING");
					status = true;

				} else {
					System.out.println("SRP PAGE START TIME AND BOOKING SUMMARY PAGE START TIME BOTH ARE NOT MATCHING");
					Assert.assertTrue("SRP PAGE START TIME AND BOOKING SUMMARY PAGE START TIME BOTH ARE NOT MATCHING",
							status);
					status = false;
				}
			}
		}
		return status;
	}

	/**
	 * This method is to verify the Currency in SRP page and Booking Summary
	 * Page
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean checking_Currency_BookingSummaryPage() throws InterruptedException {
		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				String CurrencyType = driver
						.findElement(
								By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div[2]/form/div[2]/div/div/p/strong"))
						.getText();
				String[] SRPCurrency = CurrencyType.split(" ");
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div[2]/form/div[2]/div/button"))
						.click();
				pageUtils.isElementLocated(driver, By.xpath(
						"(.//*[normalize-space(text()) and normalize-space(.)='Booking Summary'])[1]/following::span[1]"));

				String BookingSummaryCurrency = pageUtils.getTextOfElement(driver, get_Currency_Text);
				String[] Booking_Summary_Currency = BookingSummaryCurrency.split(" ");
				System.out.println("Currency:" + Booking_Summary_Currency[0]);
				if (SRPCurrency[0].equals(Booking_Summary_Currency[0])) {
					System.out.println("SRP PAGE CURRENCY AND BOOKING SUMMARY PAGE CURRENCY BOTH ARE MATCHING");
					status = true;
				} else {
					System.out.println("SRP PAGE CURRENCY AND BOOKING SUMMARY PAGE CURRENCY BOTH ARE NOT MATCHING");
					Assert.assertTrue("SRP PAGE CURRENCY AND BOOKING SUMMARY PAGE CURRENCY BOTH ARE NOT MATCHING",
							status);
					status = false;
				}
			}
		}
		return status;
	}

	/**
	 * This method is to verify the Account Login link Is displayed or not in
	 * Booking Summary page
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean verifyAccountLogin() throws InterruptedException {
		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div[2]/form/div[2]/div/button"))
						.click();
				pageUtils.isElementLocated(driver, By.xpath(
						"(.//*[normalize-space(text()) and normalize-space(.)='Booking Summary'])[1]/following::span[1]"));
				try {
					if (lnk_AccountLogin.isDisplayed()) {
						System.out.println("user is prompted to login or continue as guest which is not expected");
						Assert.assertTrue("user is prompted to login or continue as guest which is not expected",
								status);
						status = false;
					}
				} catch (Exception e) {
					System.out.println("Login or continue as guest buttons not displayed");
					status = true;
				}
			}
		}
		return status;

	}

	/**
	 * This method is to verify the PaymentCard Types
	 * 
	 * @return
	 * @throws InterruptedException
	 */
	public boolean verifyPaymentCards() throws InterruptedException {
		boolean status = false;
		for (int i = 1; i <= stops_List.size(); i++) {
			if (driver
					.findElement(By.xpath("//ul[@id='LIST']/li[" + i
							+ "]/div/div/div/form/div/div/div/div/div/div/div/div[2]/div//strong"))
					.getText().equals("Stops 1")) {
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div")).click();
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				pageUtils.waitForFixedTime(BrowserConstants.WAIT_SMALL_TWO);
				driver.findElement(By.xpath("//ul[@id='LIST']/li[" + i + "]/div/div/div[2]/form/div[2]/div/button"))
						.click();
				pageUtils.isElementLocated(driver, By.xpath(
						"(.//*[normalize-space(text()) and normalize-space(.)='Booking Summary'])[1]/following::span[1]"));
				if (PayMentTypes_List.size() <= 1) {
					System.out.println("Only Creadit Card Is Displayed");
					Assert.assertTrue("Only Creadit Card Is Displayed", status);
					status = false;
				}
				if (PayMentTypes_List.size() > 1) {
					System.out.println("More Than One Card Is displayed");
					status = true;
				}
			}
		}
		return status;
	}

	/**
	 * This method is to switch between the frames
	 * 
	 * @throws InterruptedException
	 */
	public void frames() throws InterruptedException {
		List<WebElement> f = driver.findElements(By.tagName("iframe"));
		System.out.println("iframe:" + f.size());
		// pageUtils.isElementLocated(driver,
		// By.xpath("//div[@id='livechat-eye-catcher']/div"));
		// driver.findElement(By.xpath("//div[@id='livechat-eye-catcher']/div")).click();
		driver.switchTo().frame(driver.findElement(By.name("chat-widget")));
		System.out.println(1);
		pageUtils.isElementLocated(driver, By.cssSelector(".e1mwfyk10 > .lc-1mpchac"));
		System.out.println(2);
		Thread.sleep(3000);
		driver.findElement(By.cssSelector(".e1mwfyk10 > .lc-1mpchac")).click();
		System.out.println(3);
		driver.switchTo().defaultContent();

	}

}
