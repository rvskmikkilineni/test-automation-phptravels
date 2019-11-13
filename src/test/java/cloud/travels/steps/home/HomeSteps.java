package cloud.travels.steps.home;

import java.util.Map;

import org.openqa.selenium.WebDriver;

import cloud.travels.pages.home.HomePage;
import cloud.travels.utils.BrowserUtils;
import cloud.travels.utils.StepUtils;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomeSteps extends StepUtils {
	WebDriver driver = BrowserUtils.getDriverInstance();
	HomePage homePage = null;

	@When("^I click on round trip and check the return date is populated or not$")
	public void i_can_click_on_round_trip_and_check_return_date_is_populated_or_not() throws Throwable {
		homePage = new HomePage(driver);
		homePage.clickAccept();
		homePage.clickFlightTab();
		homePage.clickRoundTrip();
		homePage.returnDate_Populated();
	}
	
	@When("^I click on oneway and check the return date is disappeared or not$")
	public void i_can_click_on_oneway_and_check_return_date_is_disappeared_or_not() throws Throwable {
		homePage.clickOneWay();
		homePage.returnDate_disappeared();
	}
	
	@When("^I check the default class name$")
	public void i_can_check_bydefault_class() throws Throwable {
		homePage = new HomePage(driver);
		homePage.defaultClass();
	}
	
	@When("^I modify the class name$")
	public void i_can_modify_the_class_name(DataTable dataTable) throws Throwable {
		Map<String, String> dataMap = getDataAsMap(dataTable);
		homePage = new HomePage(driver);
		homePage.modifyClassName(dataMap);
	}
	
	@When("^I enter from and to cities$")
	public void i_can_enter_from_and_to_cities() throws Throwable {
		homePage = new HomePage(driver);
		homePage.enterFromAndTo();
	}
	
	@When("^I try to search for previous date in departure date picker$")
	public void i_can_try_to_search_for_previous_date_in_dep_date_picker() throws Throwable {
		homePage = new HomePage(driver);
		homePage.checkPreviousDepartdate();
	}

	@When("^I search for current date in departure date picker$")
	public void i_can_search_for_current_date_in_dep_date_picker() throws Throwable {
		homePage = new HomePage(driver);
		homePage.searchWithCurrentDate();
	}

	@When("^I enter the number of passengers$")
	public void i_can_enter_the_passenger_count(DataTable dataTable) throws Throwable {
		Map<String, String> dataMap = getDataAsMap(dataTable);
		homePage = new HomePage(driver);
		homePage.enterPassengerCount(dataMap);
	}
	
	@Then("^I can verify the system is navigated to results page or not$")
	public void i_can_verify_the_system_is_navigated_to_results_page_or_not() throws Throwable {
		homePage = new HomePage(driver);
		homePage.search_ResulsPage();
	}
	
	@Then("^I can verify the system is navigated to results page$")
	public void i_can_verify_the_system_is_navigated_to_result_page() throws Throwable {
		homePage = new HomePage(driver);
		homePage.navigate_Search_ResulsPage();
	}
	
	@When("^I check oneway is selected or not$")
	public void i_check_oneway_is_selected_or_not() throws Throwable {
		homePage = new HomePage(driver);
		homePage.clickAccept();
		homePage.clickFlightTab();
		homePage.checkOnewayIsSelectd();
	}

	@When("^I select Round Trip$")
	public void i_select_round_trip() throws Throwable {
		homePage = new HomePage(driver);
		homePage.clickAccept();
		homePage.clickFlightTab();
		homePage.clickRoundTrip();
	}

	@Then("^I can check the default class name in Home page and modify search page$")
	public void i_can_check_the_default_class_name_in_homepage_and_modify_search_page(DataTable dataTable) throws Throwable {
		Map<String, String> dataMap = getDataAsMap(dataTable);
		homePage = new HomePage(driver);
		homePage.checkingdefaultClass_ModifySearchPage(dataMap);
	}
	
	@Then("^I can check the passengers count in Home page and modify search page$")
	public void i_can_check_the_passenger_count_in_homepage_and_modify_search_page(DataTable dataTable) throws Throwable {
		Map<String, String> dataMap = getDataAsMap(dataTable);
		homePage = new HomePage(driver);
		homePage.checkingPassengersCount_ModifySearchPage(dataMap);
	}
	
	@Then("^I can Check the Start time end time which shows same for the two trips$")
	public void i_can_check_start_time_end_time_shows_same_for_both_trips() throws Throwable {
		homePage = new HomePage(driver);
		homePage.selectStopOne_CheckStartTimeAndEndTime();
	}
	
	@Then("^I can check the duration which is showing same for both the trips$")
	public void i_can_check_duration_shows_same_for_both_trips() throws Throwable {
		homePage = new HomePage(driver);
		homePage.selectStopOne_CheckDurationTrips();
	}

	@Then("^I can check Start time is showing same in Depart from Start location$")
	public void i_can_check_start_time_is_showing_in_depart_from_start_locations() throws Throwable {
		homePage = new HomePage(driver);
		homePage.selectStopOne_CheckStartTimeShowingDepartFromStartLocations();
	}
	
	@Then("^I can verify the from time in SRP page and Booking Summary Page$")
	public void i_can_verify_the_from_time_in_Srp_page_and_booking_summary_page() throws Throwable {
		homePage = new HomePage(driver);
		homePage.checking_FromTime_BookingSummaryPage();
	}
	
	@Then("^I can verify the Currency in SRP page and Booking Summary Page$")
	public void i_can_verify_the_currency_in_Srp_page_and_booking_summary_page() throws Throwable {
		homePage = new HomePage(driver);
		homePage.checking_Currency_BookingSummaryPage();
	}
	
	@Then("^I can login to the site and navigate to booking summary page and Verify Account Login$")
	public void i_can_login_to_the_site_booking_summary_page_and_verify_account_login() throws Throwable {
		homePage = new HomePage(driver);
		homePage.verifyAccountLogin();
	}

	@Then("^I can check the payment cards$")
	public void i_can_check_the_payment_cards() throws Throwable {
		homePage = new HomePage(driver);
		homePage.verifyPaymentCards();
	}
}
