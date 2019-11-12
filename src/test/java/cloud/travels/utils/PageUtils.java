package cloud.travels.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cloud.travels.constants.common.BrowserConstants;

public class PageUtils {
	WebElement we;
	String count;
	String parent;
	String child;
	private static PageUtils pageUtilsInstance = new PageUtils();

	private PageUtils() {
	}

	public static PageUtils getInstance() {
		if (pageUtilsInstance == null) {
			pageUtilsInstance = new PageUtils();
		}
		return pageUtilsInstance;
	}

	/**
	 * This method gives the text of the specified WebElement
	 * 
	 * @param WebElement
	 * @return String
	 */
	public String getTextOfElement(WebDriver driver, WebElement element) {
		waitForElementToLoad(driver, element);
		String elementText = element.getText();
		return elementText;
	}

	/**
	 * This method clicks the specified WebElement
	 * 
	 * @param WebElement
	 */
	public void clickElement(WebDriver driver, WebElement element) {
		long timeoutInSeconds = 30;
		WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
		element = wait.until(ExpectedConditions.elementToBeClickable(element));
		waitForElementToLoad(driver, element);
		element.click();
		waitForPageLoad(driver);
	}

	/**
	 * This method sends the text to the specified WebElement after clearing it
	 * 
	 * @param driver
	 * @param element
	 * @param text
	 */
	public void sendKeysAfterClearingElement(WebDriver driver, WebElement element, String text) {
		waitForElementToLoad(driver, element);
		element.clear();
		element.sendKeys(text);
	}

	/**
	 * This method waits for the specified element to load
	 * 
	 * @param element
	 */
	public void waitForElementToLoad(WebDriver driver, WebElement element) {
		long timeoutInSeconds = 100;
		WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
	}

	/**
	 * This method waits for the specified element to load
	 * 
	 * @param element
	 */
	public void waitForElementToLoadByLocator(WebDriver driver, By by) {
		long timeoutInSeconds = 100;
		WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
		wait.until(ExpectedConditions.presenceOfElementLocated(by));
	}

	/**
	 * Wait for page load
	 * 
	 * @param driver
	 */
	public void waitForPageLoad(WebDriver driver) {
		ExpectedCondition<Boolean> pageLoadCondition = new ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver driver) {
				return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
			}
		};
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(pageLoadCondition);
	}

	/**
	 * This method is used to check if the element is displayed without waiting
	 * for it
	 * 
	 * @param driver
	 * @param element
	 * @return boolean
	 */
	public boolean isElementLocated(WebDriver driver, By by) {
		boolean status = false;
		try {
			waitForElementToLoadByLocator(driver, by);
			status = driver.findElement(by).isDisplayed();
		} catch (Exception e) {
			status = false;
		}
		return status;
	}

	/**
	 * This method refreshes the current page
	 * 
	 * @param driver
	 */
	public void refreshPage(WebDriver driver) {
		driver.navigate().refresh();
	}

	/**
	 * This method is used to wait for fixed time
	 * 
	 * @throws InterruptedException
	 */
	public void waitForFixedTime(String waitTime) throws InterruptedException {
		if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_VERY_SMALL_ONE)) {
			Thread.sleep(1000);
		} else if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_SMALL_TWO)) {
			Thread.sleep(2000);
		} else if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_VERY_SMALL)) {
			Thread.sleep(3000);
		} else if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_SMALL)) {
			Thread.sleep(5000);
		} else if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_MEDIUM)) {
			Thread.sleep(10000);
		} else if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_LONG)) {
			Thread.sleep(15000);
		} else if (waitTime.equalsIgnoreCase(BrowserConstants.WAIT_VERY_LONG)) {
			Thread.sleep(25000);
		}
	}

	/**
	 * This method is used to check if the element has disappeared from the page
	 * 
	 * @param driver
	 * @param element
	 */
	public boolean waitForElementToDisappear(WebDriver driver, WebElement element) {
		boolean status = false;
		WebDriverWait wait = new WebDriverWait(driver, 180);
		wait.until(ExpectedConditions.invisibilityOf(element));
		return status;
	}

	/**
	 * This method is used to fetch the specified attribute value from the
	 * element
	 * 
	 * @param element
	 * @param attributeName
	 * @return String
	 */
	public String getAttributeValue(WebElement element, String attributeName) {
		String attributeValue = element.getAttribute(attributeName);
		return attributeValue;
	}

	/**
	 * This method is used to select the option by visible text
	 * 
	 * @param element
	 * @param visibleText
	 */
	public void selectByVisibleText(WebElement element, String visibleText) {
		Select select = new Select(element);
		select.selectByVisibleText(visibleText);
	}

	public void selectByIndexNumber(WebElement element, int index) {
		Select select = new Select(element);
		select.selectByIndex(index);
	}

	/**
	 * This method is to return the current day date
	 * 
	 * @return
	 */
	public String currentData() {
		Date mDate = new Date();

		DateFormat date = new SimpleDateFormat("d");

		String Date = date.format(mDate);

		return Date;
	}

	/**
	 * This method is to scroll the page
	 * 
	 * @param driver
	 */
	public void scrollDown(WebDriver driver) {

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
	}

	/**
	 * This method is to scroll the page
	 * 
	 * @param driver
	 */
	public void scrollDownSmall(WebDriver driver) {

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,50)", "");
	}
	
	/**
	 * This method is to return the date of previous day
	 * 
	 * @return
	 */
	public String YesterdayDate() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -1);
		return new SimpleDateFormat("d").format(cal.getTime());

	}
}
